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

// module.exports.romanHardReverse = romanHardReverse;
