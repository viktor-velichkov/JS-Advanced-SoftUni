const { assert, expect } = require('chai');
const { testNumbers } = require('./testNumbers.js');

describe('Tests of testNumbers object', () => {
    describe('Tests of sumNumber fuction', () => {
        it('has two numbers as parameters', () => {
            expect(testNumbers.sumNumbers('1', 2)).to.be.undefined;
            expect(testNumbers.sumNumbers(2)).to.be.undefined;
        });

        it('returns the sum of the given numbers, rounded to second number after decimal point', () => {
            expect(testNumbers.sumNumbers(1, 2)).to.equal(Number(3).toFixed(2));
        });
    });

    describe('Tests of numberChecker fuction', () => {
        it('throws an error if the input cannot be parsed', () => {
            expect(() => testNumbers.numberChecker('number')).to.throw();
            expect(() => testNumbers.numberChecker('number')).to.throw('The input is not a number!');
        });

        it('reports that the given number is even or odd', () => {
            expect(testNumbers.numberChecker(0)).to.equal('The number is even!');
            expect(testNumbers.numberChecker('2')).to.equal('The number is even!');
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker('3')).to.equal('The number is odd!');
        });
    });

    describe('Tests of averageSumArray fuction', () => {
        it('returns the sum of the elements of the given array', () => {
            expect(testNumbers.averageSumArray([1, 2, 3, 4])).to.equal(2.5);
        });
    });
})