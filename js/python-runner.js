/**
 * Python Runner Module
 * Handles Pyodide initialization and Python code execution
 */

const PythonRunner = (function() {
    let pyodide = null;
    let isLoading = false;
    let loadPromise = null;

    // Callbacks for status updates
    let onStatusChange = null;

    /**
     * Set callback for status changes
     */
    function setStatusCallback(callback) {
        onStatusChange = callback;
    }

    /**
     * Update status and notify callback
     */
    function updateStatus(status, message) {
        if (onStatusChange) {
            onStatusChange(status, message);
        }
    }

    /**
     * Initialize Pyodide
     */
    async function init() {
        if (pyodide) {
            return pyodide;
        }

        if (loadPromise) {
            return loadPromise;
        }

        isLoading = true;
        updateStatus('loading', 'Loading Python...');

        loadPromise = (async () => {
            try {
                // loadPyodide is loaded from the CDN script
                pyodide = await loadPyodide({
                    indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/'
                });

                // Set up stdout capture
                await pyodide.runPythonAsync(`
import sys
from io import StringIO

class OutputCapture:
    def __init__(self):
        self.buffer = StringIO()

    def write(self, text):
        self.buffer.write(text)

    def flush(self):
        pass

    def getvalue(self):
        return self.buffer.getvalue()

    def clear(self):
        self.buffer = StringIO()

__output_capture__ = OutputCapture()
sys.stdout = __output_capture__
sys.stderr = __output_capture__
                `);

                isLoading = false;
                updateStatus('ready', 'Python Ready');
                console.log('Pyodide initialized successfully');
                return pyodide;
            } catch (error) {
                isLoading = false;
                updateStatus('error', 'Failed to load Python');
                console.error('Failed to initialize Pyodide:', error);
                throw error;
            }
        })();

        return loadPromise;
    }

    /**
     * Run Python code and return the output
     */
    async function run(code) {
        if (!pyodide) {
            await init();
        }

        // Clear previous output
        await pyodide.runPythonAsync('__output_capture__.clear()');

        const result = {
            output: '',
            error: null,
            returnValue: null
        };

        try {
            // Execute the user's code
            result.returnValue = await pyodide.runPythonAsync(code);

            // Capture the printed output
            result.output = await pyodide.runPythonAsync('__output_capture__.getvalue()');

            // Clean up trailing newline for comparison
            result.output = result.output.trimEnd();

        } catch (error) {
            // Parse Python error message
            result.error = formatPythonError(error.message);
        }

        return result;
    }

    /**
     * Format Python error messages to be more readable
     */
    function formatPythonError(errorMessage) {
        // Extract the most relevant part of the error
        const lines = errorMessage.split('\n');
        const relevantLines = [];
        let foundError = false;

        for (const line of lines) {
            // Skip Pyodide internal stack traces
            if (line.includes('pyodide') || line.includes('PythonError')) {
                continue;
            }

            // Start capturing from File "<exec>" or error type
            if (line.includes('File "<exec>"') ||
                line.match(/^\w+Error:/) ||
                line.match(/^  File/) ||
                line.trim().startsWith('^')) {
                foundError = true;
            }

            if (foundError) {
                relevantLines.push(line);
            }
        }

        // If no specific error found, return a cleaned version
        if (relevantLines.length === 0) {
            // Find lines with actual error info
            for (const line of lines) {
                if (line.match(/Error:/) || line.match(/Exception:/)) {
                    relevantLines.push(line);
                }
            }
        }

        return relevantLines.length > 0
            ? relevantLines.join('\n').trim()
            : errorMessage;
    }

    /**
     * Check if Pyodide is ready
     */
    function isReady() {
        return pyodide !== null && !isLoading;
    }

    /**
     * Check if Pyodide is currently loading
     */
    function isInitializing() {
        return isLoading;
    }

    // Public API
    return {
        init,
        run,
        isReady,
        isInitializing,
        setStatusCallback
    };
})();
