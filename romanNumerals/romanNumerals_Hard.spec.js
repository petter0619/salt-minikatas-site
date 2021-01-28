const should = require('chai').should(); 
const { romanHard } = require('./romanNumerals_Hard.js');

describe('RomanHard output', function () {
    it('Validation: input is an integer (not float) && typeof === number', function() {
        romanHard('234').should.equal
    ('Please enter an integer');
        romanHard(123.34).should.equal('Please enter an integer');
        romanHard(0.23).should.equal('Please enter an integer');
        romanHard().should.equal('Please enter an integer');
    });
    it('Validation: isInteger between 1 and 3000', function() {
        romanHard(-34).should.equal('Please enter a number between 1 and 3000... jackass!');
        romanHard(3023).should.equal('Please enter a number between 1 and 3000... jackass!');
    });
    it('Test results part 1 - Petter', function() {
        romanHard(1992).should.equal('MCMXCII');
        romanHard(2025).should.equal('MMXXV');
        romanHard(87).should.equal('LXXXVII');
        romanHard(101).should.equal('CI');
        romanHard(734).should.equal('DCCXXXIV');
        romanHard(92).should.equal('XCII');
    });
    it('Test case numbers to roman numerals', function() {
        romanHard(10).should.equal('X');
        romanHard(1000).should.equal('M');
        romanHard(900).should.equal('CM');
        romanHard(400).should.equal('CD');
        romanHard(100).should.equal('C');
        romanHard(90).should.equal('XC');
        romanHard(40).should.equal('XL');
        romanHard(500).should.equal('D');
        romanHard(4).should.equal('IV');
    });
    it('test case - NatNat', function() {
        romanHard(50).should.equal('L');
        romanHard(150).should.equal('CL');
        romanHard(124).should.equal('CXXIV');
        romanHard(1).should.equal('I');
    });
});