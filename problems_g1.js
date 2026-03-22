// Grade 1 (Aleph) problem generators
const problemGenerators_g1 = {

    // Category 0: Addition up to 10
    0: [
        // Easy (0-2)
        () => { const a = Math.floor(Math.random()*4)+1; const b = Math.floor(Math.random()*4)+1; return { question: `${a} + ${b}`, answer: a+b, difficulty: 1 }; },
        () => { const a = Math.floor(Math.random()*4)+2; const b = Math.floor(Math.random()*3)+1; return { question: `${a} + ${b}`, answer: a+b, difficulty: 1 }; },
        () => { const a = Math.floor(Math.random()*3)+3; const b = 10-a; return { question: `${a} + ${b}`, answer: 10, difficulty: 1 }; },
        // Medium (3-6)
        () => { const a = Math.floor(Math.random()*5)+3; const b = Math.floor(Math.random()*3)+2; return { question: `${a} + ${b}`, answer: a+b, difficulty: 2 }; },
        () => { const a = Math.floor(Math.random()*4)+4; const b = Math.floor(Math.random()*(10-a))+1; return { question: `${a} + ${b}`, answer: a+b, difficulty: 2 }; },
        () => { const a = Math.floor(Math.random()*3)+5; const b = Math.floor(Math.random()*(10-a))+1; return { question: `${a} + ${b}`, answer: a+b, difficulty: 2 }; },
        () => { const a = Math.floor(Math.random()*4)+4; const b = 10-a; return { question: `${a} + ${b}`, answer: 10, difficulty: 2 }; },
        // Hard (7-9)
        () => { const a = Math.floor(Math.random()*3)+6; const b = 10-a; return { question: `${a} + ${b}`, answer: 10, difficulty: 3 }; },
        () => { const a = Math.floor(Math.random()*4)+5; const b = Math.floor(Math.random()*(11-a))+1; return { question: `${a} + ${b}`, answer: a+b, difficulty: 3 }; },
        () => { const pairs = [[7,3],[8,2],[9,1],[6,4],[5,5]]; const [a,b] = pairs[Math.floor(Math.random()*pairs.length)]; return { question: `${a} + ${b}`, answer: a+b, difficulty: 3 }; }
    ],

    // Category 1: Subtraction up to 10
    1: [
        // Easy (0-2)
        () => { const a = Math.floor(Math.random()*4)+3; const b = Math.floor(Math.random()*2)+1; return { question: `${a} - ${b}`, answer: a-b, difficulty: 1 }; },
        () => { const a = Math.floor(Math.random()*4)+4; const b = Math.floor(Math.random()*3)+1; return { question: `${a} - ${b}`, answer: a-b, difficulty: 1 }; },
        () => { const b = Math.floor(Math.random()*4)+1; const a = b+Math.floor(Math.random()*3)+1; return { question: `${a} - ${b}`, answer: a-b, difficulty: 1 }; },
        // Medium (3-6)
        () => { const a = Math.floor(Math.random()*4)+5; const b = Math.floor(Math.random()*3)+2; return { question: `${a} - ${b}`, answer: a-b, difficulty: 2 }; },
        () => { const a = Math.floor(Math.random()*3)+6; const b = Math.floor(Math.random()*4)+3; return { question: `${a} - ${b}`, answer: a-b, difficulty: 2 }; },
        () => { const a = Math.floor(Math.random()*3)+7; const b = Math.floor(Math.random()*4)+3; return { question: `${a} - ${b}`, answer: a-b, difficulty: 2 }; },
        () => { const a = 10; const b = Math.floor(Math.random()*5)+2; return { question: `${a} - ${b}`, answer: a-b, difficulty: 2 }; },
        // Hard (7-9)
        () => { const a = 10; const b = Math.floor(Math.random()*4)+5; return { question: `${a} - ${b}`, answer: a-b, difficulty: 3 }; },
        () => { const a = Math.floor(Math.random()*2)+9; const b = Math.floor(Math.random()*5)+4; return { question: `${a} - ${b}`, answer: a-b, difficulty: 3 }; },
        () => { const a = 10; const b = Math.floor(Math.random()*9)+1; return { question: `${a} - ${b}`, answer: a-b, difficulty: 3 }; }
    ],

    // Category 2: Bigger or Smaller? (write the bigger/smaller number)
    2: [
        // Easy (0-2): numbers 1–10, clearly apart, always "which is bigger"
        () => {
            const a = Math.floor(Math.random()*4)+6; const b = Math.floor(Math.random()*4)+1;
            return {
                question: currentLang === 'he' ? `מה גדול יותר: ${a} או ${b}?` : `Which is bigger: ${a} or ${b}?`,
                answer: Math.max(a, b), difficulty: 1
            };
        },
        () => {
            const a = Math.floor(Math.random()*3)+2; const b = Math.floor(Math.random()*3)+6;
            return {
                question: currentLang === 'he' ? `מה גדול יותר: ${a} או ${b}?` : `Which is bigger: ${a} or ${b}?`,
                answer: Math.max(a, b), difficulty: 1
            };
        },
        () => {
            const a = Math.floor(Math.random()*4)+1; const b = Math.floor(Math.random()*4)+5;
            return {
                question: currentLang === 'he' ? `מה קטן יותר: ${a} או ${b}?` : `Which is smaller: ${a} or ${b}?`,
                answer: Math.min(a, b), difficulty: 1
            };
        },
        // Medium (3-6): numbers 1–20, mix of bigger/smaller
        () => {
            const a = Math.floor(Math.random()*8)+11; const b = Math.floor(Math.random()*8)+2;
            return {
                question: currentLang === 'he' ? `מה גדול יותר: ${a} או ${b}?` : `Which is bigger: ${a} or ${b}?`,
                answer: Math.max(a, b), difficulty: 2
            };
        },
        () => {
            const a = Math.floor(Math.random()*8)+2; const b = Math.floor(Math.random()*8)+11;
            return {
                question: currentLang === 'he' ? `מה קטן יותר: ${a} או ${b}?` : `Which is smaller: ${a} or ${b}?`,
                answer: Math.min(a, b), difficulty: 2
            };
        },
        () => {
            const a = Math.floor(Math.random()*10)+10; const b = Math.floor(Math.random()*8)+1;
            return {
                question: currentLang === 'he' ? `מה גדול יותר: ${b} או ${a}?` : `Which is bigger: ${b} or ${a}?`,
                answer: Math.max(a, b), difficulty: 2
            };
        },
        () => {
            const a = Math.floor(Math.random()*6)+14; const b = Math.floor(Math.random()*6)+6;
            return {
                question: currentLang === 'he' ? `מה קטן יותר: ${a} או ${b}?` : `Which is smaller: ${a} or ${b}?`,
                answer: Math.min(a, b), difficulty: 2
            };
        },
        // Hard (7-9): numbers close together up to 20
        () => {
            const b = Math.floor(Math.random()*8)+5; const a = b + Math.floor(Math.random()*3)+1;
            return {
                question: currentLang === 'he' ? `מה גדול יותר: ${a} או ${b}?` : `Which is bigger: ${a} or ${b}?`,
                answer: Math.max(a, b), difficulty: 3
            };
        },
        () => {
            const a = Math.floor(Math.random()*8)+5; const b = a + Math.floor(Math.random()*3)+1;
            return {
                question: currentLang === 'he' ? `מה קטן יותר: ${a} או ${b}?` : `Which is smaller: ${a} or ${b}?`,
                answer: Math.min(a, b), difficulty: 3
            };
        },
        () => {
            const a = Math.floor(Math.random()*9)+10; const b = a - (Math.floor(Math.random()*3)+1);
            return {
                question: currentLang === 'he' ? `מה גדול יותר: ${b} או ${a}?` : `Which is bigger: ${b} or ${a}?`,
                answer: Math.max(a, b), difficulty: 3
            };
        },
    ],

    // Category 3: Even and Odd
    3: [
        // Easy (0-2): "which is even?" with small numbers clearly apart
        () => {
            const even = [2,4,6,8,10][Math.floor(Math.random()*5)];
            const odd  = [1,3,5,7,9][Math.floor(Math.random()*5)];
            return {
                question: currentLang === 'he' ? `מה המספר הזוגי: ${odd} או ${even}?` : `Which is even: ${odd} or ${even}?`,
                answer: even, difficulty: 1
            };
        },
        () => {
            const odd  = [1,3,5,7,9][Math.floor(Math.random()*5)];
            const even = [2,4,6,8,10][Math.floor(Math.random()*5)];
            return {
                question: currentLang === 'he' ? `מה המספר האי-זוגי: ${even} או ${odd}?` : `Which is odd: ${even} or ${odd}?`,
                answer: odd, difficulty: 1
            };
        },
        () => {
            const even = [2,4,6,8,10][Math.floor(Math.random()*5)];
            const odd  = [1,3,5,7,9][Math.floor(Math.random()*5)];
            return {
                question: currentLang === 'he' ? `מה המספר הזוגי: ${even} או ${odd}?` : `Which is even: ${even} or ${odd}?`,
                answer: even, difficulty: 1
            };
        },
        // Medium (3-6): numbers up to 20, next even/odd
        () => {
            const odd  = [11,13,15,17,19][Math.floor(Math.random()*5)];
            const even = [12,14,16,18,20][Math.floor(Math.random()*5)];
            return {
                question: currentLang === 'he' ? `מה המספר הזוגי: ${odd} או ${even}?` : `Which is even: ${odd} or ${even}?`,
                answer: even, difficulty: 2
            };
        },
        () => {
            const n = Math.floor(Math.random()*9)*2+2; // 2,4,...18
            return {
                question: currentLang === 'he' ? `מה המספר הזוגי הבא אחרי ${n}?` : `What is the next even number after ${n}?`,
                answer: n+2, difficulty: 2
            };
        },
        () => {
            const n = Math.floor(Math.random()*9)*2+1; // 1,3,...17
            return {
                question: currentLang === 'he' ? `מה המספר האי-זוגי הבא אחרי ${n}?` : `What is the next odd number after ${n}?`,
                answer: n+2, difficulty: 2
            };
        },
        () => {
            const even = [12,14,16,18,20][Math.floor(Math.random()*5)];
            const odd  = [11,13,15,17,19][Math.floor(Math.random()*5)];
            return {
                question: currentLang === 'he' ? `מה המספר האי-זוגי: ${even} או ${odd}?` : `Which is odd: ${even} or ${odd}?`,
                answer: odd, difficulty: 2
            };
        },
        // Hard (7-9): close numbers up to 20, next even/odd with larger values
        () => {
            const n = Math.floor(Math.random()*7)*2+4; // 4,6,...16
            const decoy = n + 1;
            return {
                question: currentLang === 'he' ? `מה המספר הזוגי: ${n} או ${decoy}?` : `Which is even: ${n} or ${decoy}?`,
                answer: n, difficulty: 3
            };
        },
        () => {
            const n = Math.floor(Math.random()*7)*2+6; // 6,8,...18
            return {
                question: currentLang === 'he' ? `מה המספר הזוגי הבא אחרי ${n}?` : `What is the next even number after ${n}?`,
                answer: n+2, difficulty: 3
            };
        },
        () => {
            const n = Math.floor(Math.random()*7)*2+5; // 5,7,...17
            return {
                question: currentLang === 'he' ? `מה המספר האי-זוגי הבא אחרי ${n}?` : `What is the next odd number after ${n}?`,
                answer: n+2, difficulty: 3
            };
        },
    ],

    // Category 4: Addition up to 20
    4: [
        // Easy (0-2)
        () => { const a = Math.floor(Math.random()*5)+6; const b = Math.floor(Math.random()*4)+1; return { question: `${a} + ${b}`, answer: a+b, difficulty: 1 }; },
        () => { const a = Math.floor(Math.random()*5)+8; const b = Math.floor(Math.random()*4)+2; return { question: `${a} + ${b}`, answer: a+b, difficulty: 1 }; },
        () => { const a = Math.floor(Math.random()*5)+5; const b = Math.floor(Math.random()*5)+5; return { question: `${a} + ${b}`, answer: a+b, difficulty: 1 }; },
        // Medium (3-6)
        () => { const a = Math.floor(Math.random()*5)+8; const b = Math.floor(Math.random()*5)+5; return { question: `${a} + ${b}`, answer: a+b, difficulty: 2 }; },
        () => { const a = Math.floor(Math.random()*4)+9; const b = Math.floor(Math.random()*6)+5; return { question: `${a} + ${b}`, answer: a+b, difficulty: 2 }; },
        () => { const a = Math.floor(Math.random()*4)+10; const b = Math.floor(Math.random()*5)+4; return { question: `${a} + ${b}`, answer: a+b, difficulty: 2 }; },
        () => { const a = Math.floor(Math.random()*5)+10; const b = Math.floor(Math.random()*5)+5; return { question: `${a} + ${b}`, answer: a+b, difficulty: 2 }; },
        // Hard (7-9)
        () => { const a = Math.floor(Math.random()*3)+12; const b = Math.floor(Math.random()*4)+5; return { question: `${a} + ${b}`, answer: a+b, difficulty: 3 }; },
        () => { const a = Math.floor(Math.random()*4)+13; const b = Math.floor(Math.random()*4)+4; return { question: `${a} + ${b}`, answer: a+b, difficulty: 3 }; },
        () => { const b = Math.floor(Math.random()*9)+1; const a = 20-b; return { question: `${a} + ${b}`, answer: 20, difficulty: 3 }; }
    ],

    // Category 5: Subtraction up to 20
    5: [
        // Easy (0-2)
        () => { const a = Math.floor(Math.random()*5)+11; const b = Math.floor(Math.random()*4)+1; return { question: `${a} - ${b}`, answer: a-b, difficulty: 1 }; },
        () => { const a = Math.floor(Math.random()*6)+12; const b = Math.floor(Math.random()*5)+2; return { question: `${a} - ${b}`, answer: a-b, difficulty: 1 }; },
        () => { const a = 20; const b = Math.floor(Math.random()*5)+1; return { question: `${a} - ${b}`, answer: a-b, difficulty: 1 }; },
        // Medium (3-6)
        () => { const a = Math.floor(Math.random()*5)+13; const b = Math.floor(Math.random()*6)+5; return { question: `${a} - ${b}`, answer: a-b, difficulty: 2 }; },
        () => { const a = Math.floor(Math.random()*4)+15; const b = Math.floor(Math.random()*7)+6; return { question: `${a} - ${b}`, answer: a-b, difficulty: 2 }; },
        () => { const a = 20; const b = Math.floor(Math.random()*6)+5; return { question: `${a} - ${b}`, answer: a-b, difficulty: 2 }; },
        () => { const a = Math.floor(Math.random()*4)+16; const b = Math.floor(Math.random()*8)+7; return { question: `${a} - ${b}`, answer: a-b, difficulty: 2 }; },
        // Hard (7-9)
        () => { const a = 20; const b = Math.floor(Math.random()*8)+8; return { question: `${a} - ${b}`, answer: a-b, difficulty: 3 }; },
        () => { const a = Math.floor(Math.random()*3)+17; const b = Math.floor(Math.random()*8)+8; return { question: `${a} - ${b}`, answer: a-b, difficulty: 3 }; },
        () => { const a = Math.floor(Math.random()*2)+19; const b = Math.floor(Math.random()*10)+9; return { question: `${a} - ${b}`, answer: a-b, difficulty: 3 }; }
    ],

    // Category 6: Skip counting
    6: [
        // Easy (0-2): count by 2s
        () => {
            const start = (Math.floor(Math.random()*4)+1)*2;
            const seq = [start, start+2, start+4];
            return {
                question: currentLang === 'he'
                    ? `מה הבא?\n${seq.join(', ')}, ?`
                    : `What comes next?\n${seq.join(', ')}, ?`,
                answer: start+6, difficulty: 1
            };
        },
        () => {
            const start = (Math.floor(Math.random()*4)+1)*2;
            const seq = [start, start+2, start+4, start+6];
            return {
                question: currentLang === 'he'
                    ? `מה הבא?\n${seq.join(', ')}, ?`
                    : `What comes next?\n${seq.join(', ')}, ?`,
                answer: start+8, difficulty: 1
            };
        },
        () => {
            const seq = [2, 4, 6, 8];
            return {
                question: currentLang === 'he'
                    ? `מה הבא?\n${seq.join(', ')}, ?`
                    : `What comes next?\n${seq.join(', ')}, ?`,
                answer: 10, difficulty: 1
            };
        },
        // Medium (3-6): count by 5s
        () => {
            const start = (Math.floor(Math.random()*3)+1)*5;
            const seq = [start, start+5, start+10];
            return {
                question: currentLang === 'he'
                    ? `מה הבא?\n${seq.join(', ')}, ?`
                    : `What comes next?\n${seq.join(', ')}, ?`,
                answer: start+15, difficulty: 2
            };
        },
        () => {
            const seq = [5, 10, 15, 20];
            return {
                question: currentLang === 'he'
                    ? `מה הבא?\n${seq.join(', ')}, ?`
                    : `What comes next?\n${seq.join(', ')}, ?`,
                answer: 25, difficulty: 2
            };
        },
        () => {
            const start = (Math.floor(Math.random()*4)+2)*5;
            const seq = [start, start+5, start+10, start+15];
            return {
                question: currentLang === 'he'
                    ? `מה הבא?\n${seq.join(', ')}, ?`
                    : `What comes next?\n${seq.join(', ')}, ?`,
                answer: start+20, difficulty: 2
            };
        },
        () => {
            const start = (Math.floor(Math.random()*3)+1)*2;
            const seq = [start, start+2, start+4, start+6, start+8];
            return {
                question: currentLang === 'he'
                    ? `מה הבא?\n${seq.join(', ')}, ?`
                    : `What comes next?\n${seq.join(', ')}, ?`,
                answer: start+10, difficulty: 2
            };
        },
        // Hard (7-9): count by 10s
        () => {
            const start = (Math.floor(Math.random()*5)+1)*10;
            const seq = [start, start+10, start+20];
            return {
                question: currentLang === 'he'
                    ? `מה הבא?\n${seq.join(', ')}, ?`
                    : `What comes next?\n${seq.join(', ')}, ?`,
                answer: start+30, difficulty: 3
            };
        },
        () => {
            const seq = [10, 20, 30, 40];
            return {
                question: currentLang === 'he'
                    ? `מה הבא?\n${seq.join(', ')}, ?`
                    : `What comes next?\n${seq.join(', ')}, ?`,
                answer: 50, difficulty: 3
            };
        },
        () => {
            const start = (Math.floor(Math.random()*4)+3)*10;
            const seq = [start, start+10, start+20, start+30];
            return {
                question: currentLang === 'he'
                    ? `מה הבא?\n${seq.join(', ')}, ?`
                    : `What comes next?\n${seq.join(', ')}, ?`,
                answer: start+40, difficulty: 3
            };
        }
    ],

    // Category 7: Missing addend
    7: [
        // Easy (0-2): ? + b = total, small numbers
        () => { const b = Math.floor(Math.random()*3)+1; const answer = Math.floor(Math.random()*4)+1; const total = answer+b;
            return { question: currentLang === 'he' ? `? + ${b} = ${total}` : `? + ${b} = ${total}`, answer, difficulty: 1 }; },
        () => { const a = Math.floor(Math.random()*3)+1; const answer = Math.floor(Math.random()*4)+2; const total = a+answer;
            return { question: currentLang === 'he' ? `${a} + ? = ${total}` : `${a} + ? = ${total}`, answer, difficulty: 1 }; },
        () => { const b = Math.floor(Math.random()*4)+2; const answer = Math.floor(Math.random()*3)+2; const total = answer+b;
            return { question: currentLang === 'he' ? `? + ${b} = ${total}` : `? + ${b} = ${total}`, answer, difficulty: 1 }; },
        // Medium (3-6): up to 10
        () => { const b = Math.floor(Math.random()*4)+3; const answer = Math.floor(Math.random()*4)+3; const total = answer+b;
            return { question: currentLang === 'he' ? `${b} + ? = ${total}` : `${b} + ? = ${total}`, answer, difficulty: 2 }; },
        () => { const answer = Math.floor(Math.random()*5)+3; const total = 10;
            return { question: currentLang === 'he' ? `${total-answer} + ? = ${total}` : `${total-answer} + ? = ${total}`, answer, difficulty: 2 }; },
        () => { const b = Math.floor(Math.random()*4)+4; const answer = Math.floor(Math.random()*4)+4; const total = answer+b;
            return { question: currentLang === 'he' ? `? + ${b} = ${total}` : `? + ${b} = ${total}`, answer, difficulty: 2 }; },
        () => { const answer = Math.floor(Math.random()*6)+3; const total = Math.floor(Math.random()*4)+10;
            return { question: currentLang === 'he' ? `${total-answer} + ? = ${total}` : `${total-answer} + ? = ${total}`, answer, difficulty: 2 }; },
        // Hard (7-9): up to 20
        () => { const b = Math.floor(Math.random()*6)+5; const answer = Math.floor(Math.random()*6)+5; const total = answer+b;
            return { question: currentLang === 'he' ? `${b} + ? = ${total}` : `${b} + ? = ${total}`, answer, difficulty: 3 }; },
        () => { const answer = Math.floor(Math.random()*8)+5; const total = 20;
            return { question: currentLang === 'he' ? `${total-answer} + ? = ${total}` : `${total-answer} + ? = ${total}`, answer, difficulty: 3 }; },
        () => { const b = Math.floor(Math.random()*7)+7; const answer = Math.floor(Math.random()*7)+5; const total = answer+b;
            return { question: currentLang === 'he' ? `? + ${b} = ${total}` : `? + ${b} = ${total}`, answer, difficulty: 3 }; }
    ],

    // Category 8: Word problems up to 20
    8: [
        // Easy (0-2)
        () => {
            const a = Math.floor(Math.random()*5)+3; const b = Math.floor(Math.random()*4)+2;
            return {
                question: currentLang === 'he'
                    ? `לדני יש ${a} ממתקים. הוא קיבל עוד ${b}. כמה ממתקים יש לו?`
                    : `Danny has ${a} candies. He got ${b} more. How many does he have?`,
                answer: a+b, difficulty: 1
            };
        },
        () => {
            const total = Math.floor(Math.random()*6)+8; const eaten = Math.floor(Math.random()*4)+2;
            return {
                question: currentLang === 'he'
                    ? `בסל יש ${total} תפוחים. אכלו ${eaten}. כמה נשארו?`
                    : `There are ${total} apples. ${eaten} were eaten. How many are left?`,
                answer: total-eaten, difficulty: 1
            };
        },
        () => {
            const a = Math.floor(Math.random()*4)+3; const b = Math.floor(Math.random()*4)+3;
            return {
                question: currentLang === 'he'
                    ? `\u2067${a} ציפורים יושבות על עץ. הגיעו עוד ${b}. כמה ציפורים יש?\u2069`
                    : `${a} birds sit on a tree. ${b} more arrive. How many birds?`,
                answer: a+b, difficulty: 1
            };
        },
        // Medium (3-6)
        () => {
            const total = Math.floor(Math.random()*5)+12; const left = Math.floor(Math.random()*5)+4;
            return {
                question: currentLang === 'he'
                    ? `היו ${total} עוגיות. אכלו כמה, ונשארו ${left}. כמה אכלו?`
                    : `There were ${total} cookies. Some were eaten, ${left} remain. How many eaten?`,
                answer: total-left, difficulty: 2
            };
        },
        () => {
            const a = Math.floor(Math.random()*4)+6; const b = Math.floor(Math.random()*4)+5;
            return {
                question: currentLang === 'he'
                    ? `בכיתה יש ${a} בנים ו-${b} בנות. כמה תלמידים בסך הכל?`
                    : `There are ${a} boys and ${b} girls in class. How many students total?`,
                answer: a+b, difficulty: 2
            };
        },
        () => {
            const total = Math.floor(Math.random()*4)+14; const gave = Math.floor(Math.random()*5)+5;
            return {
                question: currentLang === 'he'
                    ? `לנועה היו ${total} ₪. היא נתנה ${gave} ₪ לאחיה. כמה נשאר לה?`
                    : `Noa had ${total}₪. She gave ${gave}₪ to her brother. How much does she have left?`,
                answer: total-gave, difficulty: 2
            };
        },
        () => {
            const a = Math.floor(Math.random()*4)+8; const b = Math.floor(Math.random()*4)+6;
            return {
                question: currentLang === 'he'
                    ? `בספריה יש ${a} ספרי ילדים ו-${b} ספרי מדע. כמה ספרים בסך הכל?`
                    : `The library has ${a} children books and ${b} science books. How many books total?`,
                answer: a+b, difficulty: 2
            };
        },
        // Hard (7-9)
        () => {
            const had = Math.floor(Math.random()*4)+10; const found = Math.floor(Math.random()*4)+3; const lost = Math.floor(Math.random()*4)+2;
            return {
                question: currentLang === 'he'
                    ? `לעמי היו ${had} כדורים. הוא מצא עוד ${found} ואיבד ${lost}. כמה יש לו עכשיו?`
                    : `Ami had ${had} balls. Found ${found} more and lost ${lost}. How many now?`,
                answer: had+found-lost, difficulty: 3
            };
        },
        () => {
            const total = Math.floor(Math.random()*3)+17; const b = Math.floor(Math.random()*5)+7;
            return {
                question: currentLang === 'he'
                    ? `בחצר יש ${total} ילדים. ${b} מהם יצאו הביתה. כמה נשארו?`
                    : `There are ${total} children in the yard. ${b} went home. How many remain?`,
                answer: total-b, difficulty: 3
            };
        },
        () => {
            const a = Math.floor(Math.random()*4)+8; const b = Math.floor(Math.random()*4)+8;
            return {
                question: currentLang === 'he'
                    ? `בקופסה יש ${a} עפרונות אדומים ו-${b} כחולים. כמה עפרונות בסך הכל?`
                    : `The box has ${a} red pencils and ${b} blue. How many pencils total?`,
                answer: a+b, difficulty: 3
            };
        }
    ],
    // Category 9: Final Challenge (Mixed)
    9: [
        // Easy
        () => { const a = Math.floor(Math.random()*5)+1; const b = Math.floor(Math.random()*4)+1; return { question: `${a} + ${b}`, answer: a+b, difficulty: 1 }; },
        () => { const a = Math.floor(Math.random()*8)+2; const b = Math.floor(Math.random()*a)+1; return { question: `${a} - ${b}`, answer: a-b, difficulty: 1 }; },
        () => { const a = 10; const b = Math.floor(Math.random()*5)+1; return { question: `${a} - ${b}`, answer: a-b, difficulty: 1 }; },
        // Medium
        () => { const a = Math.floor(Math.random()*10)+5; const b = Math.floor(Math.random()*5)+1; return { question: `${a} + ${b}`, answer: a+b, difficulty: 2 }; },
        () => { const a = Math.floor(Math.random()*15)+5; const b = Math.floor(Math.random()*5)+1; return { question: `${a} - ${b}`, answer: a-b, difficulty: 2 }; },
        () => { const seq = [2, 4, 6, 8]; return { question: `2, 4, 6, 8, ?`, answer: 10, difficulty: 2 }; },
        () => { const a = Math.floor(Math.random()*10)+10; const b = 20-a; return { question: `${a} + ? = 20`, answer: b, difficulty: 2 }; },
        // Hard
        () => { const a = Math.floor(Math.random()*20)+10; const b = Math.floor(Math.random()*10)+5; return { question: `${a} + ${b}`, answer: a+b, difficulty: 3 }; },
        () => { const a = 20; const b = Math.floor(Math.random()*15)+1; return { question: `${a} - ${b}`, answer: a-b, difficulty: 3 }; },
        () => { const a = Math.floor(Math.random()*10)+10; const b = Math.floor(Math.random()*10)+1; return { question: `${a} - ${b}`, answer: a-b, difficulty: 3 }; }
    ]
};

function getTimeThresholds_g1(difficulty, categoryId) {
    // Category 8 (word problems) gets extra time for reading
    if (categoryId === 8) {
        const thresholds = {
            1: { excellent: 20, good: 40 },
            2: { excellent: 30, good: 55 },
            3: { excellent: 45, good: 75 },
        };
        return thresholds[difficulty];
    }
    const thresholds = {
        1: { excellent: 5,  good: 12 },
        2: { excellent: 12, good: 25 },
        3: { excellent: 25, good: 45 },
    };
    return thresholds[difficulty];
}
