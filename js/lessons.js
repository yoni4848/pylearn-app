/**
 * Lessons Module
 * Handles lesson rendering and navigation UI
 */

const LessonsModule = (function() {
    let currentLesson = null;
    let onLessonChange = null;

    /**
     * Set callback for lesson changes
     */
    function setLessonChangeCallback(callback) {
        onLessonChange = callback;
    }

    /**
     * Get a lesson by ID
     */
    function getLessonById(id) {
        return LESSONS.find(lesson => lesson.id === id);
    }

    /**
     * Get total number of lessons
     */
    function getTotalLessons() {
        return LESSONS.length;
    }

    /**
     * Get all lessons
     */
    function getAllLessons() {
        return LESSONS;
    }

    /**
     * Render the lesson navigation sidebar
     */
    function renderNavigation(completedLessons, currentLessonId) {
        const nav = document.getElementById('lesson-nav');
        if (!nav) return;

        // Clear existing content safely
        while (nav.firstChild) {
            nav.removeChild(nav.firstChild);
        }

        LESSONS.forEach(lesson => {
            const item = document.createElement('div');
            item.className = 'lesson-nav-item';

            if (completedLessons.includes(lesson.id)) {
                item.classList.add('completed');
            }

            if (lesson.id === currentLessonId) {
                item.classList.add('active');
            }

            // Create text node for lesson title
            const titleText = document.createTextNode(`${lesson.id}. ${lesson.title}`);
            item.appendChild(titleText);

            item.addEventListener('click', () => {
                if (onLessonChange) {
                    onLessonChange(lesson.id);
                }
            });

            nav.appendChild(item);
        });
    }

    /**
     * Render lesson content
     * SECURITY NOTE: This uses innerHTML for lesson.content and lesson.instructions,
     * which come from our own lessons-data.js file (trusted static content we control),
     * NOT from user input. This is intentional to allow HTML formatting in lessons.
     */
    function renderContent(lessonId) {
        const lesson = getLessonById(lessonId);
        if (!lesson) {
            console.error('Lesson not found:', lessonId);
            return null;
        }

        currentLesson = lesson;

        const contentEl = document.getElementById('lesson-content');
        if (contentEl) {
            // Clear existing content
            while (contentEl.firstChild) {
                contentEl.removeChild(contentEl.firstChild);
            }

            // Create content container
            const contentWrapper = document.createElement('div');
            // Content is from trusted lessons-data.js, not user input
            contentWrapper.innerHTML = lesson.content;
            contentEl.appendChild(contentWrapper);

            // Create instructions box
            const instructionsDiv = document.createElement('div');
            instructionsDiv.className = 'instructions';

            const instructionsTitle = document.createElement('h3');
            instructionsTitle.textContent = 'Challenge';
            instructionsDiv.appendChild(instructionsTitle);

            const instructionsText = document.createElement('p');
            // Instructions may contain code tags, from trusted source
            instructionsText.innerHTML = lesson.instructions;
            instructionsDiv.appendChild(instructionsText);

            contentEl.appendChild(instructionsDiv);
        }

        // Update lesson counter
        const counter = document.getElementById('lesson-counter');
        if (counter) {
            counter.textContent = `Lesson ${lessonId}/${LESSONS.length}`;
        }

        return lesson;
    }

    /**
     * Get the current lesson
     */
    function getCurrentLesson() {
        return currentLesson;
    }

    /**
     * Get next lesson ID (or null if at end)
     */
    function getNextLessonId(currentId) {
        const index = LESSONS.findIndex(l => l.id === currentId);
        if (index < LESSONS.length - 1) {
            return LESSONS[index + 1].id;
        }
        return null;
    }

    /**
     * Get previous lesson ID (or null if at start)
     */
    function getPreviousLessonId(currentId) {
        const index = LESSONS.findIndex(l => l.id === currentId);
        if (index > 0) {
            return LESSONS[index - 1].id;
        }
        return null;
    }

    /**
     * Validate user output against expected output
     */
    function validateAnswer(lesson, userOutput) {
        const validation = lesson.validation;

        if (validation.type === 'output') {
            // Normalize both strings for comparison
            const expected = validation.expected.trim();
            const actual = userOutput.trim();
            return expected === actual;
        }

        if (validation.type === 'function' && typeof validation.check === 'function') {
            return validation.check(userOutput);
        }

        return false;
    }

    /**
     * Get hint for current lesson
     */
    function getHint(lesson, hintIndex) {
        if (lesson.hints && lesson.hints[hintIndex]) {
            return lesson.hints[hintIndex];
        }
        return null;
    }

    // Public API
    return {
        setLessonChangeCallback,
        getLessonById,
        getTotalLessons,
        getAllLessons,
        renderNavigation,
        renderContent,
        getCurrentLesson,
        getNextLessonId,
        getPreviousLessonId,
        validateAnswer,
        getHint
    };
})();
