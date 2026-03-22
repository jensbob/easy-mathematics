// Grade 2 (Bet) problem generators
const problemGenerators_g2 = {

    // Category 0: Addition up to 20 (review)
    0: [
        // Easy (0-2)
        () => { const a = Math.floor(Math.random()*5)+6; const b = Math.floor(Math.random()*4)+1; return { question: `${a} + ${b}`, answer: a+b, difficulty: 1 }; },
        () => { const a = Math.floor(Math.random()*5)+8; const b = Math.floor(Math.random()*4)+2; return { question: `${a} + ${b}`, answer: a+b, difficulty: 1 }; },
        () => { const a = Math.floor(Math.random()*5)+5; const b = Math.floor(Math.random()*5)+5; return { question: `${a} + ${b}`, answer: a+b, difficulty: 1 }; },
        // Medium (3-6)
        () => { const a = Math.floor(Math.random()*4)+9; const b = Math.floor(Math.random()*5)+5; return { question: `${a} + ${b}`, answer: a+b, difficulty: 2 }; },
        () => { const a = Math.floor(Math.random()*4)+10; const b = Math.floor(Math.random()*5)+4; return { question: `${a} + ${b}`, answer: a+b, difficulty: 2 }; },
        () => { const a = Math.floor(Math.random()*5)+10; const b = Math.floor(Math.random()*5)+5; return { question: `${a} + ${b}`, answer: a+b, difficulty: 2 }; },
        () => { const a = Math.floor(Math.random()*3)+13; const b = Math.floor(Math.random()*4)+4; return { question: `${a} + ${b}`, answer: a+b, difficulty: 2 }; },
        // Hard (7-9)
        () => { const a = Math.floor(Math.random()*4)+13; const b = Math.floor(Math.random()*4)+4; return { question: `${a} + ${b}`, answer: a+b, difficulty: 3 }; },
        () => { const b = Math.floor(Math.random()*9)+1; const a = 20-b; return { question: `${a} + ${b}`, answer: 20, difficulty: 3 }; },
        () => { const a = Math.floor(Math.random()*3)+15; const b = Math.floor(Math.random()*3)+4; return { question: `${a} + ${b}`, answer: a+b, difficulty: 3 }; }
    ],

    // Category 1: Subtraction up to 20 (review)
    1: [
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

    // Category 2: Addition up to 100
    2: [
        // Easy (0-2)
        () => { const a = Math.floor(Math.random()*10)+1; const b = Math.floor(Math.random()*10)+1; return { question: `${a} + ${b}`, answer: a+b, difficulty: 1 }; },
        () => { const a = Math.floor(Math.random()*20)+10; const b = Math.floor(Math.random()*10)+1; return { question: `${a} + ${b}`, answer: a+b, difficulty: 1 }; },
        () => { const a = Math.floor(Math.random()*20)+10; const b = Math.floor(Math.random()*20)+10; return { question: `${a} + ${b}`, answer: a+b, difficulty: 1 }; },
        // Medium (3-6)
        () => { const a = Math.floor(Math.random()*30)+20; const b = Math.floor(Math.random()*30)+10; return { question: `${a} + ${b}`, answer: a+b, difficulty: 2 }; },
        () => { const a = Math.floor(Math.random()*40)+20; const b = Math.floor(Math.random()*Math.min(30,100-a-10))+10; return { question: `${a} + ${b}`, answer: a+b, difficulty: 2 }; },
        () => { const a = Math.floor(Math.random()*30)+40; const b = Math.floor(Math.random()*(100-a-10))+10; return { question: `${a} + ${b}`, answer: a+b, difficulty: 2 }; },
        () => { const a = Math.floor(Math.random()*30)+45; const b = Math.floor(Math.random()*(100-a-15))+15; return { question: `${a} + ${b}`, answer: a+b, difficulty: 2 }; },
        // Hard (7-9)
        () => { const a = Math.floor(Math.random()*30)+50; const b = Math.floor(Math.random()*(100-a-15))+15; return { question: `${a} + ${b}`, answer: a+b, difficulty: 3 }; },
        () => { const a = Math.floor(Math.random()*25)+55; const b = Math.floor(Math.random()*(100-a-15))+15; return { question: `${a} + ${b}`, answer: a+b, difficulty: 3 }; },
        () => { const a = Math.floor(Math.random()*25)+55; const b = Math.floor(Math.random()*(100-a-20))+20; return { question: `${a} + ${b}`, answer: a+b, difficulty: 3 }; }
    ],

    // Category 3: Subtraction up to 100
    3: [
        // Easy (0-2)
        () => { const a = Math.floor(Math.random()*10)+10; const b = Math.floor(Math.random()*a)+1; return { question: `${a} - ${b}`, answer: a-b, difficulty: 1 }; },
        () => { const a = Math.floor(Math.random()*15)+15; const b = Math.floor(Math.random()*10)+1; return { question: `${a} - ${b}`, answer: a-b, difficulty: 1 }; },
        () => { const a = Math.floor(Math.random()*20)+20; const b = Math.floor(Math.random()*15)+5; return { question: `${a} - ${b}`, answer: a-b, difficulty: 1 }; },
        // Medium (3-6)
        () => { const a = Math.floor(Math.random()*30)+40; const b = Math.floor(Math.random()*20)+10; return { question: `${a} - ${b}`, answer: a-b, difficulty: 2 }; },
        () => { const a = Math.floor(Math.random()*35)+50; const b = Math.floor(Math.random()*25)+15; return { question: `${a} - ${b}`, answer: a-b, difficulty: 2 }; },
        () => { const a = Math.floor(Math.random()*30)+60; const b = Math.floor(Math.random()*30)+20; return { question: `${a} - ${b}`, answer: a-b, difficulty: 2 }; },
        () => { const a = Math.floor(Math.random()*25)+70; const b = Math.floor(Math.random()*35)+25; return { question: `${a} - ${b}`, answer: a-b, difficulty: 2 }; },
        // Hard (7-9)
        () => { const a = Math.floor(Math.random()*15)+80; const b = Math.floor(Math.random()*40)+35; return { question: `${a} - ${b}`, answer: a-b, difficulty: 3 }; },
        () => { const a = Math.floor(Math.random()*10)+85; const b = Math.floor(Math.random()*45)+40; return { question: `${a} - ${b}`, answer: a-b, difficulty: 3 }; },
        () => { const a = Math.floor(Math.random()*8)+92; const b = Math.floor(Math.random()*(a-45))+45; return { question: `${a} - ${b}`, answer: a-b, difficulty: 3 }; }
    ],

    // Category 4: Place value (tens & hundreds)
    4: [
        // Easy (0-2): tens only
        () => {
            const num = Math.floor(Math.random()*90)+10;
            return {
                question: currentLang === 'he'
                    ? `מה הספרה במקום העשרות במספר ${num}?`
                    : `What digit is in the tens place of ${num}?`,
                answer: Math.floor(num/10), difficulty: 1
            };
        },
        () => {
            const num = Math.floor(Math.random()*90)+10;
            return {
                question: currentLang === 'he'
                    ? `מה הספרה במקום האחדות במספר ${num}?`
                    : `What digit is in the ones place of ${num}?`,
                answer: num%10, difficulty: 1
            };
        },
        () => {
            const tens = Math.floor(Math.random()*9)+1; const ones = Math.floor(Math.random()*10);
            return {
                question: currentLang === 'he'
                    ? `\u2067${tens} עשרות + ${ones} אחדות = ?\u2069`
                    : `${tens} tens + ${ones} ones = ?`,
                answer: tens*10+ones, difficulty: 1
            };
        },
        // Medium (3-6): hundreds
        () => {
            const num = Math.floor(Math.random()*900)+100;
            return {
                question: currentLang === 'he'
                    ? `מה הספרה במקום המאות במספר ${num}?`
                    : `What digit is in the hundreds place of ${num}?`,
                answer: Math.floor(num/100), difficulty: 2
            };
        },
        () => {
            const hundreds = Math.floor(Math.random()*5)+1; const tens = Math.floor(Math.random()*10); const ones = Math.floor(Math.random()*10);
            return {
                question: currentLang === 'he'
                    ? `\u2067${hundreds} מאות + ${tens} עשרות + ${ones} אחדות = ?\u2069`
                    : `${hundreds} hundreds + ${tens} tens + ${ones} ones = ?`,
                answer: hundreds*100+tens*10+ones, difficulty: 2
            };
        },
        () => {
            const num = Math.floor(Math.random()*900)+100;
            return {
                question: currentLang === 'he'
                    ? `מה הספרה במקום העשרות במספר ${num}?`
                    : `What digit is in the tens place of ${num}?`,
                answer: Math.floor((num%100)/10), difficulty: 2
            };
        },
        () => {
            const num1 = Math.floor(Math.random()*900)+100; const num2 = num1+Math.floor(Math.random()*50)+10;
            return {
                question: currentLang === 'he'
                    ? `איזה מספר גדול יותר: ${num1} או ${num2}?`
                    : `Which number is larger: ${num1} or ${num2}?`,
                answer: num2, difficulty: 2
            };
        },
        // Hard (7-9)
        () => {
            const hundreds = Math.floor(Math.random()*8)+1; const tens = Math.floor(Math.random()*10);
            return {
                question: currentLang === 'he'
                    ? `\u2067${hundreds} מאות + ${tens} עשרות = ?\u2069`
                    : `${hundreds} hundreds + ${tens} tens = ?`,
                answer: hundreds*100+tens*10, difficulty: 3
            };
        },
        () => {
            const num = Math.floor(Math.random()*900)+100;
            return {
                question: currentLang === 'he'
                    ? `מה הספרה במקום האחדות במספר ${num}?`
                    : `What digit is in the ones place of ${num}?`,
                answer: num%10, difficulty: 3
            };
        },
        () => {
            const num1 = Math.floor(Math.random()*500)+300; const num2 = num1+Math.floor(Math.random()*100)+50; const num3 = num1-Math.floor(Math.random()*100)-50;
            return {
                question: currentLang === 'he'
                    ? `איזה המספר הגדול ביותר: ${num1}, ${num2}, ${num3}?`
                    : `Which is the largest: ${num1}, ${num2}, ${num3}?`,
                answer: num2, difficulty: 3
            };
        }
    ],

    // Category 5: Multiplication by 2, 5, 10
    5: [
        // Easy (0-2): ×2 small
        () => { const a = Math.floor(Math.random()*5)+1; return { question: `${a} × 2`, answer: a*2, difficulty: 1 }; },
        () => { const a = Math.floor(Math.random()*5)+3; return { question: `2 × ${a}`, answer: a*2, difficulty: 1 }; },
        () => { const a = Math.floor(Math.random()*4)+5; return { question: `${a} × 2`, answer: a*2, difficulty: 1 }; },
        // Medium (3-6): ×5
        () => { const a = Math.floor(Math.random()*4)+2; return { question: `${a} × 5`, answer: a*5, difficulty: 2 }; },
        () => { const a = Math.floor(Math.random()*5)+3; return { question: `5 × ${a}`, answer: a*5, difficulty: 2 }; },
        () => { const a = Math.floor(Math.random()*4)+6; return { question: `${a} × 5`, answer: a*5, difficulty: 2 }; },
        () => { const a = Math.floor(Math.random()*5)+5; return { question: `${a} × 2`, answer: a*2, difficulty: 2 }; },
        // Hard (7-9): ×10
        () => { const a = Math.floor(Math.random()*5)+2; return { question: `${a} × 10`, answer: a*10, difficulty: 3 }; },
        () => { const a = Math.floor(Math.random()*5)+5; return { question: `10 × ${a}`, answer: a*10, difficulty: 3 }; },
        () => { const a = Math.floor(Math.random()*4)+7; return { question: `${a} × 10`, answer: a*10, difficulty: 3 }; }
    ],

    // Category 6: Halves and quarters
    6: [
        // Easy (0-2): half of small even numbers
        () => { const n = (Math.floor(Math.random()*4)+1)*2; return { question: currentLang === 'he' ? `מה המחצית של ${n}?` : `What is half of ${n}?`, answer: n/2, difficulty: 1 }; },
        () => { const n = (Math.floor(Math.random()*4)+2)*2; return { question: currentLang === 'he' ? `מה המחצית של ${n}?` : `What is half of ${n}?`, answer: n/2, difficulty: 1 }; },
        () => { const n = (Math.floor(Math.random()*3)+4)*2; return { question: currentLang === 'he' ? `מה המחצית של ${n}?` : `What is half of ${n}?`, answer: n/2, difficulty: 1 }; },
        // Medium (3-6): half of larger / quarter of small
        () => { const n = (Math.floor(Math.random()*5)+6)*2; return { question: currentLang === 'he' ? `מה המחצית של ${n}?` : `What is half of ${n}?`, answer: n/2, difficulty: 2 }; },
        () => { const n = (Math.floor(Math.random()*4)+1)*4; return { question: currentLang === 'he' ? `מה הרבע של ${n}?` : `What is a quarter of ${n}?`, answer: n/4, difficulty: 2 }; },
        () => { const n = (Math.floor(Math.random()*4)+3)*4; return { question: currentLang === 'he' ? `מה הרבע של ${n}?` : `What is a quarter of ${n}?`, answer: n/4, difficulty: 2 }; },
        () => { const n = (Math.floor(Math.random()*5)+8)*2; return { question: currentLang === 'he' ? `מה המחצית של ${n}?` : `What is half of ${n}?`, answer: n/2, difficulty: 2 }; },
        // Hard (7-9): quarter of larger numbers
        () => { const n = (Math.floor(Math.random()*5)+5)*4; return { question: currentLang === 'he' ? `מה הרבע של ${n}?` : `What is a quarter of ${n}?`, answer: n/4, difficulty: 3 }; },
        () => { const n = (Math.floor(Math.random()*5)+10)*4; return { question: currentLang === 'he' ? `מה הרבע של ${n}?` : `What is a quarter of ${n}?`, answer: n/4, difficulty: 3 }; },
        () => { const n = (Math.floor(Math.random()*5)+10)*2; return { question: currentLang === 'he' ? `מה המחצית של ${n}?` : `What is half of ${n}?`, answer: n/2, difficulty: 3 }; }
    ],

    // Category 7: Time (full, half, quarter hours)
    7: [
        // Easy (0-2): full hours
        () => {
            const h = Math.floor(Math.random()*12)+1;
            return { question: currentLang === 'he' ? `השעה ${h}:00. מה השעה? (רק שעות)` : `The time is ${h}:00. What hour is it?`, answer: h, difficulty: 1 };
        },
        () => {
            const h = Math.floor(Math.random()*8)+1; const add = Math.floor(Math.random()*3)+1;
            return { question: currentLang === 'he' ? `השעה ${h}:00. כמה השעה אחרי ${add} שעות?` : `It's ${h}:00. What time after ${add} hours?`, answer: h+add, difficulty: 1 };
        },
        () => {
            const h = Math.floor(Math.random()*10)+1;
            return { question: currentLang === 'he' ? `השעה ${h}:00. כמה דקות עברו מהשעה השלמה?` : `The time is ${h}:00. How many minutes past the hour?`, answer: 0, difficulty: 1 };
        },
        // Medium (3-6): half hours
        () => {
            const h = Math.floor(Math.random()*12)+1;
            return { question: currentLang === 'he' ? `השעה ${h}:30. כמה דקות?` : `The time is ${h}:30. How many minutes?`, answer: 30, difficulty: 2 };
        },
        () => {
            const h = Math.floor(Math.random()*10)+1;
            return { question: currentLang === 'he' ? `חצי שעה = כמה דקות?` : `Half an hour = how many minutes?`, answer: 30, difficulty: 2 };
        },
        () => {
            const h = Math.floor(Math.random()*8)+1; const add = Math.floor(Math.random()*2)+1;
            return { question: currentLang === 'he' ? `השעה ${h}:00. כמה שעות עד ${h+add+2}:00?` : `It's ${h}:00. How many hours until ${h+add+2}:00?`, answer: add+2, difficulty: 2 };
        },
        () => {
            const h1 = Math.floor(Math.random()*4)+8; const h2 = h1+Math.floor(Math.random()*3)+2;
            return { question: currentLang === 'he' ? `כמה שעות בין ${h1}:00 ל-${h2}:00?` : `How many hours between ${h1}:00 and ${h2}:00?`, answer: h2-h1, difficulty: 2 };
        },
        // Hard (7-9): quarter hours
        () => {
            const h = Math.floor(Math.random()*12)+1;
            return { question: currentLang === 'he' ? `השעה ${h}:15. כמה דקות עברו?` : `The time is ${h}:15. How many minutes have passed?`, answer: 15, difficulty: 3 };
        },
        () => {
            const h = Math.floor(Math.random()*12)+1;
            return { question: currentLang === 'he' ? `השעה ${h}:45. כמה דקות עברו?` : `The time is ${h}:45. How many minutes have passed?`, answer: 45, difficulty: 3 };
        },
        () => {
            return { question: currentLang === 'he' ? `רבע שעה = כמה דקות?` : `A quarter hour = how many minutes?`, answer: 15, difficulty: 3 };
        }
    ],

    // Category 8: Word problems up to 100
    8: [
        // Easy (0-2)
        () => {
            const a = Math.floor(Math.random()*20)+10; const b = Math.floor(Math.random()*15)+5;
            return {
                question: currentLang === 'he'
                    ? `לדני יש ${a} מדבקות. הוא קיבל עוד ${b}. כמה מדבקות יש לו?`
                    : `Danny has ${a} stickers. He got ${b} more. How many stickers does he have?`,
                answer: a+b, difficulty: 1
            };
        },
        () => {
            const total = Math.floor(Math.random()*20)+30; const eaten = Math.floor(Math.random()*15)+5;
            return {
                question: currentLang === 'he'
                    ? `לשרה היו ${total} תותים. היא אכלה ${eaten}. כמה נשארו?`
                    : `Sarah had ${total} strawberries. She ate ${eaten}. How many left?`,
                answer: total-eaten, difficulty: 1
            };
        },
        () => {
            const a = Math.floor(Math.random()*15)+15; const b = Math.floor(Math.random()*15)+10;
            return {
                question: currentLang === 'he'
                    ? `בכיתה יש ${a} בנים ו-${b} בנות. כמה תלמידים בסך הכל?`
                    : `There are ${a} boys and ${b} girls in class. How many students total?`,
                answer: a+b, difficulty: 1
            };
        },
        // Medium (3-6)
        () => {
            const had = Math.floor(Math.random()*30)+20; const spent = Math.floor(Math.random()*15)+5; const received = Math.floor(Math.random()*20)+10;
            return {
                question: currentLang === 'he'
                    ? `לאבי היו ${had}₪. הוא הוציא ${spent}₪ וקיבל ${received}₪. כמה כסף יש לו עכשיו?`
                    : `Avi had ${had}₪. He spent ${spent}₪ and got ${received}₪. How much now?`,
                answer: had-spent+received, difficulty: 2
            };
        },
        () => {
            const total = Math.floor(Math.random()*40)+50; const boys = Math.floor(Math.random()*20)+20;
            return {
                question: currentLang === 'he'
                    ? `בבית הספר יש ${total} תלמידים. ${boys} הם בנים. כמה בנות?`
                    : `The school has ${total} students. ${boys} are boys. How many girls?`,
                answer: total-boys, difficulty: 2
            };
        },
        () => {
            const price = Math.floor(Math.random()*8)+5; const items = Math.floor(Math.random()*5)+4; const total = price*items;
            return {
                question: currentLang === 'he'
                    ? `כל פריט עולה ${price}₪. קנו ${items} פריטים. כמה עלה הכל?`
                    : `Each item costs ${price}₪. Bought ${items} items. What is the total?`,
                answer: total, difficulty: 2
            };
        },
        () => {
            const morning = Math.floor(Math.random()*20)+30; const afternoon = Math.floor(Math.random()*20)+20; const sold = Math.floor(Math.random()*15)+10;
            return {
                question: currentLang === 'he'
                    ? `בחנות היו ${morning} ספרים. הגיעו עוד ${afternoon}. נמכרו ${sold}. כמה נשארו?`
                    : `Store had ${morning} books. Got ${afternoon} more. Sold ${sold}. How many left?`,
                answer: morning+afternoon-sold, difficulty: 2
            };
        },
        // Hard (7-9)
        () => {
            const students = Math.floor(Math.random()*4)+6; const perStudent = Math.floor(Math.random()*5)+4; const pencils = students*perStudent;
            return {
                question: currentLang === 'he'
                    ? `למורה יש ${pencils} עפרונות לחלק ל-${students} תלמידים שווה בשווה. כמה כל אחד מקבל?`
                    : `Teacher has ${pencils} pencils to divide among ${students} students equally. How many each?`,
                answer: perStudent, difficulty: 3
            };
        },
        () => {
            const weeks = Math.floor(Math.random()*4)+4; const perWeek = Math.floor(Math.random()*8)+5; const saved = weeks*perWeek;
            return {
                question: currentLang === 'he'
                    ? `יעל חסכה ${saved}₪ ב-${weeks} שבועות. אם חסכה סכום שווה בכל שבוע, כמה חסכה בשבוע?`
                    : `Yael saved ${saved}₪ in ${weeks} weeks. If she saved equally each week, how much per week?`,
                answer: perWeek, difficulty: 3
            };
        },
        () => {
            const a = Math.floor(Math.random()*20)+40; const b = Math.floor(Math.random()*20)+35;
            return {
                question: currentLang === 'he'
                    ? `אוטובוס יצא עם ${a} נוסעים. עלו עוד ${b} נוסעים. כמה נוסעים יש עכשיו?`
                    : `A bus left with ${a} passengers. ${b} more got on. How many passengers now?`,
                answer: a+b, difficulty: 3
            };
        }
    ],
    // Category 9: Money Problems (בעיות כסף)
    9: [
        // Easy (0-2): simple totals up to 20₪
        () => {
            const a = Math.floor(Math.random()*5)+3; const b = Math.floor(Math.random()*5)+2;
            return { question: currentLang === 'he' ? `קנית פריט ב-${a}₪ ופריט ב-${b}₪. כמה שילמת?` : `You bought an item for ${a}₪ and one for ${b}₪. How much did you pay?`, answer: a+b, difficulty: 1 };
        },
        () => {
            const price = Math.floor(Math.random()*8)+3; const paid = price + Math.floor(Math.random()*5)+1;
            return { question: currentLang === 'he' ? `פריט עולה ${price}₪. שילמת ${paid}₪. כמה עודף תקבל?` : `An item costs ${price}₪. You paid ${paid}₪. How much change do you get?`, answer: paid-price, difficulty: 1 };
        },
        () => {
            const a = Math.floor(Math.random()*5)+4; const b = Math.floor(Math.random()*4)+3;
            return { question: currentLang === 'he' ? `לגלידה ${a}₪ ולמיץ ${b}₪. כמה ביחד?` : `Ice cream costs ${a}₪ and juice costs ${b}₪. How much together?`, answer: a+b, difficulty: 1 };
        },
        // Medium (3-6): change from 20₪ or 50₪
        () => {
            const price = Math.floor(Math.random()*12)+5;
            return { question: currentLang === 'he' ? `פריט עולה ${price}₪. שילמת 20₪. כמה עודף?` : `An item costs ${price}₪. You paid 20₪. How much change?`, answer: 20-price, difficulty: 2 };
        },
        () => {
            const a = Math.floor(Math.random()*10)+8; const b = Math.floor(Math.random()*10)+7;
            return { question: currentLang === 'he' ? `ספר עולה ${a}₪ ועיפרון עולה ${b}₪. כמה ביחד?` : `A book costs ${a}₪ and a pencil costs ${b}₪. How much together?`, answer: a+b, difficulty: 2 };
        },
        () => {
            const price = Math.floor(Math.random()*15)+10;
            return { question: currentLang === 'he' ? `צעצוע עולה ${price}₪. יש לך 50₪. כמה ישאר?` : `A toy costs ${price}₪. You have 50₪. How much will you have left?`, answer: 50-price, difficulty: 2 };
        },
        () => {
            const price = Math.floor(Math.random()*20)+15;
            return { question: currentLang === 'he' ? `פריט עולה ${price}₪. שילמת 50₪. כמה עודף?` : `An item costs ${price}₪. You paid 50₪. How much change?`, answer: 50-price, difficulty: 2 };
        },
        // Hard (7-9): change from 100₪, multi-item
        () => {
            const price = Math.floor(Math.random()*40)+20;
            return { question: currentLang === 'he' ? `פריט עולה ${price}₪. שילמת 100₪. כמה עודף?` : `An item costs ${price}₪. You paid 100₪. How much change?`, answer: 100-price, difficulty: 3 };
        },
        () => {
            const a = Math.floor(Math.random()*20)+15; const b = Math.floor(Math.random()*20)+15;
            return { question: currentLang === 'he' ? `חולצה עולה ${a}₪ ומכנסיים עולים ${b}₪. כמה ביחד?` : `A shirt costs ${a}₪ and pants cost ${b}₪. How much together?`, answer: a+b, difficulty: 3 };
        },
        () => {
            const a = Math.floor(Math.random()*15)+10; const b = Math.floor(Math.random()*15)+10; const paid = 100;
            return { question: currentLang === 'he' ? `קנית פריט ב-${a}₪ ופריט ב-${b}₪. שילמת ${paid}₪. כמה עודף?` : `You bought items for ${a}₪ and ${b}₪. You paid ${paid}₪. How much change?`, answer: paid-(a+b), difficulty: 3 };
        },
    ]
};

function getTimeThresholds_g2(difficulty, categoryId) {
    // Categories 8 and 9 (word/money problems) get extra time for reading
    if (categoryId === 8 || categoryId === 9) {
        const thresholds = {
            1: { excellent: 20, good: 40 },
            2: { excellent: 40, good: 70 },
            3: { excellent: 70, good: 110 },
        };
        return thresholds[difficulty];
    }
    const thresholds = {
        1: { excellent: 8,  good: 18 },
        2: { excellent: 20, good: 38 },
        3: { excellent: 40, good: 70 },
    };
    return thresholds[difficulty];
}
