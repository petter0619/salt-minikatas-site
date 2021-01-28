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
const fizzBuzzShowAll = document.querySelector('#fizzBuzzShowAll');

/* ------------- Handlers ------------- */
function calcFormHandler(e) {
    e.preventDefault();
    console.log('Calculator');
    console.log( evaluate(this.expression.value) );

    document.querySelector('#result_calculator').innerHTML = `<br><span>${evaluate(this.expression.value)}</span>`;
}

function fizzbuzzFormHandler(e) {
    e.preventDefault();
    console.log('FizzBuzz', this.number.value);
    console.log( fizzBuzz( parseInt(this.number.value) ) );

    // #result_fizzbuzz
    document.querySelector('#result_fizzbuzz').innerHTML = `<br><span>${fizzBuzz( parseInt(this.number.value) )}</span>`;
}

function primeFactorFormHandler(e) {
    e.preventDefault();
    console.log('Prime Factor', this.number.value);

    console.log( primeFactorization( parseInt(this.number.value) ) );

    // #result_primeFactor
    document.querySelector('#result_primeFactor').innerHTML = `<br><span>[${primeFactorization(parseInt(this.number.value) )}]</span>`;
}

function romanNumeralFormHandler(e) {
    e.preventDefault();
    
    console.log(this.input.value);
    console.log(this.conversionType.value);
    // #result_romanNumeral

    let result; 
    if (this.conversionType.value === 'convertToRoman') {
        result = arabicToRoman(parseInt(this.input.value));
    } else {
        result = romanToArabic(this.input.value.toUpperCase());
    } 

    document.querySelector('#result_romanNumeral').innerHTML = `<br><span>${result}</span>`;
}

const fizzBuzzClickHandler = () => {
    document.querySelector('#result_fizzbuzz').innerHTML = `<br><span>testing</span>`;  
}


/* ------------- Event Listeners ------------- */
calculatorForm.addEventListener('submit', calcFormHandler);
fizzbuzzForm.addEventListener('submit', fizzbuzzFormHandler);
primeFactorForm.addEventListener('submit', primeFactorFormHandler);
romanNumeralForm.addEventListener('submit', romanNumeralFormHandler);
fizzBuzzShowAll.addEventListener('click', fizzBuzzClickHandler);

