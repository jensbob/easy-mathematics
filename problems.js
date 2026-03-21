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
            const b = Math.floor(Math.random() * Math.min(30, 100 - a - 10)) + 10;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 2 };
        },
        () => {
            const a = Math.floor(Math.random() * 30) + 40;
            const b = Math.floor(Math.random() * (100 - a - 10)) + 10;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 2 };
        },
        () => {
            const a = Math.floor(Math.random() * 30) + 45;
            const b = Math.floor(Math.random() * (100 - a - 15)) + 15;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 2 };
        },
        // Hard (8-10)
        () => {
            const a = Math.floor(Math.random() * 30) + 50;
            const b = Math.floor(Math.random() * (100 - a - 15)) + 15;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 3 };
        },
        () => {
            const a = Math.floor(Math.random() * 25) + 55;
            const b = Math.floor(Math.random() * (100 - a - 15)) + 15;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 3 };
        },
        () => {
            const a = Math.floor(Math.random() * 25) + 55;
            const b = Math.floor(Math.random() * (100 - a - 20)) + 20;
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
            const b = Math.floor(Math.random() * (a - 45)) + 45;
            return { question: `${a} - ${b}`, answer: a - b, difficulty: 3 };
        }
    ],
    
    // Category 3: Multiplication up to 12
    3: [
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
    
    // Category 8: Addition up to 9999 (sums always ≤ 9999)
    8: [
        // Easy (1-3)
        () => {
            const a = Math.floor(Math.random() * 900) + 100;
            const b = Math.floor(Math.random() * 900) + 100;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 1 };
        },
        () => {
            const a = Math.floor(Math.random() * 1500) + 500;
            const b = Math.floor(Math.random() * 500) + 100;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 1 };
        },
        () => {
            const a = Math.floor(Math.random() * 2000) + 1000;
            const b = Math.floor(Math.random() * Math.min(1000, 9999 - a)) + 500;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 1 };
        },
        // Medium (4-7)
        () => {
            const a = Math.floor(Math.random() * 3000) + 2000;
            const b = Math.floor(Math.random() * Math.min(2000, 9999 - a - 500)) + 500;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 2 };
        },
        () => {
            const a = Math.floor(Math.random() * 2000) + 3000;
            const b = Math.floor(Math.random() * Math.min(2000, 9999 - a - 500)) + 500;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 2 };
        },
        () => {
            const a = Math.floor(Math.random() * 2000) + 4000;
            const b = Math.floor(Math.random() * Math.min(2000, 9999 - a - 500)) + 500;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 2 };
        },
        () => {
            const a = Math.floor(Math.random() * 1500) + 5000;
            const b = Math.floor(Math.random() * Math.min(1500, 9999 - a - 500)) + 500;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 2 };
        },
        // Hard (8-10)
        () => {
            const a = Math.floor(Math.random() * 2000) + 4000;
            const b = Math.floor(Math.random() * Math.min(2000, 9999 - a - 1000)) + 1000;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 3 };
        },
        () => {
            const a = Math.floor(Math.random() * 1500) + 5000;
            const b = Math.floor(Math.random() * Math.min(2000, 9999 - a - 1000)) + 1000;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 3 };
        },
        () => {
            const a = Math.floor(Math.random() * 1000) + 5500;
            const b = Math.floor(Math.random() * Math.min(2000, 9999 - a - 1000)) + 1000;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 3 };
        }
    ],
    
    // Category 5: Division (multiplication table up to 10)
    5: [
        // Easy (1-3)
        () => {
            const b = Math.floor(Math.random() * 4) + 2; // 2-5
            const answer = Math.floor(Math.random() * 4) + 2; // 2-5
            const a = b * answer;
            return { question: `${a} ÷ ${b}`, answer: answer, difficulty: 1 };
        },
        () => {
            const b = Math.floor(Math.random() * 4) + 2; // 2-5
            const answer = Math.floor(Math.random() * 5) + 3; // 3-7
            const a = b * answer;
            return { question: `${a} ÷ ${b}`, answer: answer, difficulty: 1 };
        },
        () => {
            const b = Math.floor(Math.random() * 5) + 3; // 3-7
            const answer = Math.floor(Math.random() * 5) + 3; // 3-7
            const a = b * answer;
            return { question: `${a} ÷ ${b}`, answer: answer, difficulty: 1 };
        },
        // Medium (4-7)
        () => {
            const b = Math.floor(Math.random() * 4) + 4; // 4-7
            const answer = Math.floor(Math.random() * 5) + 4; // 4-8
            const a = b * answer;
            return { question: `${a} ÷ ${b}`, answer: answer, difficulty: 2 };
        },
        () => {
            const b = Math.floor(Math.random() * 4) + 5; // 5-8
            const answer = Math.floor(Math.random() * 4) + 5; // 5-8
            const a = b * answer;
            return { question: `${a} ÷ ${b}`, answer: answer, difficulty: 2 };
        },
        () => {
            const b = Math.floor(Math.random() * 3) + 6; // 6-8
            const answer = Math.floor(Math.random() * 5) + 5; // 5-9
            const a = b * answer;
            return { question: `${a} ÷ ${b}`, answer: answer, difficulty: 2 };
        },
        () => {
            const b = Math.floor(Math.random() * 4) + 6; // 6-9
            const answer = Math.floor(Math.random() * 5) + 6; // 6-10
            const a = b * answer;
            return { question: `${a} ÷ ${b}`, answer: answer, difficulty: 2 };
        },
        // Hard (8-10)
        () => {
            const b = Math.floor(Math.random() * 3) + 7; // 7-9
            const answer = Math.floor(Math.random() * 4) + 7; // 7-10
            const a = b * answer;
            return { question: `${a} ÷ ${b}`, answer: answer, difficulty: 3 };
        },
        () => {
            const b = Math.floor(Math.random() * 3) + 8; // 8-10
            const answer = Math.floor(Math.random() * 3) + 8; // 8-10
            const a = b * answer;
            return { question: `${a} ÷ ${b}`, answer: answer, difficulty: 3 };
        },
        () => {
            const b = 10;
            const answer = Math.floor(Math.random() * 10) + 1; // 1-10
            const a = b * answer;
            return { question: `${a} ÷ ${b}`, answer: answer, difficulty: 3 };
        }
    ],
    
    // Category 7: Multiplication up to 20
    7: [
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
    ],
    
    // Category 6: Word Problems (בעיות מילוליות)
    6: [
        // Easy (1-3)
        () => {
            const initial = Math.floor(Math.random() * 10) + 5;
            const gained = Math.floor(Math.random() * 8) + 2;
            const answer = initial + gained;
            return { 
                question: currentLang === 'he' 
                    ? `לדני יש ${initial} מדבקות. הוא קיבל עוד ${gained} מדבקות. כמה מדבקות יש לו?`
                    : `Danny has ${initial} stickers. He got ${gained} more. How many stickers does he have?`,
                answer: answer,
                difficulty: 1 
            };
        },
        () => {
            const total = Math.floor(Math.random() * 15) + 10;
            const eaten = Math.floor(Math.random() * 8) + 2;
            const answer = total - eaten;
            return { 
                question: currentLang === 'he' 
                    ? `לשרה היו ${total} תותים. היא אכלה ${eaten} תותים. כמה נשארו?`
                    : `Sarah had ${total} strawberries. She ate ${eaten}. How many are left?`,
                answer: answer,
                difficulty: 1 
            };
        },
        () => {
            const rows = Math.floor(Math.random() * 4) + 3;
            const perRow = Math.floor(Math.random() * 5) + 3;
            const answer = rows * perRow;
            return { 
                question: currentLang === 'he' 
                    ? `בכיתה יש ${rows} שורות של כסאות. בכל שורה ${perRow} כסאות. כמה כסאות בסך הכל?`
                    : `The class has ${rows} rows of chairs. Each row has ${perRow} chairs. How many total?`,
                answer: answer,
                difficulty: 1 
            };
        },
        // Medium (4-7)
        () => {
            const had = Math.floor(Math.random() * 30) + 20;
            const spent = Math.floor(Math.random() * 15) + 5;
            const received = Math.floor(Math.random() * 20) + 10;
            const answer = had - spent + received;
            return { 
                question: currentLang === 'he' 
                    ? `לאבי היו ${had}₪. הוא הוציא ${spent}₪ על חטיף וקיבל ${received}₪ ממבוגר. כמה כסף יש לו עכשיו?`
                    : `Avi had ${had}₪. He spent ${spent}₪ on a snack and got ${received}₪. How much does he have now?`,
                answer: answer,
                difficulty: 2 
            };
        },
        () => {
            const bags = Math.floor(Math.random() * 5) + 4;
            const perBag = Math.floor(Math.random() * 8) + 6;
            const answer = bags * perBag;
            return { 
                question: currentLang === 'he' 
                    ? `לאמא יש ${bags} שקיות של תפוזים. בכל שקית ${perBag} תפוזים. כמה תפוזים בסך הכל?`
                    : `Mom has ${bags} bags of oranges. Each bag has ${perBag} oranges. How many total?`,
                answer: answer,
                difficulty: 2 
            };
        },
        () => {
            const total = Math.floor(Math.random() * 40) + 50;
            const boys = Math.floor(Math.random() * 20) + 20;
            const answer = total - boys;
            return { 
                question: currentLang === 'he' 
                    ? `בבית הספר יש ${total} תלמידים. ${boys} הם בנים. כמה בנות יש?`
                    : `The school has ${total} students. ${boys} are boys. How many girls?`,
                answer: answer,
                difficulty: 2 
            };
        },
        () => {
            const price = Math.floor(Math.random() * 8) + 5;
            const items = Math.floor(Math.random() * 5) + 4;
            const total = price * items;
            const paid = Math.ceil(total / 10) * 10; // round up to nearest 10
            const answer = paid - total;
            return {
                question: currentLang === 'he'
                    ? `פלאפל עולה ${price}₪. נועה קנתה ${items} פלאפלים ושילמה ${paid}₪. כמה עודף קיבלה?`
                    : `A falafel costs ${price}₪. Noa bought ${items} and paid ${paid}₪. How much change?`,
                answer: answer,
                difficulty: 2
            };
        },
        // Hard (8-10)
        () => {
            const students = Math.floor(Math.random() * 4) + 6; // 6-9
            const perStudent = Math.floor(Math.random() * 5) + 4; // 4-8
            const pencils = students * perStudent;
            return {
                question: currentLang === 'he'
                    ? `למורה יש ${pencils} עפרונות לחלק ל-${students} תלמידים באופן שווה. כמה כל אחד מקבל?`
                    : `Teacher has ${pencils} pencils to divide equally among ${students} students. How many each?`,
                answer: perStudent,
                difficulty: 3
            };
        },
        () => {
            const morning = Math.floor(Math.random() * 30) + 40;
            const afternoon = Math.floor(Math.random() * 25) + 35;
            const sold = Math.floor(Math.random() * 30) + 40;
            const answer = morning + afternoon - sold;
            return { 
                question: currentLang === 'he' 
                    ? `בחנות היו ${morning} בקבוקי מים בבוקר. הגיעו עוד ${afternoon} אחה"צ. נמכרו ${sold}. כמה נשארו?`
                    : `Store had ${morning} water bottles in morning. Got ${afternoon} more. Sold ${sold}. How many left?`,
                answer: answer,
                difficulty: 3 
            };
        },
        () => {
            const weeks = Math.floor(Math.random() * 4) + 4; // 4-7
            const perWeek = Math.floor(Math.random() * 8) + 8; // 8-15
            const saved = weeks * perWeek;
            return {
                question: currentLang === 'he'
                    ? `יעל חסכה ${saved}₪ במשך ${weeks} שבועות. אם היא חסכה סכום שווה כל שבוע, כמה חסכה בשבוע?`
                    : `Yael saved ${saved}₪ over ${weeks} weeks. If she saved the same each week, how much per week?`,
                answer: perWeek,
                difficulty: 3
            };
        }
    ],
    
    // Category 2: Basic Fractions (שברים פשוטים)
    2: [
        // Easy (1-3): half of small even numbers
        () => {
            const n = (Math.floor(Math.random() * 5) + 1) * 2;
            return {
                question: currentLang === 'he' ? `מה הוא ½ של ${n}?` : `What is ½ of ${n}?`,
                answer: n / 2,
                difficulty: 1
            };
        },
        () => {
            const n = (Math.floor(Math.random() * 5) + 2) * 2;
            return {
                question: currentLang === 'he' ? `מה הוא ½ של ${n}?` : `What is ½ of ${n}?`,
                answer: n / 2,
                difficulty: 1
            };
        },
        () => {
            const n = (Math.floor(Math.random() * 4) + 1) * 4;
            return {
                question: currentLang === 'he' ? `מה הוא ¼ של ${n}?` : `What is ¼ of ${n}?`,
                answer: n / 4,
                difficulty: 1
            };
        },
        // Medium (4-7): quarter and third of various numbers
        () => {
            const n = (Math.floor(Math.random() * 5) + 3) * 4;
            return {
                question: currentLang === 'he' ? `מה הוא ¼ של ${n}?` : `What is ¼ of ${n}?`,
                answer: n / 4,
                difficulty: 2
            };
        },
        () => {
            const n = (Math.floor(Math.random() * 5) + 2) * 3;
            return {
                question: currentLang === 'he' ? `מה הוא ⅓ של ${n}?` : `What is ⅓ of ${n}?`,
                answer: n / 3,
                difficulty: 2
            };
        },
        () => {
            const n = (Math.floor(Math.random() * 6) + 5) * 2;
            return {
                question: currentLang === 'he' ? `מה הוא ½ של ${n}?` : `What is ½ of ${n}?`,
                answer: n / 2,
                difficulty: 2
            };
        },
        () => {
            const n = (Math.floor(Math.random() * 4) + 4) * 3;
            return {
                question: currentLang === 'he' ? `מה הוא ⅓ של ${n}?` : `What is ⅓ of ${n}?`,
                answer: n / 3,
                difficulty: 2
            };
        },
        // Hard (8-10): larger numbers and mixed fractions
        () => {
            const n = (Math.floor(Math.random() * 5) + 8) * 4;
            return {
                question: currentLang === 'he' ? `מה הוא ¼ של ${n}?` : `What is ¼ of ${n}?`,
                answer: n / 4,
                difficulty: 3
            };
        },
        () => {
            const n = (Math.floor(Math.random() * 5) + 8) * 3;
            return {
                question: currentLang === 'he' ? `מה הוא ⅓ של ${n}?` : `What is ⅓ of ${n}?`,
                answer: n / 3,
                difficulty: 3
            };
        },
        () => {
            const n = (Math.floor(Math.random() * 5) + 10) * 2;
            return {
                question: currentLang === 'he' ? `מה הוא ½ של ${n}?` : `What is ½ of ${n}?`,
                answer: n / 2,
                difficulty: 3
            };
        }
    ],
    
    // Category 4: Time & Clock (שעון וזמן)
    4: [
        // Easy (1-3)
        () => {
            const hours = Math.floor(Math.random() * 12) + 1;
            const answer = hours;
            return { 
                question: currentLang === 'he' 
                    ? `השעה ${hours}:00. מה השעה? (רק שעות)`
                    : `The time is ${hours}:00. What hour is it?`,
                answer: answer,
                difficulty: 1 
            };
        },
        () => {
            const hours = Math.floor(Math.random() * 12) + 1;
            const answer = 30;
            return { 
                question: currentLang === 'he' 
                    ? `השעה ${hours}:30. כמה דקות?`
                    : `The time is ${hours}:30. How many minutes?`,
                answer: answer,
                difficulty: 1 
            };
        },
        () => {
            const hours = Math.floor(Math.random() * 8) + 1;
            const add = Math.floor(Math.random() * 3) + 1;
            const answer = hours + add;
            return { 
                question: currentLang === 'he' 
                    ? `השעה ${hours}:00. כמה השעה אחרי ${add} שעות?`
                    : `It's ${hours}:00. What time is it after ${add} hours?`,
                answer: answer,
                difficulty: 1 
            };
        },
        // Medium (4-7)
        () => {
            const start = Math.floor(Math.random() * 40) + 10;
            const duration = Math.floor(Math.random() * 20) + 10;
            const answer = duration;
            return { 
                question: currentLang === 'he' 
                    ? `השיעור התחיל ב-8:${start < 10 ? '0' + start : start} ונגמר ב-8:${start + duration}. כמה דקות נמשך?`
                    : `Class started at 8:${start < 10 ? '0' + start : start} and ended at 8:${start + duration}. How many minutes?`,
                answer: answer,
                difficulty: 2 
            };
        },
        () => {
            const minutes = Math.floor(Math.random() * 4) * 15 + 15;
            const answer = minutes;
            return { 
                question: currentLang === 'he' 
                    ? `השעה 3:00. המחוגים מראים רבע/חצי/שלושת רבעי שעה. כמה דקות עברו מ-3:00 עד 3:${minutes}?`
                    : `It's 3:00. How many minutes from 3:00 to 3:${minutes}?`,
                answer: answer,
                difficulty: 2 
            };
        },
        () => {
            const hours1 = Math.floor(Math.random() * 4) + 8;
            const hours2 = hours1 + Math.floor(Math.random() * 3) + 2;
            const answer = hours2 - hours1;
            return { 
                question: currentLang === 'he' 
                    ? `כמה שעות בין ${hours1}:00 ל-${hours2}:00?`
                    : `How many hours between ${hours1}:00 and ${hours2}:00?`,
                answer: answer,
                difficulty: 2 
            };
        },
        () => {
            const startMin = Math.floor(Math.random() * 30) + 15;
            const endMin = startMin + Math.floor(Math.random() * 20) + 15;
            const answer = endMin - startMin;
            return { 
                question: currentLang === 'he' 
                    ? `האוטובוס יצא ב-7:${startMin} והגיע ב-7:${endMin}. כמה דקות הנסיעה?`
                    : `Bus left at 7:${startMin} and arrived at 7:${endMin}. How many minutes?`,
                answer: answer,
                difficulty: 2 
            };
        },
        // Hard (8-10)
        () => {
            const startHour = Math.floor(Math.random() * 3) + 9;
            const startMin = Math.floor(Math.random() * 40) + 10;
            const durationMin = Math.floor(Math.random() * 50) + 40;
            const totalMin = startMin + durationMin;
            const endHour = startHour + Math.floor(totalMin / 60);
            const endMin = totalMin % 60;
            const answer = endMin;
            return { 
                question: currentLang === 'he' 
                    ? `הסרט התחיל ב-${startHour}:${startMin} ונמשך ${durationMin} דקות. באיזו דקה הוא נגמר? (רק דקות)`
                    : `Movie started at ${startHour}:${startMin}, lasted ${durationMin} min. What minute does it end? (minutes only)`,
                answer: answer,
                difficulty: 3 
            };
        },
        () => {
            const hour1 = Math.floor(Math.random() * 3) + 2;
            const min1 = Math.floor(Math.random() * 40) + 15;
            const hour2 = hour1 + Math.floor(Math.random() * 2) + 1;
            const min2 = Math.floor(Math.random() * 40) + 10;
            const answer = (hour2 - hour1) * 60 + (min2 - min1);
            return { 
                question: currentLang === 'he' 
                    ? `כמה דקות בין ${hour1}:${min1} ל-${hour2}:${min2}?`
                    : `How many minutes between ${hour1}:${min1} and ${hour2}:${min2}?`,
                answer: answer,
                difficulty: 3 
            };
        },
        () => {
            const totalMin = Math.floor(Math.random() * 60) + 90;
            const hours = Math.floor(totalMin / 60);
            const mins = totalMin % 60;
            const answer = mins;
            return { 
                question: currentLang === 'he' 
                    ? `${totalMin} דקות = ${hours} שעות ו-? דקות`
                    : `${totalMin} minutes = ${hours} hours and ? minutes`,
                answer: answer,
                difficulty: 3 
            };
        }
    ],
    // Category 9: Final Challenge (Mixed Review)
    9: [
        // Easy
        () => {
            const a = Math.floor(Math.random() * 50) + 10;
            const b = Math.floor(Math.random() * 50) + 10;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 1 };
        },
        () => {
            const a = Math.floor(Math.random() * 80) + 20;
            const b = Math.floor(Math.random() * 20) + 1;
            return { question: `${a} - ${b}`, answer: a - b, difficulty: 1 };
        },
        () => {
            const a = Math.floor(Math.random() * 10) + 1;
            const b = Math.floor(Math.random() * 10) + 1;
            return { question: `${a} × ${b}`, answer: a * b, difficulty: 1 };
        },
        // Medium
        () => {
            const a = Math.floor(Math.random() * 100) + 50;
            const b = Math.floor(Math.random() * 50) + 10;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 2 };
        },
        () => {
            const a = Math.floor(Math.random() * 100) + 50;
            const b = Math.floor(Math.random() * 50) + 10;
            return { question: `${a} - ${b}`, answer: a - b, difficulty: 2 };
        },
        () => {
            const a = Math.floor(Math.random() * 12) + 1;
            const b = Math.floor(Math.random() * 10) + 1;
            return { question: `${a} × ${b}`, answer: a * b, difficulty: 2 };
        },
        () => {
            const b = Math.floor(Math.random() * 9) + 2;
            const a = b * (Math.floor(Math.random() * 10) + 1);
            return { question: `${a} : ${b}`, answer: a / b, difficulty: 2 };
        },
        // Hard
        () => {
            const a = Math.floor(Math.random() * 500) + 100;
            const b = Math.floor(Math.random() * 500) + 100;
            return { question: `${a} + ${b}`, answer: a + b, difficulty: 3 };
        },
        () => {
            const a = Math.floor(Math.random() * 15) + 5;
            const b = Math.floor(Math.random() * 12) + 2;
            return { question: `${a} × ${b}`, answer: a * b, difficulty: 3 };
        },
        () => {
            const a = Math.floor(Math.random() * 900) + 100;
            const b = Math.floor(Math.random() * 100) + 10;
            return { question: `${a} - ${b}`, answer: a - b, difficulty: 3 };
        }
    ]
};

