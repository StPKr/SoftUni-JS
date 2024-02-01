import { expect } from 'chai';
import { isSymmetric } from './solution.js';

describe('Suite', function () {
    it('works with number array', () => {
        const arr = [1, 1, 1];
        expect(isSymmetric(arr)).to.be.true;
    });
});
describe('Suite2', function () {
    it('works with number array2', () => {
        const arr = [1];
        expect(isSymmetric(arr)).to.be.true;
    });
});
describe('Suite3', function () {
    it('works with number array3', () => {
        const arr = [1, 1, 2];
        expect(isSymmetric(arr)).to.be.false;
    });
});
describe('Suite4', function () {
    it('works with number array4', () => {
        const arr = "test";
        expect(isSymmetric(arr)).to.be.false;
    });
});
describe('Suite5', function () {
    it('works with number array5', () => {
        const arr = [];
        expect(isSymmetric(arr)).to.be.true;
    });
});
describe("General tests", function () {
    it("should be a function", function () {
        expect(typeof isSymmetric).to.equal('function');
    })
});

describe('Suite33', function () {
    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
        expect(isSymmetric([5, 'hi', { a: 5 }, new Date(), { a: 5 }, 'hi', 5])).to.be.true;
    });
});