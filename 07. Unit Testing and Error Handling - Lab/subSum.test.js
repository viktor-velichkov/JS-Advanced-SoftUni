const { assert, expect } = require('chai');

const sum = require('./subSum');

describe('subSum tests', () => {
    describe('happy path', () => {
        it('returns the sum of elements between start and end index if given parameters are correct', () => {
            expect(sum([1, 2, 3, 4, 5], 2, 4)).to.equal(12);
        });

        it('works properly if the elements of the given array are strings', () => {
            expect(sum(['1', 2, 3, '4', 5], 0, 4)).to.equal(15);
            expect(sum(['1', '2', '3', '4', '5'], 0, 4)).to.equal(15);
        });

    });

    describe('wrong type of parameters', () => {
        it('returns NaN if first parameter is not an array', () => {
            expect(sum(5, 0, 1)).to.be.NaN;
        });
    });
});