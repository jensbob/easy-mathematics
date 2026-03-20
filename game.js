// Game state
let gameState = {
    totalCoins: 0,
    totalStars: 0,
    categories: []
};

let currentGrade = null;
let currentCategory = null;
let currentProblemIndex = null;
let currentProblem = null;
let startTime = null;
let timerInterval = null;

function gameStateKey() { return `mathGameState_g${currentGrade}`; }

function getGenerators() {
    if (currentGrade === 1) return problemGenerators_g1;
    if (currentGrade === 2) return problemGenerators_g2;
    return problemGenerators;
}

function getThresholds(difficulty, categoryId) {
    if (currentGrade === 1) return getTimeThresholds_g1(difficulty);
    if (currentGrade === 2) return getTimeThresholds_g2(difficulty, categoryId);
    return getTimeThresholds(difficulty, categoryId);
}

function updateGradeIndicator() {
    if (!currentGrade) return;
    const titleEl = document.querySelector('#home-screen .title');
    if (titleEl) titleEl.textContent = `${t('title')} — ${t(`gradeTitle${currentGrade}`)}`;
}

function selectGrade(grade) {
    currentGrade = grade;
    loadHouseState();
    loadGameState();
    updateTotalStats();
    updateCategoryCards();
    updateGradeIndicator();
    showScreen('home-screen');
}

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
    setupEventListeners();
    // Load saved language (grade-screen is already active in HTML)
    const savedLang = localStorage.getItem('lang') || 'he';
    updateLanguage(savedLang);
    // Load shared state from URL if present
    if (checkImportState()) {
        const banner = document.getElementById('import-banner');
        if (banner) {
            banner.style.display = 'block';
            setTimeout(() => { banner.style.display = 'none'; }, 4000);
        }
    }
}

// Unicode-safe base64 encode/decode
function b64encode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p) => String.fromCharCode(parseInt(p, 16))));
}
function b64decode(b64) {
    return decodeURIComponent(atob(b64).split('').map(c => '%' + c.charCodeAt(0).toString(16).padStart(2, '0')).join(''));
}

// Encode ALL grades' state into a shareable URL
function exportAllStatesToURL() {
    const data = { v: 2 };
    for (let g = 1; g <= 3; g++) {
        const gs = localStorage.getItem(`mathGameState_g${g}`);
        const hs = localStorage.getItem(`mathHouseState_g${g}`);
        if (gs) data[`gs${g}`] = JSON.parse(gs);
        if (hs) data[`hs${g}`] = JSON.parse(hs);
    }
    const encoded = b64encode(JSON.stringify(data));
    return location.href.split('?')[0] + '?s=' + encoded;
}

// On page load, check if URL contains shared state and restore it
function checkImportState() {
    const params = new URLSearchParams(location.search);
    const encoded = params.get('s');
    if (!encoded) return false;
    try {
        const data = JSON.parse(b64decode(encoded));
        for (let g = 1; g <= 3; g++) {
            if (data[`gs${g}`]) localStorage.setItem(`mathGameState_g${g}`, JSON.stringify(data[`gs${g}`]));
            if (data[`hs${g}`]) localStorage.setItem(`mathHouseState_g${g}`, JSON.stringify(data[`hs${g}`]));
        }
        history.replaceState(null, '', location.pathname);
        return true;
    } catch(e) {
        history.replaceState(null, '', location.pathname);
        return false;
    }
}

// Open share modal with QR code and copyable link
function openShareModal() {
    const url = exportAllStatesToURL();
    document.getElementById('share-url-input').value = url;
    const qrDiv = document.getElementById('share-qr');
    qrDiv.innerHTML = '';
    if (typeof QRCode !== 'undefined') {
        try {
            new QRCode(qrDiv, { text: url, width: 180, height: 180, colorDark: '#1e293b', colorLight: '#ffffff' });
        } catch(e) {
            qrDiv.textContent = '';
        }
    }
    document.getElementById('share-modal').classList.add('active');
}

