/**
 * Code Editor Module
 * Manages the CodeMirror editor instance for Python code editing
 */

const EditorModule = (function() {
    let editor = null;
    let editorView = null;

    // Python keywords and built-in functions for autocompletion
    const pythonKeywords = [
        'False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await',
        'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except',
        'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is',
        'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try',
        'while', 'with', 'yield'
    ];

    const pythonBuiltins = [
        { label: 'print', detail: '(value, ...)', info: 'Print values to console' },
        { label: 'input', detail: '(prompt)', info: 'Read user input' },
        { label: 'len', detail: '(obj)', info: 'Return length of object' },
        { label: 'range', detail: '(start, stop, step)', info: 'Generate number sequence' },
        { label: 'type', detail: '(obj)', info: 'Return type of object' },
        { label: 'int', detail: '(x)', info: 'Convert to integer' },
        { label: 'float', detail: '(x)', info: 'Convert to float' },
        { label: 'str', detail: '(x)', info: 'Convert to string' },
        { label: 'bool', detail: '(x)', info: 'Convert to boolean' },
        { label: 'list', detail: '(iterable)', info: 'Create a list' },
        { label: 'dict', detail: '(**kwargs)', info: 'Create a dictionary' },
        { label: 'set', detail: '(iterable)', info: 'Create a set' },
        { label: 'tuple', detail: '(iterable)', info: 'Create a tuple' },
        { label: 'abs', detail: '(x)', info: 'Return absolute value' },
        { label: 'max', detail: '(iterable)', info: 'Return maximum value' },
        { label: 'min', detail: '(iterable)', info: 'Return minimum value' },
        { label: 'sum', detail: '(iterable)', info: 'Return sum of values' },
        { label: 'sorted', detail: '(iterable)', info: 'Return sorted list' },
        { label: 'reversed', detail: '(seq)', info: 'Return reversed iterator' },
        { label: 'enumerate', detail: '(iterable)', info: 'Return index-value pairs' },
        { label: 'zip', detail: '(*iterables)', info: 'Combine iterables' },
        { label: 'map', detail: '(func, iterable)', info: 'Apply function to items' },
        { label: 'filter', detail: '(func, iterable)', info: 'Filter items by function' },
        { label: 'open', detail: '(file, mode)', info: 'Open a file' },
        { label: 'round', detail: '(number, digits)', info: 'Round a number' },
        { label: 'isinstance', detail: '(obj, class)', info: 'Check object type' },
        { label: 'hasattr', detail: '(obj, name)', info: 'Check for attribute' },
        { label: 'getattr', detail: '(obj, name)', info: 'Get attribute value' },
        { label: 'setattr', detail: '(obj, name, value)', info: 'Set attribute value' },
    ];

    // We'll dynamically load CodeMirror since it's ESM
    async function loadCodeMirror() {
        // Import CodeMirror modules from CDN
        const [
            { EditorView, basicSetup, minimalSetup },
            { EditorState },
            { python },
            { oneDark },
            { keymap },
            { indentWithTab },
            { autocompletion, completeFromList }
        ] = await Promise.all([
            import('https://cdn.jsdelivr.net/npm/codemirror@6.0.1/dist/index.js'),
            import('https://cdn.jsdelivr.net/npm/@codemirror/state@6.4.1/dist/index.js'),
            import('https://cdn.jsdelivr.net/npm/@codemirror/lang-python@6.1.4/dist/index.js'),
            import('https://cdn.jsdelivr.net/npm/@codemirror/theme-one-dark@6.1.2/dist/index.js'),
            import('https://cdn.jsdelivr.net/npm/@codemirror/view@6.24.0/dist/index.js'),
            import('https://cdn.jsdelivr.net/npm/@codemirror/commands@6.3.3/dist/index.js'),
            import('https://cdn.jsdelivr.net/npm/@codemirror/autocomplete@6.12.0/dist/index.js')
        ]);

        return { EditorView, basicSetup, EditorState, python, oneDark, keymap, indentWithTab, autocompletion, completeFromList };
    }

    /**
     * Initialize the editor in the specified container
     */
    async function init(containerId, initialCode = '') {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error('Editor container not found:', containerId);
            return;
        }

        try {
            const { EditorView, basicSetup, EditorState, python, oneDark, keymap, indentWithTab, autocompletion, completeFromList } = await loadCodeMirror();

            // Create Python completion source
            function pythonCompletions(context) {
                const word = context.matchBefore(/\w*/);
                if (!word || (word.from === word.to && !context.explicit)) {
                    return null;
                }

                // Only show completions after 2+ characters
                if (word.to - word.from < 2 && !context.explicit) {
                    return null;
                }

                // Combine keywords and builtins
                const keywordCompletions = pythonKeywords.map(kw => ({
                    label: kw,
                    type: 'keyword'
                }));

                const builtinCompletions = pythonBuiltins.map(b => ({
                    label: b.label,
                    type: 'function',
                    detail: b.detail,
                    info: b.info,
                    apply: b.label + '()'
                }));

                // Extract user-defined variables from current code
                const code = context.state.doc.toString();
                const varPattern = /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*=/g;
                const userVars = new Set();
                let match;
                while ((match = varPattern.exec(code)) !== null) {
                    const varName = match[1];
                    if (!pythonKeywords.includes(varName) && !pythonBuiltins.some(b => b.label === varName)) {
                        userVars.add(varName);
                    }
                }

                const varCompletions = Array.from(userVars).map(v => ({
                    label: v,
                    type: 'variable'
                }));

                return {
                    from: word.from,
                    options: [...keywordCompletions, ...builtinCompletions, ...varCompletions],
                    validFor: /^\w*$/
                };
            }

            // Custom theme extensions for dark mode
            const customTheme = EditorView.theme({
                '&': {
                    height: '100%',
                    backgroundColor: '#1e293b'
                },
                '.cm-content': {
                    caretColor: '#f8fafc',
                    fontFamily: "'Fira Code', 'Monaco', 'Consolas', monospace"
                },
                '.cm-cursor': {
                    borderLeftColor: '#f8fafc'
                },
                '&.cm-focused .cm-selectionBackground, .cm-selectionBackground': {
                    backgroundColor: '#334155'
                },
                '.cm-gutters': {
                    backgroundColor: '#334155',
                    color: '#64748b',
                    border: 'none'
                },
                '.cm-activeLineGutter': {
                    backgroundColor: '#475569'
                },
                '.cm-activeLine': {
                    backgroundColor: 'rgba(79, 70, 229, 0.1)'
                }
            });

            // Create editor state with Tab key support and autocompletion
            const state = EditorState.create({
                doc: initialCode,
                extensions: [
                    basicSetup,
                    python(),
                    oneDark,
                    customTheme,
                    EditorView.lineWrapping,
                    keymap.of([indentWithTab]),  // Enable Tab for indentation
                    autocompletion({
                        override: [pythonCompletions],
                        activateOnTyping: true,
                        maxRenderedOptions: 15
                    })
                ]
            });

            // Create editor view
            editorView = new EditorView({
                state,
                parent: container
            });

            editor = {
                view: editorView,
                EditorState,
                EditorView
            };

            console.log('CodeMirror editor initialized');
            return true;
        } catch (error) {
            console.error('Failed to initialize CodeMirror:', error);
            // Fallback to textarea if CodeMirror fails
            createFallbackEditor(container, initialCode);
            return false;
        }
    }

    /**
     * Fallback to simple textarea if CodeMirror fails to load
     */
    function createFallbackEditor(container, initialCode) {
        // Clear container safely
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        const textarea = document.createElement('textarea');
        textarea.id = 'fallback-editor';
        textarea.value = initialCode;
        textarea.style.width = '100%';
        textarea.style.height = '100%';
        textarea.style.background = '#1e293b';
        textarea.style.color = '#f8fafc';
        textarea.style.border = 'none';
        textarea.style.padding = '1rem';
        textarea.style.fontFamily = "'Fira Code', monospace";
        textarea.style.fontSize = '14px';
        textarea.style.resize = 'none';
        textarea.style.outline = 'none';
        textarea.style.tabSize = '4';
        textarea.spellcheck = false;

        // Handle Tab key to insert 4 spaces
        textarea.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = this.selectionStart;
                const end = this.selectionEnd;

                // Insert 4 spaces at cursor position
                this.value = this.value.substring(0, start) + '    ' + this.value.substring(end);

                // Move cursor after the inserted spaces
                this.selectionStart = this.selectionEnd = start + 4;
            }
        });

        container.appendChild(textarea);

        editor = {
            fallback: textarea
        };
    }

    /**
     * Get the current code from the editor
     */
    function getCode() {
        if (!editor) return '';

        if (editor.fallback) {
            return editor.fallback.value;
        }

        if (editorView) {
            return editorView.state.doc.toString();
        }

        return '';
    }

    /**
     * Set the code in the editor
     */
    function setCode(code) {
        if (!editor) return;

        if (editor.fallback) {
            editor.fallback.value = code;
            return;
        }

        if (editorView && editor.EditorState) {
            const transaction = editorView.state.update({
                changes: {
                    from: 0,
                    to: editorView.state.doc.length,
                    insert: code
                }
            });
            editorView.dispatch(transaction);
        }
    }

    /**
     * Focus the editor
     */
    function focus() {
        if (editor?.fallback) {
            editor.fallback.focus();
        } else if (editorView) {
            editorView.focus();
        }
    }

    /**
     * Check if editor is ready
     */
    function isReady() {
        return editor !== null;
    }

    // Public API
    return {
        init,
        getCode,
        setCode,
        focus,
        isReady
    };
})();
