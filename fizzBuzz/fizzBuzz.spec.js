const assert = require('chai').assert; 
const { fizzBuzz } = require('./fizzBuzz');

describe('FizzBuzz output', function () {
    it('number is Fizz if it is divisible by 3', function() {
        assert.equal(fizzBuzz(3), 'Fizz');
    });
    it('number is Fizz if it has a 3 in it', function() {
        assert.equal(fizzBuzz(13), 'Fizz');
    });
    it('number is Buzz if it is divisible by 5 or if it has a 5 in it', function() {
        assert.equal(fizzBuzz(5), 'Buzz');
    });
    it('number is Buzz if has a 5 in it', function() {
        assert.equal(fizzBuzz(57), 'Buzz');
    });
    it('number is Fizzbuzz if it divisible by 3 and 5', function() {
        assert.equal(fizzBuzz(30), 'FizzBuzz');
    });
    it('number is Fizzbuzz if it has 15 in it', function() {
        assert.equal(fizzBuzz(15), 'FizzBuzz');
    });
    it('Otherwise return number', function() {
        assert.equal(fizzBuzz(4), 4);
    });
    it('Number between 1-100', function() {
        assert.equal(fizzBuzz(115), 'Should be a number between 1 and 100');
    });
    it('Invalid input - string', function() {
        assert.equal(fizzBuzz('foo'), 'Bogus ... Please provide a number. Try again');
    });
    it('Invalid input - array', function() {
        assert.equal(fizzBuzz([3]), 'Bogus ... Please provide a number. Try again');
    });
});
