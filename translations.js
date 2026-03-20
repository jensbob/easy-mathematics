const translations = {
    he: {
        title: "משחק המתמטיקה",
        start: "התחל",
        back: "חזור",
        backToCategory: "חזור לקטגוריה",
        submit: "בדוק",
        next: "הבא",
        coinsEarned: "מטבעות שהרווחת:",
        correct: "כל הכבוד! תשובה נכונה!",
        incorrect: "לא נכון, נסה שוב!",
        excellent: "מצוין! 3 כוכבים!",
        good: "טוב מאוד! 2 כוכבים!",
        ok: "יפה! כוכב אחד!",
        problem: "תרגיל",
        locked: "נעול",
        solved: "נפתר",
        cat0: "חיבור עד 100",
        cat1: "חיסור עד 100",
        cat2: "כפל עד 12",
        cat3: "חיבור וחיסור עד 9999",
        cat4: "חילוק עד 99",
        cat5: "שברים",
        cat6: "כפל עד 20"
    },
    en: {
        title: "Math Game",
        start: "Start",
        back: "Back",
        backToCategory: "Back to Category",
        submit: "Check",
        next: "Next",
        coinsEarned: "Coins Earned:",
        correct: "Great! Correct answer!",
        incorrect: "Incorrect, try again!",
        excellent: "Excellent! 3 stars!",
        good: "Very good! 2 stars!",
        ok: "Good! 1 star!",
        problem: "Problem",
        locked: "Locked",
        solved: "Solved",
        cat0: "Addition up to 100",
        cat1: "Subtraction up to 100",
        cat2: "Multiplication up to 12",
        cat3: "Addition & Subtraction up to 9999",
        cat4: "Division up to 99",
        cat5: "Fractions",
        cat6: "Multiplication up to 20"
    }
};

let currentLang = 'he';

function updateLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    
    // Update all elements with data-lang attribute
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Update language toggle button
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.textContent = lang === 'he' ? 'EN' : 'עב';
    }
    
    // Save preference
    localStorage.setItem('lang', lang);
}

function t(key) {
    return translations[currentLang][key] || key;
}
