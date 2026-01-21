/**
 * Progress Module
 * Handles saving and loading lesson and challenge progress using LocalStorage
 */

const ProgressModule = (function() {
    const STORAGE_KEY = 'pylearn_progress';

    /**
     * Get default progress state
     */
    function getDefaultProgress() {
        return {
            currentLessonId: 1,
            completedLessons: [],
            completedChallenges: {}, // { lessonId: ['easy', 'medium', 'hard'] }
            completedQuizzes: [], // [lessonId, lessonId, ...]
            lastAccessed: null
        };
    }

    /**
     * Load progress from LocalStorage
     */
    function load() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const progress = JSON.parse(stored);
                // Validate the structure
                if (typeof progress.currentLessonId === 'number' &&
                    Array.isArray(progress.completedLessons)) {
                    // Ensure completedChallenges exists
                    if (!progress.completedChallenges) {
                        progress.completedChallenges = {};
                    }
                    // Ensure completedQuizzes exists
                    if (!progress.completedQuizzes) {
                        progress.completedQuizzes = [];
                    }
                    return progress;
                }
            }
        } catch (error) {
            console.error('Error loading progress:', error);
        }
        return getDefaultProgress();
    }

    /**
     * Save progress to LocalStorage
     */
    function save(progress) {
        try {
            progress.lastAccessed = new Date().toISOString();
            localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
            return true;
        } catch (error) {
            console.error('Error saving progress:', error);
            return false;
        }
    }

    /**
     * Mark a lesson as completed
     */
    function completeLesson(lessonId) {
        const progress = load();
        if (!progress.completedLessons.includes(lessonId)) {
            progress.completedLessons.push(lessonId);
            save(progress);
        }
        return progress;
    }

    /**
     * Mark a specific challenge as completed
     */
    function completeChallenge(lessonId, difficulty) {
        const progress = load();
        const key = String(lessonId);

        if (!progress.completedChallenges[key]) {
            progress.completedChallenges[key] = [];
        }

        if (!progress.completedChallenges[key].includes(difficulty)) {
            progress.completedChallenges[key].push(difficulty);
            save(progress);
        }

        return progress;
    }

    /**
     * Check if a specific challenge is completed
     */
    function isChallengeCompleted(lessonId, difficulty) {
        const progress = load();
        const key = String(lessonId);

        if (!progress.completedChallenges[key]) {
            return false;
        }

        return progress.completedChallenges[key].includes(difficulty);
    }

    /**
     * Get completed challenges for a lesson
     */
    function getCompletedChallenges(lessonId) {
        const progress = load();
        const key = String(lessonId);
        return progress.completedChallenges[key] || [];
    }

    /**
     * Mark a quiz as completed for a lesson
     */
    function completeQuiz(lessonId) {
        const progress = load();
        if (!progress.completedQuizzes.includes(lessonId)) {
            progress.completedQuizzes.push(lessonId);
            save(progress);
        }
        return progress;
    }

    /**
     * Check if quiz is completed for a lesson
     */
    function isQuizCompleted(lessonId) {
        const progress = load();
        return progress.completedQuizzes.includes(lessonId);
    }

    /**
     * Set the current lesson
     */
    function setCurrentLesson(lessonId) {
        const progress = load();
        progress.currentLessonId = lessonId;
        save(progress);
        return progress;
    }

    /**
     * Check if a lesson is completed
     */
    function isLessonCompleted(lessonId) {
        const progress = load();
        return progress.completedLessons.includes(lessonId);
    }

    /**
     * Get current lesson ID
     */
    function getCurrentLessonId() {
        const progress = load();
        return progress.currentLessonId;
    }

    /**
     * Get all completed lesson IDs
     */
    function getCompletedLessons() {
        const progress = load();
        return progress.completedLessons;
    }

    /**
     * Reset all progress
     */
    function reset() {
        try {
            localStorage.removeItem(STORAGE_KEY);
            return true;
        } catch (error) {
            console.error('Error resetting progress:', error);
            return false;
        }
    }

    /**
     * Get progress summary
     */
    function getSummary(totalLessons) {
        const progress = load();
        return {
            current: progress.currentLessonId,
            completed: progress.completedLessons.length,
            total: totalLessons,
            percentage: Math.round((progress.completedLessons.length / totalLessons) * 100)
        };
    }

    // Public API
    return {
        load,
        save,
        completeLesson,
        completeChallenge,
        isChallengeCompleted,
        getCompletedChallenges,
        completeQuiz,
        isQuizCompleted,
        setCurrentLesson,
        isLessonCompleted,
        getCurrentLessonId,
        getCompletedLessons,
        reset,
        getSummary
    };
})();