// Get coin rewards based on difficulty
function getDifficulty(problemIndex) {
    if (problemIndex <= 2) return 1;
    if (problemIndex <= 6) return 2;
    return 3;
}

function getCoinReward(difficulty, stars) {
    const baseRewards = {
        1: { 3: 7,  2: 4, 1: 2 },   // Easy:   3×7  = 21
        2: { 3: 10, 2: 6, 1: 3 },   // Medium: 4×10 = 40
        3: { 3: 13, 2: 8, 1: 4 },   // Hard:   3×13 = 39  → total 100 per category
    };
    return baseRewards[difficulty][stars] || 0;
}

// Time thresholds for star ratings (in seconds) based on difficulty
function getTimeThresholds(difficulty, categoryId) {
    // Category 8 (4-digit addition) gets extra time for column arithmetic
    if (categoryId === 8) {
        const thresholds = {
            1: { excellent: 20, good: 40  },
            2: { excellent: 45, good: 75  },
            3: { excellent: 75, good: 120 },
        };
        return thresholds[difficulty];
    }
    const thresholds = {
        1: { excellent: 8,  good: 18  },  // Easy:   <8s  = 3★, <18s = 2★, else 1★
        2: { excellent: 20, good: 38  },  // Medium: <20s = 3★, <38s = 2★, else 1★
        3: { excellent: 40, good: 70  },  // Hard:   <40s = 3★, <70s = 2★, else 1★
    };
    return thresholds[difficulty];
}
