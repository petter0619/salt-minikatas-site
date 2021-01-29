export const arabicToRoman = (num) => {
    // Check: That there is an input value!
    if (!num) return 'Please enter an integer';
    // Check: Number.isInteger(number)
    if (!Number.isInteger(num)) return 'Please enter an integer';
    // Check: number in range: 1 to 3000
    if (num < 1 || num > 3000) return 'Please enter a number between 1 and 3000... jackass!';
 
    // Solution
    let numerals = [];
    while (num > 0) {
        if (num >= 1000) {
            numerals.push('M');
            num -= 1000;
        } else if (/^9\d{2}$/.test(`${num}`)) { 
            numerals.push('CM');
            num -= 900;
        } else if (num >= 500) {
            numerals.push('D');
            num -= 500;
        } else if (/^4\d{2}$/.test(`${num}`)) { 
           numerals.push('CD');
           num -= 400;
        } else if (num >= 100) {
            numerals.push('C');
            num -= 100;
        } else if (/^9\d{1}$/.test(`${num}`)) { 
           numerals.push('XC');
           num -= 90;
        } else if (num >= 50) {
            numerals.push('L');
            num -= 50;
        } else if (/^4\d{1}$/.test(`${num}`)) { 
           numerals.push('XL');
           num -= 40;
        } else if (num >= 10) {
            numerals.push('X');
            num -= 10;
        } else if (num === 9) { 
           numerals.push('IX');
           num -= 9;
        } else if (num >= 5) {
            numerals.push('V');
            num -= 5;
        } else if (num === 4) { 
           numerals.push('IV');
           num -= 4;
        } else {
            numerals.push('I');
            num -= 1;
        }
    }
    return numerals.join('');
 }

export const romanToArabic = numeral => {
    // Check: That numeral isn't empty
    if (!numeral) return 'Please enter a string';
    // Check: Numeral is a string
    if (typeof numeral !== 'string') return 'Please enter a string';
    // Check: Numeral is a valid roman numeral (e.g. with RegEx)
    if (!/^M*(CM)*D*(CD)*C*(XC)*L*(XL)*X*(IX)*V*(IV)*I*$/.test(numeral)) return 'Please enter a valid roman numeral';
    // Check: Is a roman numeral between I (1) and MMM (3000)
    if (/^M{3}.+/.test(numeral)) return 'Please enter a roman numeral between I and MMM';

    // Solution
    const twoDigitNumerals = numeral.match(/(CM|CD|XC|XL|IX|IV)/g);
    const oneDigitNumerals = numeral.replace(/(CM|CD|XC|XL|IX|IV)/g, '');
    
    let array;
    if (twoDigitNumerals && oneDigitNumerals) {
        array = [...twoDigitNumerals, ...oneDigitNumerals];
    } else if (twoDigitNumerals) {
        array = [...twoDigitNumerals];
    } else {
        array = [...oneDigitNumerals];
    }

    const numbers = {
        M: 1000,            
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
        CM: 900,
        CD: 400,
        XC: 90,
        XL: 40,
        IX: 9,
        IV: 4,
    }
    const result = array.map(num => {
        return numbers[num];
    });
    return result.reduce((acc, n) => {
        return acc + n;
    }, 0);
}
