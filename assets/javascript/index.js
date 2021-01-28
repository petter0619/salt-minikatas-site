/* ------------- Imports ------------- */
import { evaluate } from './calculator.js';
import { fizzBuzz } from './fizzBuzz.js';
import { primeFactorization } from './primeFactorization.js';
import { arabicToRoman } from './romanNumerals_Hard.js';
import { romanToArabic } from './reverseRoman_hard.js';

/* ------------- Selectors ------------- */
const calculatorForm = document.querySelector('#calculatorForm');
const fizzbuzzForm = document.querySelector('#fizzbuzzForm');
const primeFactorForm = document.querySelector('#primeFactorForm');
const romanNumeralForm = document.querySelector('#romanNumeralForm');
const fizzBuzzShowAll = document.querySelector('#fizzBuzzShowAll');

/* ------------- Handlers ------------- */
function calcFormHandler(e) {
    e.preventDefault();
    document.querySelector('#result_calculator').innerHTML = `<br><span>${evaluate(this.expression.value)}</span>`;
}

function fizzbuzzFormHandler(e) {
    e.preventDefault();
    document.querySelector('#result_fizzbuzz').innerHTML = `<br><span>${fizzBuzz( parseInt(this.number.value) )}</span>`;
}

function primeFactorFormHandler(e) {
    e.preventDefault();
    document.querySelector('#result_primeFactor').innerHTML = `<br><span>[${primeFactorization(parseInt(this.number.value) )}]</span>`;
}

function romanNumeralFormHandler(e) {
    e.preventDefault();

    let result; 
    if (this.conversionType.value === 'convertToRoman') {
        result = arabicToRoman(parseInt(this.input.value));
    } else {
        result = romanToArabic(this.input.value.toUpperCase());
    } 

    document.querySelector('#result_romanNumeral').innerHTML = `<br><span>${result}</span>`;
}

const fizzBuzzClickHandler = () => {
    const array = Array.from(Array(101).keys()).slice(1);
    const html = array.map(num => {
        return `<span class="fizzSpan">${fizzBuzz(num)}</span>`;
    });

    document.querySelector('#result_fizzbuzz').innerHTML = `<div id="result_fizzbuzz--showAll">
    <div class="fizzDiv"><strong>1-25:</strong><hr>${html.slice(0,25).join('')}</div>
    <div class="fizzDiv"><strong>26-50:</strong><hr>${html.slice(25,50).join('')}</div>
    <div class="fizzDiv"><strong>51-75:</strong><hr>${html.slice(50,75).join('')}</div>
    <div class="fizzDiv"><strong>76-100:</strong><hr>${html.slice(75).join('')}</div>
    </div>`;  
}


/* ------------- Event Listeners ------------- */
calculatorForm.addEventListener('submit', calcFormHandler);
fizzbuzzForm.addEventListener('submit', fizzbuzzFormHandler);
primeFactorForm.addEventListener('submit', primeFactorFormHandler);
romanNumeralForm.addEventListener('submit', romanNumeralFormHandler);
fizzBuzzShowAll.addEventListener('click', fizzBuzzClickHandler);