// Load game state from localStorage
function loadGameState() {
    const saved = localStorage.getItem(gameStateKey());
    if (saved) {
        gameState = JSON.parse(saved);
        gameState.totalCoins = computeTotalCoins();
    } else {
        // Initialize new game state
        gameState = {
            totalCoins: 0,
            totalStars: 0,
            categories: Array.from({ length: 9 }, (_, i) => ({
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

// Derive total coins from stars minus house purchases
function computeTotalCoins() {
    const earned = gameState.categories.reduce((total, cat) => {
        return total + cat.problems.reduce((sum, problem, index) => {
            if (!problem.solved) return sum;
            return sum + getCoinReward(getDifficulty(index), problem.stars);
        }, 0);
    }, 0);

    const spent = houseState.ownedItems.reduce((sum, itemId) => {
        const item = SHOP_ITEMS.find(it => it.id === itemId);
        return sum + (item ? item.cost : 0);
    }, 0) + HOUSE_TIERS
        .filter(tier => tier.level > 0 && tier.level <= houseState.houseLevel)
        .reduce((sum, tier) => sum + tier.cost, 0);

    return earned - spent;
}

// Save game state to localStorage
function saveGameState() {
    localStorage.setItem(gameStateKey(), JSON.stringify(gameState));
}

// Update total stats display
function updateTotalStats() {
    document.getElementById('total-coins').textContent = gameState.totalCoins;
    document.getElementById('total-stars').textContent = gameState.totalStars;
}

// Update category cards
function updateCategoryCards() {
    if (!currentGrade) return;
    document.querySelectorAll('.category-card').forEach(card => {
        const categoryId = parseInt(card.dataset.category);
        const category = gameState.categories[categoryId];

        // Set category name based on current grade and language
        const h2 = card.querySelector('h2');
        if (h2) h2.textContent = t(`g${currentGrade}cat${categoryId}`);
        
        // Update lock state
        if (category.unlocked) {
            card.classList.remove('locked');
        } else {
            card.classList.add('locked');
        }
        
        // Calculate stats
        const solvedCount = category.problems.filter(p => p.solved).length;
        const totalStars = category.problems.reduce((sum, p) => sum + p.stars, 0);
        const totalCoins = category.problems.reduce((sum, p, i) => {
            return sum + (p.solved ? getCoinReward(getDifficulty(i), p.stars) : 0);
        }, 0);
        
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
    // House button
    document.getElementById('house-btn').addEventListener('click', () => {
        openHouseScreen('room');
    });

    // Back from house
    document.getElementById('back-from-house').addEventListener('click', () => {
        showScreen('home-screen');
        updateTotalStats();
        updateCategoryCards();
    });

    // Language toggle
    document.getElementById('lang-toggle').addEventListener('click', () => {
        const newLang = currentLang === 'he' ? 'en' : 'he';
        updateLanguage(newLang);
    });

    // Helper: start a countdown modal
    function startCountdownModal(modalId, confirmBtnId, cancelBtnId, waitKey, confirmKey, seconds, onConfirm) {
        const modal = document.getElementById(modalId);
        const confirmBtn = document.getElementById(confirmBtnId);
        const cancelBtn = document.getElementById(cancelBtnId);

        modal.classList.add('active');
        confirmBtn.disabled = true;
        confirmBtn.textContent = t(waitKey).replace('{n}', seconds);

        let remaining = seconds;
        const countdown = setInterval(() => {
            remaining--;
            if (remaining > 0) {
                confirmBtn.textContent = t(waitKey).replace('{n}', remaining);
            } else {
                clearInterval(countdown);
                confirmBtn.disabled = false;
                confirmBtn.textContent = t(confirmKey);
            }
        }, 1000);

        const cancel = () => {
            clearInterval(countdown);
            modal.classList.remove('active');
            confirmBtn.removeEventListener('click', confirm);
            cancelBtn.removeEventListener('click', cancel);
        };

        const confirm = () => {
            clearInterval(countdown);
            modal.classList.remove('active');
            confirmBtn.removeEventListener('click', confirm);
            cancelBtn.removeEventListener('click', cancel);
            onConfirm();
        };

        confirmBtn.addEventListener('click', confirm);
        cancelBtn.addEventListener('click', cancel);
    }

    // Share button
    document.getElementById('share-btn').addEventListener('click', openShareModal);
    document.getElementById('share-close').addEventListener('click', () => {
        document.getElementById('share-modal').classList.remove('active');
    });
    document.getElementById('share-copy-btn').addEventListener('click', () => {
        const input = document.getElementById('share-url-input');
        const btn = document.getElementById('share-copy-btn');
        const flash = () => {
            const orig = btn.textContent;
            btn.textContent = t('shareCopied');
            setTimeout(() => { btn.textContent = orig; }, 2000);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(input.value).then(flash).catch(() => {
                input.select();
                document.execCommand('copy');
                flash();
            });
        } else {
            input.select();
            document.execCommand('copy');
            flash();
        }
    });

    // Grade picker cards
    document.querySelectorAll('.grade-card').forEach(card => {
        card.addEventListener('click', () => {
            selectGrade(parseInt(card.dataset.grade));
        });
    });

    // Change grade button
    document.getElementById('change-grade-btn').addEventListener('click', () => {
        showScreen('grade-screen');
    });

    // Reset button — two-step confirmation (current grade only)
    document.getElementById('reset-btn').addEventListener('click', () => {
        startCountdownModal(
            'reset-modal', 'reset-confirm', 'reset-cancel',
            'resetWait', 'resetNext', 5,
            () => {
                startCountdownModal(
                    'reset-modal-2', 'reset-confirm-2', 'reset-cancel-2',
                    'resetWait2', 'resetNow', 10,
                    () => {
                        localStorage.removeItem(gameStateKey());
                        localStorage.removeItem(`mathHouseState_g${currentGrade}`);
                        houseState = { houseLevel: 0, ownedItems: [] };
                        loadGameState();
                        updateTotalStats();
                        updateCategoryCards();
                    }
                );
            }
        );
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
        openCategory(currentCategory);
    });
    
    document.getElementById('back-to-category-result').addEventListener('click', () => {
        // Refresh the category view to show updated stars/coins
        openCategory(currentCategory);
    });
    
    // Answer submission
    document.getElementById('submit-answer').addEventListener('click', checkAnswer);
    document.getElementById('answer-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.stopPropagation();
            checkAnswer();
        }
    });
    
    // Enter key on result screen advances to next problem
    document.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && document.getElementById('result-screen').classList.contains('active')) {
            document.getElementById('next-problem').click();
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
            if (allSolved && currentCategory < 8) {
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
    document.getElementById('category-title').textContent = t(`g${currentGrade}cat${categoryId}`);
    
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
    currentProblem = getGenerators()[categoryId][problemIndex]();
    
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
        const thresholds = getThresholds(currentProblem.difficulty, currentCategory);
        let stars = 1;
        if (timeSpent <= thresholds.excellent) {
            stars = 3;
        } else if (timeSpent <= thresholds.good) {
            stars = 2;
        }
        
        // Update game state
        const problem = gameState.categories[currentCategory].problems[currentProblemIndex];

        // Only update if better than before or first solve
        if (!problem.solved || stars > problem.stars) {
            if (problem.solved) {
                gameState.totalStars -= problem.stars;
            }

            problem.solved = true;
            problem.stars = stars;
            problem.bestTime = timeSpent;

            gameState.totalStars += stars;
            gameState.totalCoins = computeTotalCoins();

            saveGameState();
        }

        // Show result screen
        const coins = getCoinReward(getDifficulty(currentProblemIndex), stars);
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
