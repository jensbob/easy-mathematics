// Problem generators for each category
const problemGenerators = {
    // Category 0: Addition up to 100
    0: [
        // Easy (1-3)
        () => {
            const a = Math.floor(Math.random() * 10) + 1;
            const b = Math.floor(Math.random() * 10) + 1;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 1 };
        },
        () => {
            const a = Math.floor(Math.random() * 20) + 10;
            const b = Math.floor(Math.random() * 10) + 1;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 1 };
        },
        () => {
            const a = Math.floor(Math.random() * 20) + 10;
            const b = Math.floor(Math.random() * 20) + 10;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 1 };
        },
        // Medium (4-7)
        () => {
            const a = Math.floor(Math.random() * 30) + 20;
            const b = Math.floor(Math.random() * 30) + 10;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 2 };
        },
        () => {
            const a = Math.floor(Math.random() * 40) + 20;
            const b = Math.floor(Math.random() * 30) + 10;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 2 };
        },
        () => {
            const a = Math.floor(Math.random() * 45) + 30;
            const b = Math.floor(Math.random() * 25) + 10;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 2 };
        },
        () => {
            const a = Math.floor(Math.random() * 50) + 30;
            const b = Math.floor(Math.random() * 30) + 15;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 2 };
        },
        // Hard (8-10)
        () => {
            const a = Math.floor(Math.random() * 45) + 40;
            const b = Math.floor(Math.random() * 45) + 15;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 3 };
        },
        () => {
            const a = Math.floor(Math.random() * 50) + 45;
            const b = Math.floor(Math.random() * 35) + 15;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 3 };
        },
        () => {
            const a = Math.floor(Math.random() * 55) + 40;
            const b = Math.floor(Math.random() * 45) + 20;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 3 };
        }
    ],
    
    // Category 1: Subtraction up to 100
    1: [
        // Easy (1-3)
        () => {
            const a = Math.floor(Math.random() * 10) + 10;
            const b = Math.floor(Math.random() * a) + 1;
            return { question: `${a} - ${b}`, answer: a - b, difficulty: 1 };
        },
        () => {
            const a = Math.floor(Math.random() * 15) + 15;
            const b = Math.floor(Math.random() * 10) + 1;
            return { question: `${a} - ${b}`, answer: a - b, difficulty: 1 };
        },
        () => {
            const a = Math.floor(Math.random() * 20) + 20;
            const b = Math.floor(Math.random() * 15) + 5;
            return { question: `${a} - ${b}`, answer: a - b, difficulty: 1 };
        },
        // Medium (4-7)
        () => {
            const a = Math.floor(Math.random() * 30) + 40;
            const b = Math.floor(Math.random() * 20) + 10;
            return { question: `${a} - ${b}`, answer: a - b, difficulty: 2 };
        },
        () => {
            const a = Math.floor(Math.random() * 35) + 50;
            const b = Math.floor(Math.random() * 25) + 15;
            return { question: `${a} - ${b}`, answer: a - b, difficulty: 2 };
        },
        () => {
            const a = Math.floor(Math.random() * 30) + 60;
            const b = Math.floor(Math.random() * 30) + 20;
            return { question: `${a} - ${b}`, answer: a - b, difficulty: 2 };
        },
        () => {
            const a = Math.floor(Math.random() * 25) + 70;
            const b = Math.floor(Math.random() * 35) + 25;
            return { question: `${a} - ${b}`, answer: a - b, difficulty: 2 };
        },
        // Hard (8-10)
        () => {
            const a = Math.floor(Math.random() * 15) + 80;
            const b = Math.floor(Math.random() * 40) + 35;
            return { question: `${a} - ${b}`, answer: a - b, difficulty: 3 };
        },
        () => {
            const a = Math.floor(Math.random() * 10) + 85;
            const b = Math.floor(Math.random() * 45) + 40;
            return { question: `${a} - ${b}`, answer: a - b, difficulty: 3 };
        },
        () => {
            const a = Math.floor(Math.random() * 8) + 92;
            const b = Math.floor(Math.random() * 50) + 45;
            return { question: `${a} - ${b}`, answer: a - b, difficulty: 3 };
        }
    ],
    
    // Category 2: Multiplication up to 12
    2: [
        // Easy (1-3)
        () => {
            const a = Math.floor(Math.random() * 5) + 2;
            const b = Math.floor(Math.random() * 5) + 2;
            return { question: `${a} × ${b}`, answer: a * b, difficulty: 1 };
        },
        () => {
            const a = Math.floor(Math.random() * 5) + 2;
            const b = Math.floor(Math.random() * 6) + 5;
            return { question: `${a} × ${b}`, answer: a * b, difficulty: 1 };
        },
        () => {
            const a = Math.floor(Math.random() * 6) + 2;
            const b = Math.floor(Math.random() * 6) + 2;
            return { question: `${a} × ${b}`, answer: a * b, difficulty: 1 };
        },
        // Medium (4-7)
        () => {
            const a = Math.floor(Math.random() * 5) + 5;
            const b = Math.floor(Math.random() * 5) + 5;
            return { question: `${a} × ${b}`, answer: a * b, difficulty: 2 };
        },
        () => {
            const a = Math.floor(Math.random() * 4) + 6;
            const b = Math.floor(Math.random() * 6) + 6;
            return { question: `${a} × ${b}`, answer: a * b, difficulty: 2 };
        },
        () => {
            const a = Math.floor(Math.random() * 5) + 7;
            const b = Math.floor(Math.random() * 5) + 7;
            return { question: `${a} × ${b}`, answer: a * b, difficulty: 2 };
        },
        () => {
            const a = Math.floor(Math.random() * 4) + 8;
            const b = Math.floor(Math.random() * 5) + 7;
            return { question: `${a} × ${b}`, answer: a * b, difficulty: 2 };
        },
        // Hard (8-10)
        () => {
            const a = Math.floor(Math.random() * 3) + 10;
            const b = Math.floor(Math.random() * 5) + 7;
            return { question: `${a} × ${b}`, answer: a * b, difficulty: 3 };
        },
        () => {
            const a = Math.floor(Math.random() * 3) + 10;
            const b = Math.floor(Math.random() * 4) + 9;
            return { question: `${a} × ${b}`, answer: a * b, difficulty: 3 };
        },
        () => {
            const a = 12;
            const b = Math.floor(Math.random() * 5) + 8;
            return { question: `${a} × ${b}`, answer: a * b, difficulty: 3 };
        }
    ],
    
    // Category 3: Addition & Subtraction up to 9999
    3: [
        // Easy (1-3)
        () => {
            const a = Math.floor(Math.random() * 900) + 100;
            const b = Math.floor(Math.random() * 900) + 100;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 1 };
        },
        () => {
            const a = Math.floor(Math.random() * 1500) + 500;
            const b = Math.floor(Math.random() * 500) + 100;
            return { question: `${a} - ${b}`, answer: a - b, difficulty: 1 };
        },
        () => {
            const a = Math.floor(Math.random() * 2000) + 1000;
            const b = Math.floor(Math.random() * 1000) + 500;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 1 };
        },
        // Medium (4-7)
        () => {
            const a = Math.floor(Math.random() * 3000) + 2000;
            const b = Math.floor(Math.random() * 2000) + 1000;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 2 };
        },
        () => {
            const a = Math.floor(Math.random() * 3000) + 3000;
            const b = Math.floor(Math.random() * 2000) + 1000;
            return { question: `${a} - ${b}`, answer: a - b, difficulty: 2 };
        },
        () => {
            const a = Math.floor(Math.random() * 2500) + 3500;
            const b = Math.floor(Math.random() * 2500) + 2000;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 2 };
        },
        () => {
            const a = Math.floor(Math.random() * 2000) + 5000;
            const b = Math.floor(Math.random() * 3000) + 2000;
            return { question: `${a} - ${b}`, answer: a - b, difficulty: 2 };
        },
        // Hard (8-10)
        () => {
            const a = Math.floor(Math.random() * 2000) + 6000;
            const b = Math.floor(Math.random() * 2500) + 2500;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 3 };
        },
        () => {
            const a = Math.floor(Math.random() * 1500) + 7500;
            const b = Math.floor(Math.random() * 4000) + 3000;
            return { question: `${a} - ${b}`, answer: a - b, difficulty: 3 };
        },
        () => {
            const a = Math.floor(Math.random() * 1000) + 8500;
            const b = Math.floor(Math.random() * 1000) + 500;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 3 };
        }
    ],
    
    // Category 4: Division up to 99
    4: [
        // Easy (1-3)
        () => {
            const b = Math.floor(Math.random() * 4) + 2;
            const answer = Math.floor(Math.random() * 5) + 2;
            const a = b * answer;
            return { question: `${a} ÷ ${b}`, answer: answer, difficulty: 1 };
        },
        () => {
            const b = Math.floor(Math.random() * 5) + 3;
            const answer = Math.floor(Math.random() * 6) + 3;
            const a = b * answer;
            return { question: `${a} ÷ ${b}`, answer: answer, difficulty: 1 };
        },
        () => {
            const b = Math.floor(Math.random() * 6) + 4;
            const answer = Math.floor(Math.random() * 7) + 4;
            const a = b * answer;
            return { question: `${a} ÷ ${b}`, answer: answer, difficulty: 1 };
        },
        // Medium (4-7)
        () => {
            const b = Math.floor(Math.random() * 5) + 6;
            const answer = Math.floor(Math.random() * 6) + 5;
            const a = b * answer;
            return { question: `${a} ÷ ${b}`, answer: answer, difficulty: 2 };
        },
        () => {
            const b = Math.floor(Math.random() * 4) + 7;
            const answer = Math.floor(Math.random() * 7) + 6;
            const a = b * answer;
            return { question: `${a} ÷ ${b}`, answer: answer, difficulty: 2 };
        },
        () => {
            const b = Math.floor(Math.random() * 3) + 8;
            const answer = Math.floor(Math.random() * 8) + 7;
            const a = b * answer;
            return { question: `${a} ÷ ${b}`, answer: answer, difficulty: 2 };
        },
        () => {
            const b = Math.floor(Math.random() * 4) + 9;
            const answer = Math.floor(Math.random() * 6) + 7;
            const a = b * answer;
            return { question: `${a} ÷ ${b}`, answer: answer, difficulty: 2 };
        },
        // Hard (8-10)
        () => {
            const b = 11;
            const answer = Math.floor(Math.random() * 7) + 7;
            const a = b * answer;
            return { question: `${a} ÷ ${b}`, answer: answer, difficulty: 3 };
        },
        () => {
            const b = 12;
            const answer = Math.floor(Math.random() * 6) + 8;
            const a = b * answer;
            return { question: `${a} ÷ ${b}`, answer: answer, difficulty: 3 };
        },
        () => {
            const b = Math.floor(Math.random() * 3) + 11;
            const answer = Math.floor(Math.random() * 5) + 8;
            const a = b * answer;
            return { question: `${a} ÷ ${b}`, answer: answer, difficulty: 3 };
        }
    ],
    
    // Category 5: Fractions
    5: [
        // Easy (1-3) - Simple fraction identification
        () => {
            const denominator = Math.floor(Math.random() * 3) + 2; // 2-4
            const numerator = 1;
            const total = denominator;
            const parts = numerator;
            return { 
                question: `${parts}/${total}`, 
                answer: numerator,
                displayQuestion: `כמה חלקים מסומנים מתוך ${total}?`,
                difficulty: 1 
            };
        },
        () => {
            const denominator = Math.floor(Math.random() * 4) + 3; // 3-6
            const numerator = Math.floor(Math.random() * (denominator - 1)) + 1;
            return { 
                question: `${numerator}/${denominator} + ${numerator}/${denominator}`, 
                answer: (numerator * 2),
                displayQuestion: `${numerator}/${denominator} + ${numerator}/${denominator} = ?/${denominator}`,
                difficulty: 1 
            };
        },
        () => {
            const denominator = Math.floor(Math.random() * 3) + 4; // 4-6
            const numerator = Math.floor(Math.random() * (denominator - 2)) + 2;
            return { 
                question: `${numerator}/${denominator} - 1/${denominator}`, 
                answer: (numerator - 1),
                displayQuestion: `${numerator}/${denominator} - 1/${denominator} = ?/${denominator}`,
                difficulty: 1 
            };
        },
        // Medium (4-7)
        () => {
            const denominator = Math.floor(Math.random() * 4) + 5; // 5-8
            const num1 = Math.floor(Math.random() * (denominator - 2)) + 1;
            const num2 = Math.floor(Math.random() * (denominator - num1 - 1)) + 1;
            return { 
                question: `${num1}/${denominator} + ${num2}/${denominator}`, 
                answer: (num1 + num2),
                displayQuestion: `${num1}/${denominator} + ${num2}/${denominator} = ?/${denominator}`,
                difficulty: 2 
            };
        },
        () => {
            const denominator = Math.floor(Math.random() * 3) + 6; // 6-8
            const num1 = Math.floor(Math.random() * (denominator - 3)) + 3;
            const num2 = Math.floor(Math.random() * (num1 - 1)) + 1;
            return { 
                question: `${num1}/${denominator} - ${num2}/${denominator}`, 
                answer: (num1 - num2),
                displayQuestion: `${num1}/${denominator} - ${num2}/${denominator} = ?/${denominator}`,
                difficulty: 2 
            };
        },
        () => {
            // Simple equivalent fractions
            const base = Math.floor(Math.random() * 3) + 2; // 2-4
            const mult = 2;
            return { 
                question: `${base}/${base*2} = 1/?`, 
                answer: 2,
                displayQuestion: `${base}/${base*2} = 1/?`,
                difficulty: 2 
            };
        },
        () => {
            const denominator = 10;
            const num1 = Math.floor(Math.random() * 5) + 2;
            const num2 = Math.floor(Math.random() * (8 - num1)) + 1;
            return { 
                question: `${num1}/10 + ${num2}/10`, 
                answer: (num1 + num2),
                displayQuestion: `${num1}/10 + ${num2}/10 = ?/10`,
                difficulty: 2 
            };
        },
        // Hard (8-10)
        () => {
            // Comparing fractions
            const denom = Math.floor(Math.random() * 3) + 6; // 6-8
            const num1 = Math.floor(Math.random() * (denom - 2)) + 2;
            const num2 = Math.floor(Math.random() * (denom - 2)) + 2;
            const larger = Math.max(num1, num2);
            return { 
                question: `max(${num1}/${denom}, ${num2}/${denom})`, 
                answer: larger,
                displayQuestion: `מה המונה של השבר הגדול יותר: ${num1}/${denom} או ${num2}/${denom}?`,
                difficulty: 3 
            };
        },
        () => {
            const denominator = 12;
            const num1 = Math.floor(Math.random() * 5) + 3;
            const num2 = Math.floor(Math.random() * (10 - num1)) + 2;
            return { 
                question: `${num1}/12 + ${num2}/12`, 
                answer: (num1 + num2),
                displayQuestion: `${num1}/12 + ${num2}/12 = ?/12`,
                difficulty: 3 
            };
        },
        () => {
            // Mixed operations
            const denom = 8;
            const num1 = Math.floor(Math.random() * 3) + 4; // 4-6
            const num2 = Math.floor(Math.random() * 2) + 1; // 1-2
            const num3 = Math.floor(Math.random() * 2) + 1; // 1-2
            return { 
                question: `${num1}/8 - ${num2}/8 + ${num3}/8`, 
                answer: (num1 - num2 + num3),
                displayQuestion: `${num1}/8 - ${num2}/8 + ${num3}/8 = ?/8`,
                difficulty: 3 
            };
        }
    ],
    
    // Category 6: Multiplication up to 20
    6: [
        // Easy (1-3)
        () => {
            const a = Math.floor(Math.random() * 4) + 10; // 10-13
            const b = Math.floor(Math.random() * 3) + 2; // 2-4
            return { question: `${a} × ${b}`, answer: a * b, difficulty: 1 };
        },
        () => {
            const a = Math.floor(Math.random() * 5) + 11; // 11-15
            const b = Math.floor(Math.random() * 4) + 3; // 3-6
            return { question: `${a} × ${b}`, answer: a * b, difficulty: 1 };
        },
        () => {
            const a = Math.floor(Math.random() * 4) + 12; // 12-15
            const b = Math.floor(Math.random() * 5) + 4; // 4-8
            return { question: `${a} × ${b}`, answer: a * b, difficulty: 1 };
        },
        // Medium (4-7)
        () => {
            const a = Math.floor(Math.random() * 4) + 13; // 13-16
            const b = Math.floor(Math.random() * 5) + 6; // 6-10
            return { question: `${a} × ${b}`, answer: a * b, difficulty: 2 };
        },
        () => {
            const a = Math.floor(Math.random() * 3) + 15; // 15-17
            const b = Math.floor(Math.random() * 6) + 7; // 7-12
            return { question: `${a} × ${b}`, answer: a * b, difficulty: 2 };
        },
        () => {
            const a = Math.floor(Math.random() * 3) + 16; // 16-18
            const b = Math.floor(Math.random() * 5) + 8; // 8-12
            return { question: `${a} × ${b}`, answer: a * b, difficulty: 2 };
        },
        () => {
            const a = Math.floor(Math.random() * 3) + 17; // 17-19
            const b = Math.floor(Math.random() * 6) + 8; // 8-13
            return { question: `${a} × ${b}`, answer: a * b, difficulty: 2 };
        },
        // Hard (8-10)
        () => {
            const a = Math.floor(Math.random() * 2) + 18; // 18-19
            const b = Math.floor(Math.random() * 5) + 11; // 11-15
            return { question: `${a} × ${b}`, answer: a * b, difficulty: 3 };
        },
        () => {
            const a = 20;
            const b = Math.floor(Math.random() * 6) + 10; // 10-15
            return { question: `${a} × ${b}`, answer: a * b, difficulty: 3 };
        },
        () => {
            const a = 20;
            const b = Math.floor(Math.random() * 5) + 16; // 16-20
            return { question: `${a} × ${b}`, answer: a * b, difficulty: 3 };
        }
    ]
};

// Get coin rewards based on difficulty
function getCoinReward(difficulty, stars) {
    const baseRewards = {
        1: { 3: 5, 2: 3, 1: 1 },    // Easy
        2: { 3: 8, 2: 5, 1: 2 },    // Medium
        3: { 3: 12, 2: 7, 1: 3 }    // Hard
    };
    return baseRewards[difficulty][stars] || 0;
}

// Time thresholds for star ratings (in seconds) based on difficulty
function getTimeThresholds(difficulty) {
    const thresholds = {
        1: { excellent: 5, good: 10 },    // Easy: <5s = 3★, <10s = 2★, else 1★
        2: { excellent: 8, good: 15 },    // Medium: <8s = 3★, <15s = 2★, else 1★
        3: { excellent: 12, good: 20 }    // Hard: <12s = 3★, <20s = 2★, else 1★
    };
    return thresholds[difficulty];
}
