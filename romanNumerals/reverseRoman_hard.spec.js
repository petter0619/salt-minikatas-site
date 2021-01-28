const should = require('chai').should(); 
const { romanHardReverse } = require('./reverseRoman_hard.js');

describe('romanHardReverse output', function () {
    it('Validation: Input is a string', function() {
        romanHardReverse(123.34).should.equal('Please enter a string');
        romanHardReverse(0.23).should.equal('Please enter a string');
        romanHardReverse().should.equal('Please enter a string');
    });
    it('Valid roman numeral', function() {
        romanHardReverse('3Nfe*').should.equal('Please enter a valid roman numeral');
        romanHardReverse('MMDCIIIX').should.equal('Please enter a valid roman numeral');
    });
    it('Validation: isInteger between 1 and 3000', function() {
        romanHardReverse('MMMI').should.equal('Please enter a roman numeral between I and MMM');
    }); 
    it('Test results part 1 - Petter', function() {
        romanHardReverse('MCMXCII').should.equal(1992);
        romanHardReverse('MMXXV').should.equal(2025);
        romanHardReverse('LXXXVII').should.equal(87);
        romanHardReverse('CI').should.equal(101);
        romanHardReverse('DCCXXXIV').should.equal(734);
    });
    it('Test case numbers to roman numerals', function() {
        romanHardReverse('X').should.equal(10);
        romanHardReverse('M').should.equal(1000);
        romanHardReverse('C').should.equal(100);
        romanHardReverse('D').should.equal(500);
        romanHardReverse('IV').should.equal(4);
    });
    it('test case - NatNat', function() {
        romanHardReverse('L').should.equal(50);
        romanHardReverse('CL').should.equal(150);
        romanHardReverse('CXXIV').should.equal(124);
        romanHardReverse('I').should.equal(1);
    });
});