// Game state
let gameState = {
    totalCoins: 0,
    totalStars: 0,
    categories: []
};

let currentCategory = null;
let currentProblemIndex = null;
let currentProblem = null;
let startTime = null;
let timerInterval = null;

// Audio context for sound effects
let audioContext = null;

// Initialize audio context
function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Play success chime sound
function playSuccessChime() {
    initAudio();
    
    const now = audioContext.currentTime;
    
    // Create oscillator for melody notes
    const notes = [
        { freq: 523.25, time: 0, duration: 0.15 },      // C5
        { freq: 659.25, time: 0.15, duration: 0.15 },   // E5
        { freq: 783.99, time: 0.3, duration: 0.25 }     // G5
    ];
    
    notes.forEach(note => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.type = 'sine';
        oscillator.frequency.value = note.freq;
        
        // Envelope
        gainNode.gain.setValueAtTime(0, now + note.time);
        gainNode.gain.linearRampToValueAtTime(0.3, now + note.time + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + note.time + note.duration);
        
        oscillator.start(now + note.time);
        oscillator.stop(now + note.time + note.duration);
    });
}

// Initialize game
function initGame() {
    loadGameState();
    updateTotalStats();
    updateCategoryCards();
    setupEventListeners();
    
    // Load saved language
    const savedLang = localStorage.getItem('lang') || 'he';
    updateLanguage(savedLang);
}

// Load game state from localStorage
function loadGameState() {
    const saved = localStorage.getItem('mathGameState');
    if (saved) {
        gameState = JSON.parse(saved);
    } else {
        // Initialize new game state
        gameState = {
            totalCoins: 0,
            totalStars: 0,
            categories: Array.from({ length: 7 }, (_, i) => ({
                id: i,
                unlocked: i === 0, // Only first category unlocked
                problems: Array.from({ length: 10 }, (_, j) => ({
                    id: j,
                    solved: false,
                    stars: 0,
                    coins: 0,
                    bestTime: null
                }))
            }))
        };
        saveGameState();
    }
}

// Save game state to localStorage
function saveGameState() {
    localStorage.setItem('mathGameState', JSON.stringify(gameState));
}

// Update total stats display
function updateTotalStats() {
    document.getElementById('total-coins').textContent = gameState.totalCoins;
    document.getElementById('total-stars').textContent = gameState.totalStars;
}

// Update category cards
function updateCategoryCards() {
    document.querySelectorAll('.category-card').forEach(card => {
        const categoryId = parseInt(card.dataset.category);
        const category = gameState.categories[categoryId];
        
        // Update lock state
        if (category.unlocked) {
            card.classList.remove('locked');
        } else {
            card.classList.add('locked');
        }
        
        // Calculate stats
        const solvedCount = category.problems.filter(p => p.solved).length;
        const totalStars = category.problems.reduce((sum, p) => sum + p.stars, 0);
        const totalCoins = category.problems.reduce((sum, p) => sum + p.coins, 0);
        
        // Update display
        card.querySelector('.solved').textContent = solvedCount;
        card.querySelector('.stars-earned span').textContent = totalStars;
        card.querySelector('.coins-earned span').textContent = totalCoins;
        
        // Check if solved to mark complete
        if (solvedCount === 10) {
            card.querySelector('.start-btn').textContent = t('start') + ' ✓';
        }
    });
}

// Setup event listeners
function setupEventListeners() {
    // Language toggle
    document.getElementById('lang-toggle').addEventListener('click', () => {
        const newLang = currentLang === 'he' ? 'en' : 'he';
        updateLanguage(newLang);
    });
    
    // Category start buttons
    document.querySelectorAll('.category-card .start-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.category-card');
            const categoryId = parseInt(card.dataset.category);
            if (gameState.categories[categoryId].unlocked) {
                openCategory(categoryId);
            }
        });
    });
    
    // Back buttons
    document.getElementById('back-to-home').addEventListener('click', () => {
        showScreen('home-screen');
        updateTotalStats();  // Update the header stats
        updateCategoryCards();  // Update all category cards with latest results
    });
    
    document.getElementById('back-to-category').addEventListener('click', () => {
        stopTimer();
        showScreen('category-screen');
    });
    
    document.getElementById('back-to-category-result').addEventListener('click', () => {
        // Refresh the category view to show updated stars/coins
        openCategory(currentCategory);
    });
    
    // Answer submission
    document.getElementById('submit-answer').addEventListener('click', checkAnswer);
    document.getElementById('answer-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    });
    
    // Next problem button
    document.getElementById('next-problem').addEventListener('click', () => {
        const category = gameState.categories[currentCategory];
        const nextProblemIndex = currentProblemIndex + 1;
        
        if (nextProblemIndex < 10) {
            openProblem(currentCategory, nextProblemIndex);
        } else {
            // Category complete, check if we should unlock next
            const allSolved = category.problems.every(p => p.solved);
            if (allSolved && currentCategory < 6) {
                gameState.categories[currentCategory + 1].unlocked = true;
                saveGameState();
            }
            // Refresh the category view to show all updated results
            openCategory(currentCategory);
        }
    });
}

