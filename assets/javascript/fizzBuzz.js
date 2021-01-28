// const testArray = Array.from(Array(101).keys()).slice(1);

export const fizzBuzz = number => {
    if (!Number.isInteger(number)) return 'Bogus ... Please provide a number. Try again';
    if (number < 1 || number > 100) return 'Should be a number between 1 and 100';
    if (/15/.test(`${number}`) || (number % 3 === 0 && number % 5 === 0)) return 'FizzBuzz';
    if (number % 5 === 0 || /5/.test(`${number}`)) return 'Buzz';
    if (number % 3 === 0 || /3/.test(`${number}`)) return 'Fizz';
    return number;
}

// testArray.forEach(item => {
//     console.log(fizzBuzz(item));
// });

// module.exports.fizzBuzz = fizzBuzz;
