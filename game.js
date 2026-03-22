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
    if (currentGrade === 1) return getTimeThresholds_g1(difficulty, categoryId);
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
    pushNav({ g: grade });
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

// Play victory fanfare
function playFanfare() {
    initAudio();
    const ac = audioContext;
    const notes = [261.6, 392, 523.3, 659.3, 784];
    const times = [0, 0.14, 0.28, 0.38, 0.5];
    notes.forEach((freq, i) => {
        const o = ac.createOscillator();
        const g = ac.createGain();
        const f = ac.createBiquadFilter();
        f.type = 'lowpass'; f.frequency.value = 1400;
        o.type = 'sawtooth';
        o.frequency.value = freq;
        const t = ac.currentTime + times[i];
        g.gain.setValueAtTime(0.22, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + (i === 4 ? 0.9 : 0.22));
        o.connect(f); f.connect(g); g.connect(ac.destination);
        o.start(t); o.stop(t + 1);
    });
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

function restoreFromURL() {
    const params = new URLSearchParams(location.search);
    const g = parseInt(params.get('g'));
    const c = params.get('c');
    const p = params.get('p');
    const house = params.get('house');
    if (!g || g < 1 || g > 3) return false;
    currentGrade = g;
    loadHouseState();
    loadGameState();
    updateTotalStats();
    updateCategoryCards();
    updateGradeIndicator();
    if (house) {
        showScreen('house-screen');
        updateHouseCoins();
        switchHouseTab('room');
    } else if (c !== null && p !== null) {
        const catId = parseInt(c);
        const probIdx = parseInt(p);
        openCategory(catId);
        openProblem(catId, probIdx);
    } else if (c !== null) {
        openCategory(parseInt(c));
    } else {
        showScreen('home-screen');
    }
    return true;
}

// Initialize game
function initGame() {
    injectUIIcons();
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
    } else {
        restoreFromURL();
    }

    // Handle browser back/forward
    window.addEventListener('popstate', () => {
        if (!restoreFromURL()) {
            showScreen('grade-screen');
        }
    });
}

// Unicode-safe base64 encode/decode (legacy, kept for v2 import fallback)
function b64encode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p) => String.fromCharCode(parseInt(p, 16))));
}
function b64decode(b64) {
    return decodeURIComponent(atob(b64).split('').map(c => '%' + c.charCodeAt(0).toString(16).padStart(2, '0')).join(''));
}

// Compact binary state encoding (version 4)
// Layout: [version:8] [300 problem values × 2 bits] [3 grades × house bits]
// Problem value: 0=unsolved, 1–3=stars earned
// House per grade: 3 upgrade bits (one per tier, 0/1) + N item ownership bits (0/1)
// v3→v4: expanded from 9 to 10 categories per grade

function getGradeItems(grade) {
    return SHOP_ITEMS.filter(it => !it.grades || it.grades.includes(grade));
}