// Show screen
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Open category
function openCategory(categoryId) {
    currentCategory = categoryId;
    const category = gameState.categories[categoryId];
    
    // Update title
    document.getElementById('category-title').textContent = t(`cat${categoryId}`);
    
    // Generate problem cards
    const grid = document.querySelector('.problems-grid');
    grid.innerHTML = '';
    
    category.problems.forEach((problem, index) => {
        const card = document.createElement('div');
        card.className = 'problem-card';
        card.dataset.problem = index;
        
        // Check if locked (previous problem must be solved)
        const isLocked = index > 0 && !category.problems[index - 1].solved;
        
        if (isLocked) {
            card.classList.add('locked');
        }
        
        if (problem.solved) {
            card.classList.add('solved');
        }
        
        const stars = '⭐'.repeat(problem.stars);
        const statusText = problem.solved ? t('solved') : (isLocked ? t('locked') : '');
        
        card.innerHTML = `
            <div class="problem-number">${index + 1}</div>
            <div class="problem-stars">${stars}</div>
            <div class="problem-status">${statusText}</div>
        `;
        
        if (!isLocked) {
            card.addEventListener('click', () => openProblem(categoryId, index));
        }
        
        grid.appendChild(card);
    });
    
    showScreen('category-screen');
}

// Open problem
function openProblem(categoryId, problemIndex) {
    currentCategory = categoryId;
    currentProblemIndex = problemIndex;
    
    // Generate problem
    currentProblem = problemGenerators[categoryId][problemIndex]();
    
    // Update display
    document.getElementById('problem-number').textContent = `${t('problem')} ${problemIndex + 1}/10`;
    
    // Use displayQuestion if available (for fractions), otherwise use question
    const questionText = currentProblem.displayQuestion || currentProblem.question;
    document.getElementById('question').textContent = questionText;
    document.getElementById('answer-input').value = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('feedback').className = 'feedback';
    
    // Start timer
    startTimer();
    
    showScreen('problem-screen');
    document.getElementById('answer-input').focus();
}

// Timer functions
function startTimer() {
    startTime = Date.now();
    updateTimer();
    timerInterval = setInterval(updateTimer, 100);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimer() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('timer').textContent = elapsed + 's';
}

function getElapsedTime() {
    return (Date.now() - startTime) / 1000;
}

// Check answer
function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer-input').value);
    
    if (isNaN(userAnswer)) {
        return;
    }
    
    const feedback = document.getElementById('feedback');
    
    if (userAnswer === currentProblem.answer) {
        // Play success sound
        playSuccessChime();
        
        stopTimer();
        const timeSpent = getElapsedTime();
        
        // Calculate stars based on time
        const thresholds = getTimeThresholds(currentProblem.difficulty);
        let stars = 1;
        if (timeSpent <= thresholds.excellent) {
            stars = 3;
        } else if (timeSpent <= thresholds.good) {
            stars = 2;
        }
        
        // Calculate coins
        const coins = getCoinReward(currentProblem.difficulty, stars);
        
        // Update game state
        const problem = gameState.categories[currentCategory].problems[currentProblemIndex];
        
        // Only update if better than before or first solve
        if (!problem.solved || stars > problem.stars) {
            // Remove old coins and stars if updating
            if (problem.solved) {
                gameState.totalCoins -= problem.coins;
                gameState.totalStars -= problem.stars;
            }
            
            problem.solved = true;
            problem.stars = stars;
            problem.coins = coins;
            problem.bestTime = timeSpent;
            
            gameState.totalCoins += coins;
            gameState.totalStars += stars;
            
            saveGameState();
        }
        
        // Show result screen
        showResultScreen(stars, coins);
        
    } else {
        feedback.textContent = t('incorrect');
        feedback.className = 'feedback incorrect';
        
        // Clear after a moment
        setTimeout(() => {
            feedback.textContent = '';
            feedback.className = 'feedback';
            document.getElementById('answer-input').value = '';
            document.getElementById('answer-input').focus();
        }, 1500);
    }
}

// Show result screen
function showResultScreen(stars, coins) {
    let message = '';
    if (stars === 3) {
        message = t('excellent');
    } else if (stars === 2) {
        message = t('good');
    } else {
        message = t('ok');
    }
    
    document.getElementById('result-message').textContent = message;
    document.getElementById('stars-display').textContent = '⭐'.repeat(stars);
    document.getElementById('coins-earned').textContent = coins;
    
    updateTotalStats();
    showScreen('result-screen');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initGame);
