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

    // Category 2: Addition up to 20
    2: [
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

    // Category 3: Subtraction up to 20
    3: [
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

    // Category 4: Skip counting
    4: [
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

    // Category 5: Missing addend
    5: [
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

    // Category 6: Comparing numbers
    6: [
        // Easy (0-2)
        () => {
            const b = Math.floor(Math.random()*4)+1; const diff = Math.floor(Math.random()*3)+1; const a = b+diff;
            return {
                question: currentLang === 'he'
                    ? `לדן יש ${a} תפוחים ולשרה יש ${b}. כמה יותר לדן?`
                    : `Dan has ${a} apples and Sara has ${b}. How many more does Dan have?`,
                answer: diff, difficulty: 1
            };
        },
        () => {
            const a = Math.floor(Math.random()*4)+3; const b = Math.floor(Math.random()*3)+1;
            return {
                question: currentLang === 'he'
                    ? `כמה יותר גדול ${a} מ-${b}?`
                    : `How much bigger is ${a} than ${b}?`,
                answer: a-b, difficulty: 1
            };
        },
        () => {
            const b = Math.floor(Math.random()*4)+2; const diff = Math.floor(Math.random()*3)+1; const a = b+diff;
            return {
                question: currentLang === 'he'
                    ? `יש ${a} ילדים ו-${b} ילדות. כמה יותר ילדים?`
                    : `There are ${a} boys and ${b} girls. How many more boys?`,
                answer: diff, difficulty: 1
            };
        },
        // Medium (3-6)
        () => {
            const b = Math.floor(Math.random()*5)+3; const diff = Math.floor(Math.random()*4)+2; const a = b+diff;
            return {
                question: currentLang === 'he'
                    ? `כמה יותר גדול ${a} מ-${b}?`
                    : `How much bigger is ${a} than ${b}?`,
                answer: diff, difficulty: 2
            };
        },
        () => {
            const a = Math.floor(Math.random()*5)+8; const b = Math.floor(Math.random()*5)+3;
            return {
                question: currentLang === 'he'
                    ? `יש ${a} מדבקות כחולות ו-${b} אדומות. כמה מדבקות כחולות יותר?`
                    : `There are ${a} blue stickers and ${b} red. How many more blue?`,
                answer: a-b, difficulty: 2
            };
        },
        () => {
            const b = Math.floor(Math.random()*4)+4; const diff = Math.floor(Math.random()*4)+3; const a = b+diff;
            return {
                question: currentLang === 'he'
                    ? `לנועה יש ${a} עפרונות ולגל יש ${b}. כמה עפרונות חסרים לגל?`
                    : `Noa has ${a} pencils and Gal has ${b}. How many more does Gal need?`,
                answer: diff, difficulty: 2
            };
        },
        () => {
            const a = Math.floor(Math.random()*5)+10; const b = Math.floor(Math.random()*5)+4;
            return {
                question: currentLang === 'he'
                    ? `כמה יותר גדול ${a} מ-${b}?`
                    : `How much bigger is ${a} than ${b}?`,
                answer: a-b, difficulty: 2
            };
        },
        // Hard (7-9): up to 20
        () => {
            const b = Math.floor(Math.random()*6)+6; const diff = Math.floor(Math.random()*5)+4; const a = b+diff;
            return {
                question: currentLang === 'he'
                    ? `לכיתה א יש ${a} תלמידים ולכיתה ב יש ${b}. כמה תלמידים יותר בכיתה א?`
                    : `Class A has ${a} students and Class B has ${b}. How many more in Class A?`,
                answer: diff, difficulty: 3
            };
        },
        () => {
            const a = Math.floor(Math.random()*5)+13; const b = Math.floor(Math.random()*6)+5;
            return {
                question: currentLang === 'he'
                    ? `כמה יותר גדול ${a} מ-${b}?`
                    : `How much bigger is ${a} than ${b}?`,
                answer: a-b, difficulty: 3
            };
        },
        () => {
            const b = Math.floor(Math.random()*6)+7; const diff = Math.floor(Math.random()*5)+5; const a = b+diff;
            return {
                question: currentLang === 'he'
                    ? `לספריה יש ${a} ספרים. הוחזרו ${b}. כמה עוד צריך להחזיר?`
                    : `Library has ${a} books. ${b} returned. How many more to return?`,
                answer: diff, difficulty: 3
            };
        }
    ],

    // Category 7: Number sequences
    7: [
        // Easy (0-2): +2 patterns
        () => {
            const start = Math.floor(Math.random()*5)*2+2;
            return {
                question: currentLang === 'he'
                    ? `${start}, ${start+2}, ${start+4}, ?`
                    : `${start}, ${start+2}, ${start+4}, ?`,
                answer: start+6, difficulty: 1
            };
        },
        () => {
            const start = Math.floor(Math.random()*4)*2+1;
            return {
                question: currentLang === 'he'
                    ? `${start}, ${start+2}, ${start+4}, ${start+6}, ?`
                    : `${start}, ${start+2}, ${start+4}, ${start+6}, ?`,
                answer: start+8, difficulty: 1
            };
        },
        () => {
            return {
                question: currentLang === 'he' ? `1, 2, 3, 4, ?` : `1, 2, 3, 4, ?`,
                answer: 5, difficulty: 1
            };
        },
        // Medium (3-6): +3 or +5 patterns
        () => {
            const start = Math.floor(Math.random()*4)+1;
            return {
                question: currentLang === 'he'
                    ? `${start}, ${start+3}, ${start+6}, ?`
                    : `${start}, ${start+3}, ${start+6}, ?`,
                answer: start+9, difficulty: 2
            };
        },
        () => {
            const start = Math.floor(Math.random()*4)+2;
            return {
                question: currentLang === 'he'
                    ? `${start}, ${start+3}, ${start+6}, ${start+9}, ?`
                    : `${start}, ${start+3}, ${start+6}, ${start+9}, ?`,
                answer: start+12, difficulty: 2
            };
        },
        () => {
            const start = Math.floor(Math.random()*3)*5+5;
            return {
                question: currentLang === 'he'
                    ? `${start}, ${start+5}, ${start+10}, ?`
                    : `${start}, ${start+5}, ${start+10}, ?`,
                answer: start+15, difficulty: 2
            };
        },
        () => {
            const start = Math.floor(Math.random()*4)+1;
            return {
                question: currentLang === 'he'
                    ? `${start}, ${start+4}, ${start+8}, ?`
                    : `${start}, ${start+4}, ${start+8}, ?`,
                answer: start+12, difficulty: 2
            };
        },
        // Hard (7-9): decreasing or mixed
        () => {
            const start = Math.floor(Math.random()*5)+16;
            return {
                question: currentLang === 'he'
                    ? `${start}, ${start-2}, ${start-4}, ${start-6}, ?`
                    : `${start}, ${start-2}, ${start-4}, ${start-6}, ?`,
                answer: start-8, difficulty: 3
            };
        },
        () => {
            const start = Math.floor(Math.random()*5)+15;
            return {
                question: currentLang === 'he'
                    ? `${start}, ${start-3}, ${start-6}, ?`
                    : `${start}, ${start-3}, ${start-6}, ?`,
                answer: start-9, difficulty: 3
            };
        },
        () => {
            const start = Math.floor(Math.random()*4)+2;
            return {
                question: currentLang === 'he'
                    ? `${start}, ${start+2}, ?, ${start+6}, ${start+8}`
                    : `${start}, ${start+2}, ?, ${start+6}, ${start+8}`,
                answer: start+4, difficulty: 3
            };
        }
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
                    ? `${a} ציפורים יושבות על עץ. הגיעו עוד ${b}. כמה ציפורים יש?`
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
    ]
};

function getTimeThresholds_g1(difficulty) {
    const thresholds = {
        1: { excellent: 5,  good: 12 },
        2: { excellent: 12, good: 25 },
        3: { excellent: 25, good: 45 },
    };
    return thresholds[difficulty];
}