function encodeStateCompact() {
    const bits = [];
    function pushBits(value, n) {
        for (let i = n - 1; i >= 0; i--) bits.push((value >> i) & 1);
    }

    pushBits(4, 8); // version

    // 300 problem values × 2 bits each (3 grades × 10 cats × 10 problems)
    for (let g = 1; g <= 3; g++) {
        const gs = localStorage.getItem(`mathGameState_g${g}`);
        const state = gs ? JSON.parse(gs) : null;
        for (let c = 0; c < 10; c++) {
            for (let p = 0; p < 10; p++) {
                let val = 0;
                if (state) {
                    const prob = state.categories[c]?.problems[p];
                    if (prob?.solved) val = prob.stars || 1;
                }
                pushBits(val, 2);
            }
        }
    }

    // 3 grades × 22 house bits: 3 upgrade bits + N item bits
    for (let g = 1; g <= 3; g++) {
        const hs = localStorage.getItem(`mathHouseState_g${g}`);
        const state = hs ? JSON.parse(hs) : { houseLevel: 0, ownedItems: [] };
        // Encode house level as 3 separate upgrade bits (unary)
        for (let tier = 1; tier <= 3; tier++) {
            pushBits(state.houseLevel >= tier ? 1 : 0, 1);
        }
        for (const item of getGradeItems(g)) {
            pushBits(state.ownedItems.includes(item.id) ? 1 : 0, 1);
        }
    }

    // Pad to byte boundary
    while (bits.length % 8 !== 0) bits.push(0);

    const bytes = [];
    for (let i = 0; i < bits.length; i += 8) {
        let byte = 0;
        for (let j = 0; j < 8; j++) byte = (byte << 1) | (bits[i + j] || 0);
        bytes.push(byte);
    }

    // URL-safe base64 (no padding needed for QR)
    return btoa(String.fromCharCode(...bytes))
        .replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

function decodeStateCompact(encoded) {
    const b64 = encoded.replace(/-/g, '+').replace(/_/g, '/');
    const binary = atob(b64);
    const bits = [];
    for (let i = 0; i < binary.length; i++) {
        const byte = binary.charCodeAt(i);
        for (let j = 7; j >= 0; j--) bits.push((byte >> j) & 1);
    }

    let pos = 0;
    function readBits(n) {
        let val = 0;
        for (let i = 0; i < n; i++) val = (val << 1) | (bits[pos++] || 0);
        return val;
    }

    if (readBits(8) !== 4) return false; // wrong version

    // Decode problems
    for (let g = 1; g <= 3; g++) {
        const state = {
            totalCoins: 0,
            totalStars: 0,
            categories: Array.from({ length: 10 }, (_, i) => ({
                id: i,
                unlocked: i === 0,
                problems: Array.from({ length: 10 }, (_, j) => ({
                    id: j, solved: false, stars: 0, coins: 0,
                }))
            }))
        };
        for (let c = 0; c < 10; c++) {
            for (let p = 0; p < 10; p++) {
                const val = readBits(2);
                if (val > 0) {
                    state.categories[c].problems[p].solved = true;
                    state.categories[c].problems[p].stars = val;
                }
            }
            if (c < 9 && state.categories[c].problems.every(p => p.solved)) {
                state.categories[c + 1].unlocked = true;
            }
        }
        state.totalStars = state.categories.reduce(
            (t, cat) => t + cat.problems.reduce((s, p) => s + p.stars, 0), 0);
        localStorage.setItem(`mathGameState_g${g}`, JSON.stringify(state));
    }

    // Decode house state
    for (let g = 1; g <= 3; g++) {
        let houseLevel = 0;
        for (let tier = 1; tier <= 3; tier++) {
            if (readBits(1)) houseLevel = tier;
        }
        const ownedItems = [];
        for (const item of getGradeItems(g)) {
            if (readBits(1)) ownedItems.push(item.id);
        }
        localStorage.setItem(`mathHouseState_g${g}`, JSON.stringify({ houseLevel, ownedItems }));
    }

    return true;
}

// Encode ALL grades' state into a shareable URL (compact binary v3)
function exportAllStatesToURL() {
    const encoded = encodeStateCompact();
    return location.href.split('?')[0] + '?s=' + encoded;
}

// On page load, check if URL contains shared state and restore it
function checkImportState() {
    const params = new URLSearchParams(location.search);
    const encoded = params.get('s');
    if (!encoded) return false;
    try {
        // Try compact binary v3 first
        if (decodeStateCompact(encoded)) {
            history.replaceState(null, '', location.pathname);
            return true;
        }
    } catch(e) {}
    try {
        // Fall back to legacy JSON v2
        const data = JSON.parse(b64decode(encoded));
        if (data.v === 2) {
            for (let g = 1; g <= 3; g++) {
                if (data[`gs${g}`]) localStorage.setItem(`mathGameState_g${g}`, JSON.stringify(data[`gs${g}`]));
                if (data[`hs${g}`]) localStorage.setItem(`mathHouseState_g${g}`, JSON.stringify(data[`hs${g}`]));
            }
            history.replaceState(null, '', location.pathname);
            return true;
        }
    } catch(e) {}
    history.replaceState(null, '', location.pathname);
    return false;
}

// Open share modal with QR code and copyable link
function openShareModal() {
    const url = exportAllStatesToURL();
    document.getElementById('share-url-input').value = url;
    const qrDiv = document.getElementById('share-qr');
    qrDiv.innerHTML = '';
    let qrOk = false;
    if (typeof QRCode !== 'undefined') {
        try {
            new QRCode(qrDiv, { text: url, width: 180, height: 180, colorDark: '#1e293b', colorLight: '#ffffff' });
            qrOk = true;
        } catch(e) {}
    }
    if (!qrOk) {
        qrDiv.innerHTML = `<p class="qr-fallback">${currentLang === 'he' ? 'הקישור ארוך מדי לקוד QR — השתמש בכפתור ההעתקה' : 'Link too long for QR — use the copy button below'}</p>`;
    }
    document.getElementById('share-modal').classList.add('active');
}

// Load game state from localStorage
function loadGameState() {
    const saved = localStorage.getItem(gameStateKey());
    if (saved) {
        gameState = JSON.parse(saved);
        // Migration: Ensure 10 categories exist
        if (gameState.categories.length < 10) {
            for (let i = gameState.categories.length; i < 10; i++) {
                gameState.categories.push({
                    id: i,
                    unlocked: false,
                    problems: Array.from({ length: 10 }, (_, j) => ({
                        id: j,
                        solved: false,
                        stars: 0,
                        coins: 0,
                        bestTime: null
                    }))
                });
            }
        }
        gameState.totalCoins = computeTotalCoins();
    } else {
        // Initialize new game state
        gameState = {
            totalCoins: 0,
            totalStars: 0,
            categories: Array.from({ length: 10 }, (_, i) => ({
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
        card.querySelector('.stars-earned').innerHTML = `${UI_SVGS.star} <span>${totalStars}</span>`;
        card.querySelector('.coins-earned').innerHTML = `${UI_SVGS.coin} <span>${totalCoins}</span>`;
        
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
        replaceNav({ g: currentGrade });
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
        replaceNav(null);
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
        replaceNav({ g: currentGrade });
        showScreen('home-screen');
        updateTotalStats();
        updateCategoryCards();
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
    // Select all on click so kids can just retype to correct a typo
    document.getElementById('answer-input').addEventListener('click', (e) => e.target.select());
    document.getElementById('answer-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.stopPropagation();
            checkAnswer();
        }
    });
    
    // Numpad: sync button presses to hidden #answer-input
    document.querySelectorAll('.numpad-btn[data-val]').forEach(btn => {
        btn.addEventListener('click', () => {
            const inp = document.getElementById('answer-input');
            if (inp.value.length < 5) inp.value += btn.dataset.val;
            document.getElementById('numpad-display').textContent = inp.value || '?';
        });
    });
    document.querySelector('.numpad-back')?.addEventListener('click', () => {
        const inp = document.getElementById('answer-input');
        inp.value = inp.value.slice(0, -1);
        document.getElementById('numpad-display').textContent = inp.value || '?';
    });
    document.querySelector('.numpad-submit')?.addEventListener('click', checkAnswer);

    // Enter key on result screen advances to next problem; on unlock modal continues;
    // on category screen opens next unsolved problem
    document.addEventListener('keypress', (e) => {
        if (e.key !== 'Enter') return;
        if (document.getElementById('unlock-modal').style.display !== 'none') {
            closeUnlockModal();
        } else if (document.getElementById('category-screen').classList.contains('active')) {
            const category = gameState.categories[currentCategory];
            const nextUnsolved = category.problems.findIndex(p => !p.solved);
            if (nextUnsolved !== -1) openProblem(currentCategory, nextUnsolved);
        } else if (document.getElementById('result-screen').classList.contains('active')) {
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
            const maxCat = Object.keys(getGenerators()).length - 1;
            const allSolved = category.problems.every(p => p.solved);
            const didUnlock = allSolved && currentCategory < maxCat &&
                !gameState.categories[currentCategory + 1].unlocked;
            const gradeComplete = gameState.categories.every(cat => cat.problems.every(p => p.solved));
            if (gradeComplete) {
                saveGameState();
                showGradeCompleteModal();
            } else if (didUnlock) {
                gameState.categories[currentCategory + 1].unlocked = true;
                saveGameState();
                showUnlockModal(currentCategory + 1);
            } else {
                if (allSolved && currentCategory < maxCat) saveGameState();
                openCategory(currentCategory);
            }
        }
    });

    // Unlock modal continue button
    document.getElementById('unlock-continue').addEventListener('click', closeUnlockModal);
}

// URL breadcrumb helpers
function pushNav(params) {
    const url = params ? location.pathname + '?' + new URLSearchParams(params).toString() : location.pathname;
    history.pushState(params || {}, '', url);
}

function replaceNav(params) {
    const url = params ? location.pathname + '?' + new URLSearchParams(params).toString() : location.pathname;
    history.replaceState(params || {}, '', url);
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
    pushNav({ g: currentGrade, c: categoryId });
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
        
        const starsHtml = UI_SVGS.star.repeat(problem.stars);
        const isNextUnsolved = !problem.solved && !isLocked &&
            category.problems.slice(0, index).every(p => p.solved);
        const statusText = problem.solved ? t('solved') : (isLocked ? t('locked') : '');
        const hintHtml = isNextUnsolved
            ? `<div class="problem-hint desktop-only">${t('hintClickOrEnter')}</div>`
            : '';

        card.innerHTML = `
            <div class="problem-number">${index + 1}</div>
            <div class="problem-stars">${starsHtml}</div>
            <div class="problem-status">${statusText}</div>
            ${hintHtml}
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
    pushNav({ g: currentGrade, c: categoryId, p: problemIndex });
    
    // Generate problem
    currentProblem = getGenerators()[categoryId][problemIndex]();
    
    // Update display
    document.getElementById('problem-number').textContent = `${t('problem')} ${problemIndex + 1}/10`;
    
    // Use displayQuestion if available (for fractions), otherwise use question
    const questionText = currentProblem.displayQuestion || currentProblem.question;
    document.getElementById('question').textContent = questionText;
    document.getElementById('answer-input').value = '';
    document.getElementById('numpad-display').textContent = '?';
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
    timerInterval = setInterval(() => {}, 1000); // keep interval alive for stopTimer()
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
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

        // On mobile: show error in numpad display
        const numpadDisplay = document.getElementById('numpad-display');
        numpadDisplay.textContent = t('incorrectShort');
        numpadDisplay.classList.add('error');

        // Clear after a moment
        setTimeout(() => {
            feedback.textContent = '';
            feedback.className = 'feedback';
            document.getElementById('answer-input').value = '';
            numpadDisplay.textContent = '?';
            numpadDisplay.classList.remove('error');
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
    let starsHtml;
    if (stars === 3) {
        starsHtml = `<span class="star-side">${UI_SVGS.star}</span><span class="star-center">${UI_SVGS.star}</span><span class="star-side">${UI_SVGS.star}</span>`;
    } else {
        starsHtml = `<span class="star-side">${UI_SVGS.star}</span>`.repeat(stars);
    }
    document.getElementById('stars-display').innerHTML = starsHtml;
    document.getElementById('coins-earned').textContent = coins;
    
    updateTotalStats();
    showScreen('result-screen');
}

// ── Grade complete modal ──────────────────────────────────────────────────

function showGradeCompleteModal() {
    playFanfare();

    document.getElementById('grade-complete-trophy').innerHTML = getOpenMoji('1F3C6'); // trophy
    document.getElementById('grade-complete-title').textContent = t('gradeComplete');
    document.getElementById('grade-complete-subtitle').textContent = t('gradeCompleteSubtitle');

    // Stats
    document.getElementById('grade-complete-stats').innerHTML = `
        <div class="grade-stat">
            ${UI_SVGS.star}
            <span class="grade-stat-value">${gameState.totalStars}</span>
            <span class="grade-stat-label">${t('totalStarsLabel')}</span>
        </div>
        <div class="grade-stat">
            ${UI_SVGS.coin}
            <span class="grade-stat-value">${gameState.totalCoins}</span>
            <span class="grade-stat-label">${t('totalCoinsLabel')}</span>
        </div>
    `;

    // Actions
    const hasNextGrade = currentGrade < 3;
    const nextGradeName = hasNextGrade ? t(`gradeTitle${currentGrade + 1}`) : '';
    document.getElementById('grade-complete-actions').innerHTML = `
        ${hasNextGrade ? `<button class="primary-btn" id="gc-next-grade">${t('tryNextGrade')} — ${nextGradeName}</button>` : ''}
        <button class="${hasNextGrade ? 'secondary-btn' : 'primary-btn'}" id="gc-home">${t('backToHome')}</button>
    `;

    document.getElementById('grade-complete-modal').style.display = 'flex';

    const canvas = document.getElementById('grade-complete-canvas');
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    // Bigger confetti: more particles, longer duration
    confettiStop = launchConfetti(canvas, 220, 6000);

    if (hasNextGrade) {
        document.getElementById('gc-next-grade').addEventListener('click', () => {
            closeGradeCompleteModal();
            selectGrade(currentGrade + 1);
        });
    }
    document.getElementById('gc-home').addEventListener('click', () => {
        closeGradeCompleteModal();
        showScreen('grade-screen');
        pushNav(null);
    });
}

function closeGradeCompleteModal() {
    document.getElementById('grade-complete-modal').style.display = 'none';
    if (confettiStop) { confettiStop(); confettiStop = null; }
}

// ── Chapter unlock modal + confetti ──────────────────────────────────────

let confettiStop = null;

function showUnlockModal(nextCatId) {
    const name = t(`g${currentGrade}cat${nextCatId}`);
    document.getElementById('unlock-emoji').innerHTML = getOpenMoji('1F389'); // 🎉 party popper
    document.getElementById('unlock-chapter-name').textContent = name;
    document.querySelector('.unlock-title').textContent = t('chapterUnlocked');
    document.getElementById('unlock-continue').textContent = t('continueGame');
    document.getElementById('unlock-enter-hint').textContent = t('hintEnterCheck');

    // Build per-problem stars grid for the completed category
    const problems = gameState.categories[currentCategory].problems;
    const grid = document.getElementById('unlock-stars-grid');
    grid.innerHTML = problems.map((p, i) => `
        <div class="unlock-star-cell">
            <span class="unlock-prob-num">${i + 1}</span>
            <span class="unlock-prob-stars">${UI_SVGS.star.repeat(p.stars || 0) || '—'}</span>
        </div>
    `).join('');

    const modal = document.getElementById('unlock-modal');
    modal.style.display = 'flex';

    // Size the canvas to the viewport
    const canvas = document.getElementById('confetti-canvas');
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    confettiStop = launchConfetti(canvas);
}

function closeUnlockModal() {
    document.getElementById('unlock-modal').style.display = 'none';
    if (confettiStop) { confettiStop(); confettiStop = null; }
    openCategory(currentCategory + 1);
}

function launchConfetti(canvas, count = 140, duration = 3800) {
    const ctx = canvas.getContext('2d');
    const colors = ['#f59e0b','#10b981','#6366f1','#ec4899','#0ea5e9','#84cc16','#f97316','#a855f7'];
    const COUNT = count;
    const particles = Array.from({ length: COUNT }, () => ({
        x:  Math.random() * canvas.width,
        y: -20 - Math.random() * canvas.height * 0.5,
        vx: (Math.random() - 0.5) * 4,
        vy:  3 + Math.random() * 4,
        w:   7 + Math.random() * 9,
        h:   4 + Math.random() * 5,
        rot: Math.random() * Math.PI * 2,
        rotV: (Math.random() - 0.5) * 0.18,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 1,
    }));

    let raf;
    const start = Date.now();

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const elapsed = Date.now() - start;

        particles.forEach(p => {
            p.x   += p.vx;
            p.y   += p.vy;
            p.rot += p.rotV;
            p.vy  += 0.07; // gravity
            // fade out in last 1.3s
            if (elapsed > duration - 1300) p.opacity = Math.max(0, p.opacity - 0.018);

            ctx.save();
            ctx.globalAlpha = p.opacity;
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        });

        if (elapsed < duration) {
            raf = requestAnimationFrame(draw);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    draw();
    return () => { cancelAnimationFrame(raf); ctx.clearRect(0, 0, canvas.width, canvas.height); };
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initGame);
