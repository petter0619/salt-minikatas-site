/* ------------- Imports ------------- */
import { evaluate } from './calculator/calculator.js';
import { fizzBuzz } from './fizzBuzz/fizzBuzz.js';
import { primeFactorization } from './primeFactorization/primeFactorization.js';
import { arabicToRoman } from './romanNumerals/romanNumerals_Hard.js';
import { romanToArabic } from './romanNumerals/reverseRoman_hard.js';

/* ------------- Selectors ------------- */
const calculatorForm = document.querySelector('#calculatorForm');
const fizzbuzzForm = document.querySelector('#fizzbuzzForm');
const primeFactorForm = document.querySelector('#primeFactorForm');
const romanNumeralForm = document.querySelector('#romanNumeralForm');

/* ------------- Handlers ------------- */
function calcFormHandler(e) {
    e.preventDefault();
    console.log('Calculator');
    console.log( evaluate(this.expression.value) );

    // #result_calculator
    document.querySelector('#result_calculator').textContent = `${evaluate(this.expression.value)}`;
}

function fizzbuzzFormHandler(e) {
    e.preventDefault();
    console.log('FizzBuzz', this.number.value);
    console.log( fizzBuzz( parseInt(this.number.value) ) );

    // #result_fizzbuzz
}

function primeFactorFormHandler(e) {
    e.preventDefault();
    console.log('Prime Factor', this.number.value);

    console.log( primeFactorization( parseInt(this.number.value) ) );

    // #result_primeFactor
}

function romanNumeralFormHandler(e) {
    e.preventDefault();
    console.log('Roman numeral', this.romanNumeral.value, this.arabicNumber.value);

    console.log('arabicToRoman', this.arabicNumber.value, arabicToRoman( parseInt(this.arabicNumber.value) ));
    console.log('romanToArabic', this.romanNumeral.value, romanToArabic( this.romanNumeral.value.toUpperCase() ));
}

/* ------------- Event Listeners ------------- */
calculatorForm.addEventListener('submit', calcFormHandler);
fizzbuzzForm.addEventListener('submit', fizzbuzzFormHandler);
primeFactorForm.addEventListener('submit', primeFactorFormHandler);
romanNumeralForm.addEventListener('submit', romanNumeralFormHandler);
