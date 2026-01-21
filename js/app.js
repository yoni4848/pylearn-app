/**
 * Main Application Module
 * Ties together all modules and handles user interactions
 */

const App = (function() {
    let currentLessonId = 1;
    let currentDifficulty = 'easy';
    let hintIndex = 0;
    let isRunning = false;

    // Quiz state
    let currentQuizIndex = 0;
    let quizScore = 0;
    let selectedOption = null;
    let quizCompleted = false;

    // DOM Elements
    const elements = {
        runBtn: null,
        checkBtn: null,
        resetBtn: null,
        outputConsole: null,
        feedback: null,
        pyodideStatus: null,
        challengeTabs: null,
        challengeInstructions: null,
        challengeProgress: null,
        challengeSelector: null,
        quizSection: null,
        quizContent: null,
        quizProgress: null,
        checkQuizBtn: null,
        nextQuizBtn: null,
        startChallengesBtn: null,
        // Reference panel elements
        referenceBtn: null,
        referencePanel: null,
        referenceClose: null,
        referenceTitle: null,
        referenceSyntax: null,
        referenceFunctions: null,
        referenceExamples: null,
        referenceErrors: null
    };

    /**
     * Initialize the application
     */
    async function init() {
        console.log('Initializing PyLearn...');

        // Cache DOM elements
        elements.runBtn = document.getElementById('run-btn');
        elements.checkBtn = document.getElementById('check-btn');
        elements.resetBtn = document.getElementById('reset-btn');
        elements.outputConsole = document.getElementById('output-console');
        elements.feedback = document.getElementById('feedback');
        elements.pyodideStatus = document.getElementById('pyodide-status');
        elements.challengeTabs = document.getElementById('challenge-tabs');
        elements.challengeInstructions = document.getElementById('challenge-instructions');
        elements.challengeProgress = document.getElementById('challenge-progress');
        elements.challengeSelector = document.getElementById('challenge-selector');
        elements.quizSection = document.getElementById('quiz-section');
        elements.quizContent = document.getElementById('quiz-content');
        elements.quizProgress = document.getElementById('quiz-progress');
        elements.checkQuizBtn = document.getElementById('check-quiz-btn');
        elements.nextQuizBtn = document.getElementById('next-quiz-btn');
        elements.startChallengesBtn = document.getElementById('start-challenges-btn');

        // Reference panel elements
        elements.referenceBtn = document.getElementById('reference-btn');
        elements.referencePanel = document.getElementById('reference-panel');
        elements.referenceClose = document.getElementById('reference-close');
        elements.referenceTitle = document.getElementById('reference-title');
        elements.referenceSyntax = document.getElementById('reference-syntax');
        elements.referenceFunctions = document.getElementById('reference-functions');
        elements.referenceExamples = document.getElementById('reference-examples');
        elements.referenceErrors = document.getElementById('reference-errors');

        // Set up Python runner status callback
        PythonRunner.setStatusCallback(updatePyodideStatus);

        // Set up lesson change callback
        LessonsModule.setLessonChangeCallback(loadLesson);

        // Bind event listeners
        bindEvents();

        // Load saved progress
        currentLessonId = ProgressModule.getCurrentLessonId();

        // Render initial state
        renderNavigationWithProgress();

        // Load current lesson
        const lesson = LessonsModule.renderContent(currentLessonId);

        // Check if quiz is completed for this lesson
        if (ProgressModule.isQuizCompleted(currentLessonId)) {
            showChallenges();
            loadChallenge('easy');
        } else {
            // Show quiz first
            showQuiz();
            loadQuiz();
        }

        // Initialize editor with starter code
        const challenge = getCurrentChallenge();
        await EditorModule.init('code-editor', challenge ? challenge.starterCode : '# Write your code here\n');

        // Start loading Pyodide in background
        PythonRunner.init();

        console.log('PyLearn initialized');
    }

    /**
     * Bind event listeners to buttons
     */
    function bindEvents() {
        elements.runBtn.addEventListener('click', handleRun);
        elements.checkBtn.addEventListener('click', handleCheck);
        elements.resetBtn.addEventListener('click', handleReset);

        // Quiz buttons
        if (elements.checkQuizBtn) {
            elements.checkQuizBtn.addEventListener('click', handleCheckQuiz);
        }
        if (elements.nextQuizBtn) {
            elements.nextQuizBtn.addEventListener('click', handleNextQuiz);
        }
        if (elements.startChallengesBtn) {
            elements.startChallengesBtn.addEventListener('click', handleStartChallenges);
        }

        // Challenge tab clicks
        if (elements.challengeTabs) {
            elements.challengeTabs.addEventListener('click', (e) => {
                if (e.target.classList.contains('challenge-tab')) {
                    const difficulty = e.target.dataset.difficulty;
                    loadChallenge(difficulty);
                }
            });
        }

        // Keyboard shortcut: Ctrl/Cmd + Enter to run
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                handleRun();
            }
            // Alt + R to toggle reference panel
            if (e.altKey && e.key === 'r') {
                e.preventDefault();
                toggleReferencePanel();
            }
        });

        // Reference panel toggle button
        if (elements.referenceBtn) {
            elements.referenceBtn.addEventListener('click', toggleReferencePanel);
        }

        // Reference panel close button
        if (elements.referenceClose) {
            elements.referenceClose.addEventListener('click', closeReferencePanel);
        }
    }

    /**
     * Update Pyodide status indicator
     */
    function updatePyodideStatus(status, message) {
        if (!elements.pyodideStatus) return;

        elements.pyodideStatus.textContent = message;
        elements.pyodideStatus.className = 'status-indicator ' + status;

        // Enable/disable run button based on status
        if (elements.runBtn) {
            elements.runBtn.disabled = status === 'loading';
        }
        if (elements.checkBtn) {
            elements.checkBtn.disabled = status === 'loading';
        }
    }

    /**
     * Toggle reference panel visibility
     */
    function toggleReferencePanel() {
        if (!elements.referencePanel) return;

        const isOpen = elements.referencePanel.classList.contains('open');

        if (isOpen) {
            closeReferencePanel();
        } else {
            openReferencePanel();
        }
    }

    /**
     * Open reference panel
     */
    function openReferencePanel() {
        if (!elements.referencePanel) return;

        elements.referencePanel.classList.add('open');
        if (elements.referenceBtn) {
            elements.referenceBtn.classList.add('active');
        }

        // Update content for current lesson
        updateReferenceContent(currentLessonId);
    }

    /**
     * Close reference panel
     */
    function closeReferencePanel() {
        if (!elements.referencePanel) return;

        elements.referencePanel.classList.remove('open');
        if (elements.referenceBtn) {
            elements.referenceBtn.classList.remove('active');
        }
    }

    /**
     * Update reference panel content for a specific lesson
     */
    function updateReferenceContent(lessonId) {
        // Check if REFERENCE_DATA exists
        if (typeof REFERENCE_DATA === 'undefined') {
            console.warn('REFERENCE_DATA not loaded');
            return;
        }

        const data = REFERENCE_DATA[lessonId];
        if (!data) {
            console.warn('No reference data for lesson:', lessonId);
            return;
        }

        // Update title
        if (elements.referenceTitle) {
            elements.referenceTitle.textContent = data.title || 'Quick Reference';
        }

        // Update syntax section
        if (elements.referenceSyntax) {
            renderReferenceSyntax(data.syntax || []);
        }

        // Update functions section
        if (elements.referenceFunctions) {
            renderReferenceFunctions(data.functions || []);
        }

        // Update examples section
        if (elements.referenceExamples) {
            renderReferenceExamples(data.examples || []);
        }

        // Update errors section
        if (elements.referenceErrors) {
            renderReferenceErrors(data.errors || []);
        }
    }

    /**
     * Render syntax items in reference panel
     */
    function renderReferenceSyntax(items) {
        const container = elements.referenceSyntax;
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'reference-item';

            const code = document.createElement('code');
            code.textContent = item.code;

            const desc = document.createElement('span');
            desc.className = 'desc';
            desc.textContent = ' - ' + item.desc;

            div.appendChild(code);
            div.appendChild(desc);
            container.appendChild(div);
        });
    }

    /**
     * Render function items in reference panel
     */
    function renderReferenceFunctions(items) {
        const container = elements.referenceFunctions;
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'reference-item';

            const code = document.createElement('code');
            code.textContent = item.name;

            const desc = document.createElement('span');
            desc.className = 'desc';
            desc.textContent = ' - ' + item.desc;

            div.appendChild(code);
            div.appendChild(desc);
            container.appendChild(div);
        });
    }

    /**
     * Render examples in reference panel
     */
    function renderReferenceExamples(items) {
        const container = elements.referenceExamples;
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'reference-example';

            const title = document.createElement('div');
            title.className = 'title';
            title.textContent = item.title;

            const pre = document.createElement('pre');
            pre.textContent = item.code;

            div.appendChild(title);
            div.appendChild(pre);
            container.appendChild(div);
        });
    }

    /**
     * Render error items in reference panel
     */
    function renderReferenceErrors(items) {
        const container = elements.referenceErrors;
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'reference-error';

            const errorName = document.createElement('span');
            errorName.className = 'error-name';
            errorName.textContent = item.error;

            const cause = document.createElement('span');
            cause.className = 'error-cause';
            cause.textContent = ' - ' + item.cause;

            div.appendChild(errorName);
            div.appendChild(cause);
            container.appendChild(div);
        });
    }

    /**
     * Render navigation with current progress
     */
    function renderNavigationWithProgress() {
        const completedLessons = ProgressModule.getCompletedLessons();
        LessonsModule.renderNavigation(completedLessons, currentLessonId);
    }

    /**
     * Show quiz section, hide challenges
     */
    function showQuiz() {
        if (elements.quizSection) {
            elements.quizSection.style.display = 'block';
        }
        if (elements.challengeSelector) {
            elements.challengeSelector.style.display = 'none';
        }
        if (elements.challengeInstructions) {
            elements.challengeInstructions.style.display = 'none';
        }
    }

    /**
     * Show challenges section, hide quiz
     */
    function showChallenges() {
        if (elements.quizSection) {
            elements.quizSection.style.display = 'none';
        }
        if (elements.challengeSelector) {
            elements.challengeSelector.style.display = 'flex';
        }
        if (elements.challengeInstructions) {
            elements.challengeInstructions.style.display = 'block';
        }
    }

    /**
     * Load quiz for current lesson
     */
    function loadQuiz() {
        const lesson = LessonsModule.getCurrentLesson();
        if (!lesson || !lesson.quiz || lesson.quiz.length === 0) {
            // No quiz, go straight to challenges
            ProgressModule.completeQuiz(currentLessonId);
            showChallenges();
            loadChallenge('easy');
            return;
        }

        currentQuizIndex = 0;
        quizScore = 0;
        quizCompleted = false;
        selectedOption = null;

        renderQuizQuestion();
    }

    /**
     * Render current quiz question
     */
    function renderQuizQuestion() {
        const lesson = LessonsModule.getCurrentLesson();
        if (!lesson || !lesson.quiz) return;

        const quiz = lesson.quiz;
        const question = quiz[currentQuizIndex];

        // Update progress
        if (elements.quizProgress) {
            elements.quizProgress.textContent = `Question ${currentQuizIndex + 1} of ${quiz.length}`;
        }

        // Build question HTML
        const optionLetters = ['A', 'B', 'C', 'D'];
        let html = `<div class="quiz-question">${question.question}</div>`;
        html += '<div class="quiz-options">';

        question.options.forEach((option, index) => {
            html += `
                <div class="quiz-option" data-index="${index}">
                    <span class="quiz-option-marker">${optionLetters[index]}</span>
                    <span class="quiz-option-text">${option}</span>
                </div>
            `;
        });

        html += '</div>';

        if (elements.quizContent) {
            elements.quizContent.innerHTML = html;

            // Add click handlers to options
            const options = elements.quizContent.querySelectorAll('.quiz-option');
            options.forEach(opt => {
                opt.addEventListener('click', () => selectQuizOption(opt));
            });
        }

        // Reset buttons
        if (elements.checkQuizBtn) {
            elements.checkQuizBtn.style.display = 'inline-flex';
            elements.checkQuizBtn.disabled = true;
        }
        if (elements.nextQuizBtn) {
            elements.nextQuizBtn.style.display = 'none';
        }
        if (elements.startChallengesBtn) {
            elements.startChallengesBtn.style.display = 'none';
        }

        selectedOption = null;
    }

    /**
     * Select a quiz option
     */
    function selectQuizOption(optionElement) {
        // Remove selected from all
        const options = elements.quizContent.querySelectorAll('.quiz-option');
        options.forEach(opt => opt.classList.remove('selected'));

        // Add selected to clicked
        optionElement.classList.add('selected');
        selectedOption = parseInt(optionElement.dataset.index);

        // Enable check button
        if (elements.checkQuizBtn) {
            elements.checkQuizBtn.disabled = false;
        }
    }

    /**
     * Handle check quiz answer
     */
    function handleCheckQuiz() {
        if (selectedOption === null) return;

        const lesson = LessonsModule.getCurrentLesson();
        if (!lesson || !lesson.quiz) return;

        const question = lesson.quiz[currentQuizIndex];
        const isCorrect = selectedOption === question.correct;

        // Mark options
        const options = elements.quizContent.querySelectorAll('.quiz-option');
        options.forEach((opt, index) => {
            opt.classList.add('disabled');
            if (index === question.correct) {
                opt.classList.add('correct');
            } else if (index === selectedOption && !isCorrect) {
                opt.classList.add('incorrect');
            }
        });

        // Update score
        if (isCorrect) {
            quizScore++;
        }

        // Show feedback
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        if (isCorrect) {
            feedbackDiv.textContent = 'Correct!';
        } else {
            feedbackDiv.textContent = `Incorrect. The correct answer is ${['A', 'B', 'C', 'D'][question.correct]}.`;
        }
        elements.quizContent.appendChild(feedbackDiv);

        // Update buttons
        if (elements.checkQuizBtn) {
            elements.checkQuizBtn.style.display = 'none';
        }

        if (currentQuizIndex < lesson.quiz.length - 1) {
            // More questions
            if (elements.nextQuizBtn) {
                elements.nextQuizBtn.style.display = 'inline-flex';
            }
        } else {
            // Quiz complete
            if (elements.startChallengesBtn) {
                elements.startChallengesBtn.style.display = 'inline-flex';
            }
        }
    }

    /**
     * Handle next quiz question
     */
    function handleNextQuiz() {
        currentQuizIndex++;
        selectedOption = null;
        renderQuizQuestion();
    }

    /**
     * Handle start challenges button
     */
    function handleStartChallenges() {
        const lesson = LessonsModule.getCurrentLesson();

        // Show completion message briefly
        if (elements.quizContent) {
            elements.quizContent.innerHTML = `
                <div class="quiz-completed">
                    <h4>Quiz Complete!</h4>
                    <div class="quiz-score">${quizScore}/${lesson.quiz.length}</div>
                    <p>Great job! Now let's put your knowledge to practice.</p>
                </div>
            `;
        }

        // Hide buttons
        if (elements.checkQuizBtn) elements.checkQuizBtn.style.display = 'none';
        if (elements.nextQuizBtn) elements.nextQuizBtn.style.display = 'none';
        if (elements.startChallengesBtn) elements.startChallengesBtn.style.display = 'none';

        // Mark quiz as completed
        ProgressModule.completeQuiz(currentLessonId);
        quizCompleted = true;

        // Transition to challenges after brief delay
        setTimeout(() => {
            showChallenges();
            loadChallenge('easy');
        }, 1500);
    }

    /**
     * Load a specific lesson
     */
    function loadLesson(lessonId) {
        currentLessonId = lessonId;
        currentDifficulty = 'easy';
        hintIndex = 0;
        currentQuizIndex = 0;
        quizScore = 0;
        quizCompleted = false;
        selectedOption = null;

        // Save current lesson to progress
        ProgressModule.setCurrentLesson(lessonId);

        // Render lesson content
        LessonsModule.renderContent(lessonId);

        // Check if quiz is completed for this lesson
        if (ProgressModule.isQuizCompleted(lessonId)) {
            showChallenges();
            loadChallenge('easy');
        } else {
            showQuiz();
            loadQuiz();
        }

        // Clear output and feedback
        clearOutput();
        hideFeedback();

        // Update navigation highlighting
        renderNavigationWithProgress();

        // Update reference panel content if open
        if (elements.referencePanel && elements.referencePanel.classList.contains('open')) {
            updateReferenceContent(lessonId);
        }

        // Focus editor
        EditorModule.focus();
    }

    /**
     * Load a specific challenge difficulty
     */
    function loadChallenge(difficulty) {
        currentDifficulty = difficulty;
        hintIndex = 0;

        // Update tab states
        updateChallengeTabs();

        // Get current challenge
        const challenge = getCurrentChallenge();

        if (challenge) {
            // Update instructions
            renderChallengeInstructions(challenge);

            // Update editor with starter code
            EditorModule.setCode(challenge.starterCode);
        }

        // Update progress display
        updateChallengeProgress();

        // Clear output and feedback
        clearOutput();
        hideFeedback();
    }

    /**
     * Get the current challenge based on lesson and difficulty
     */
    function getCurrentChallenge() {
        const lesson = LessonsModule.getCurrentLesson();
        if (!lesson || !lesson.challenges) return null;
        return lesson.challenges[currentDifficulty];
    }

    /**
     * Update challenge tab states
     */
    function updateChallengeTabs() {
        if (!elements.challengeTabs) return;

        const tabs = elements.challengeTabs.querySelectorAll('.challenge-tab');
        const lesson = LessonsModule.getCurrentLesson();

        tabs.forEach(tab => {
            const diff = tab.dataset.difficulty;

            // Remove all state classes
            tab.classList.remove('active', 'completed');

            // Add active class to current
            if (diff === currentDifficulty) {
                tab.classList.add('active');
            }

            // Add completed class if this challenge is done
            if (ProgressModule.isChallengeCompleted(currentLessonId, diff)) {
                tab.classList.add('completed');
            }
        });
    }

    /**
     * Render challenge instructions
     * NOTE: Uses innerHTML for challenge.instructions which contains trusted static
     * content from lessons-data.js (not user input), allowing HTML formatting.
     */
    function renderChallengeInstructions(challenge) {
        if (!elements.challengeInstructions) return;

        const difficultyLabels = {
            easy: 'Easy',
            medium: 'Medium',
            hard: 'Hard'
        };

        // Clear existing content
        while (elements.challengeInstructions.firstChild) {
            elements.challengeInstructions.removeChild(elements.challengeInstructions.firstChild);
        }

        // Create title with badge
        const title = document.createElement('h4');
        title.textContent = challenge.title + ' ';

        const badge = document.createElement('span');
        badge.className = `difficulty-badge ${currentDifficulty}`;
        badge.textContent = difficultyLabels[currentDifficulty];
        title.appendChild(badge);

        // Create description - innerHTML used for trusted static content only
        const desc = document.createElement('p');
        desc.innerHTML = challenge.instructions;

        elements.challengeInstructions.appendChild(title);
        elements.challengeInstructions.appendChild(desc);
    }

    /**
     * Update challenge progress display
     */
    function updateChallengeProgress() {
        if (!elements.challengeProgress) return;

        const completed = ['easy', 'medium', 'hard'].filter(
            diff => ProgressModule.isChallengeCompleted(currentLessonId, diff)
        ).length;

        // Clear and rebuild
        while (elements.challengeProgress.firstChild) {
            elements.challengeProgress.removeChild(elements.challengeProgress.firstChild);
        }

        const span = document.createElement('span');
        span.className = 'completed-count';
        span.textContent = completed;

        elements.challengeProgress.appendChild(span);
        elements.challengeProgress.appendChild(document.createTextNode('/3 completed'));
    }

    /**
     * Handle Run button click
     */
    async function handleRun() {
        if (isRunning || !PythonRunner.isReady()) {
            return;
        }

        isRunning = true;
        elements.runBtn.disabled = true;
        clearOutput();
        hideFeedback();

        const code = EditorModule.getCode();

        try {
            const result = await PythonRunner.run(code);

            if (result.error) {
                showOutput(result.error, true);
            } else {
                showOutput(result.output || '(No output)');
            }
        } catch (error) {
            showOutput('Error: ' + error.message, true);
        }

        isRunning = false;
        elements.runBtn.disabled = false;
    }

    /**
     * Handle Check Answer button click
     */
    async function handleCheck() {
        if (isRunning || !PythonRunner.isReady()) {
            return;
        }

        isRunning = true;
        elements.checkBtn.disabled = true;
        clearOutput();

        const code = EditorModule.getCode();
        const challenge = getCurrentChallenge();

        if (!challenge) {
            showFeedback('error', 'No challenge loaded.');
            isRunning = false;
            elements.checkBtn.disabled = false;
            return;
        }

        try {
            const result = await PythonRunner.run(code);

            if (result.error) {
                showOutput(result.error, true);
                showFeedback('error', 'Your code has an error. Fix it and try again.');
            } else {
                showOutput(result.output || '(No output)');

                // Validate the answer
                const isCorrect = validateChallenge(challenge, result.output);

                if (isCorrect) {
                    handleCorrectAnswer(challenge);
                } else {
                    handleIncorrectAnswer(challenge);
                }
            }
        } catch (error) {
            showOutput('Error: ' + error.message, true);
            showFeedback('error', 'Something went wrong. Please try again.');
        }

        isRunning = false;
        elements.checkBtn.disabled = false;
    }

    /**
     * Validate challenge answer
     */
    function validateChallenge(challenge, userOutput) {
        if (challenge.validation.type === 'output') {
            const expected = challenge.validation.expected.trim();
            const actual = userOutput.trim();
            return expected === actual;
        }

        if (challenge.validation.type === 'function' && typeof challenge.validation.check === 'function') {
            return challenge.validation.check(userOutput);
        }

        return false;
    }

    /**
     * Handle correct answer
     */
    function handleCorrectAnswer(challenge) {
        // Mark challenge as completed
        ProgressModule.completeChallenge(currentLessonId, currentDifficulty);

        // Update UI
        updateChallengeTabs();
        updateChallengeProgress();

        // Check if all challenges for this lesson are done
        const allDone = ['easy', 'medium', 'hard'].every(
            diff => ProgressModule.isChallengeCompleted(currentLessonId, diff)
        );

        if (allDone) {
            // Mark lesson as completed
            ProgressModule.completeLesson(currentLessonId);
            renderNavigationWithProgress();

            // Check if there's a next lesson
            const nextLessonId = LessonsModule.getNextLessonId(currentLessonId);

            if (nextLessonId) {
                showFeedback('success', 'All challenges complete! Moving to next lesson...');
                setTimeout(() => {
                    loadLesson(nextLessonId);
                }, 2000);
            } else {
                showFeedback('success', 'Congratulations! You\'ve completed all lessons!');
            }
        } else {
            // Move to next difficulty
            const difficulties = ['easy', 'medium', 'hard'];
            const currentIndex = difficulties.indexOf(currentDifficulty);
            const nextDifficulty = difficulties[currentIndex + 1];

            if (nextDifficulty) {
                showFeedback('success', `Correct! Try the ${nextDifficulty} challenge next.`);
                setTimeout(() => {
                    loadChallenge(nextDifficulty);
                }, 1500);
            } else {
                showFeedback('success', 'Correct! Complete the remaining challenges.');
            }
        }
    }

    /**
     * Handle incorrect answer
     */
    function handleIncorrectAnswer(challenge) {
        if (challenge.hints && challenge.hints[hintIndex]) {
            showFeedback('hint', `Not quite. Hint: ${challenge.hints[hintIndex]}`);
            hintIndex++;
        } else {
            showFeedback('error', 'Not quite right. Check your code and try again.');
            hintIndex = 0;
        }
    }

    /**
     * Handle Reset Progress button click
     */
    function handleReset() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            ProgressModule.reset();
            currentLessonId = 1;
            currentDifficulty = 'easy';
            hintIndex = 0;
            currentQuizIndex = 0;
            quizScore = 0;
            quizCompleted = false;
            loadLesson(1);
            showFeedback('success', 'Progress reset. Starting fresh!');
            setTimeout(hideFeedback, 2000);
        }
    }

    /**
     * Show output in console
     */
    function showOutput(text, isError = false) {
        if (!elements.outputConsole) return;

        elements.outputConsole.textContent = text;
        elements.outputConsole.className = 'output-console' + (isError ? ' error' : '');
    }

    /**
     * Clear output console
     */
    function clearOutput() {
        if (elements.outputConsole) {
            elements.outputConsole.textContent = '';
            elements.outputConsole.className = 'output-console';
        }
    }

    /**
     * Show feedback message
     */
    function showFeedback(type, message) {
        if (!elements.feedback) return;

        elements.feedback.textContent = message;
        elements.feedback.className = `feedback show ${type}`;
    }

    /**
     * Hide feedback message
     */
    function hideFeedback() {
        if (elements.feedback) {
            elements.feedback.className = 'feedback';
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Public API (for debugging)
    return {
        loadLesson,
        loadChallenge,
        getCurrentLessonId: () => currentLessonId,
        getCurrentDifficulty: () => currentDifficulty
    };
})();
