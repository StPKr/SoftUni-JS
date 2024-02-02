import { assert } from 'chai';
import { expect } from 'chai';
import { mathEnforcer } from './solution.js';
import { it } from "mocha";

// describe("test addFive functionality", () => {
//     it('test with invalid value', () => {
//         assert.isUndefined(mathEnforcer.addFive("Pesho"), 'return value must be undefined');
//         assert.isUndefined(mathEnforcer.addFive([]), 'return value must be undefined');
//         assert.isUndefined(mathEnforcer.addFive("5"), 'return value must be undefined');
//     });
//     it('test with valid value', () => {
//         assert.equal(mathEnforcer.addFive(-10), -5, "value is correct");
//         assert.equal(mathEnforcer.addFive(-5), 0, "value is correct");
//         assert.equal(mathEnforcer.addFive(0), 5, "value is correct");
//         assert.equal(mathEnforcer.addFive(5), 10, "value is correct");
//         assert.equal(mathEnforcer.addFive(5.5), 10.5, "value is correct");
//     });
// });

// describe('test subtractTen functionality', () => {
//     it('test with invalid value', () => {
//         assert.isUndefined(mathEnforcer.subtractTen('pesho'), 'return value must be undefined');
//         assert.isUndefined(mathEnforcer.subtractTen([]), 'return value must be undefined');
        
//         assert.isUndefined(mathEnforcer.subtractTen('10'), 'return value must be undefined');
//     });
//     it('test with valid value', () => {
//         assert.equal(mathEnforcer.subtractTen(-10), -20, 'result is correct');
//         assert.equal(mathEnforcer.subtractTen(0), -10, 'result is correct');
//         assert.equal(mathEnforcer.subtractTen(10), 0, 'result is correct');
//         assert.equal(mathEnforcer.subtractTen(15), 5, 'result is correct');
//         assert.equal(mathEnforcer.subtractTen(15.5), 5.5, 'result is correct');
   
//     });
// });
// describe('test sum functionality', () => {
//     it('test with invalid value', () => {
//         assert.isUndefined(mathEnforcer.sum('pesho', 'gosho'), 'return value must be undefined');
//         assert.isUndefined(mathEnforcer.sum('pesho', []), 'return value must be undefined');
//         assert.isUndefined(mathEnforcer.sum('pesho', 5), 'return value must be undefined');
//         assert.isUndefined(mathEnforcer.sum([], 10), 'return value must be undefined');
//         assert.isUndefined(mathEnforcer.sum("5", 10), 'return value must be undefined');
//         assert.isUndefined(mathEnforcer.sum(10, 'Pesho'), 'return value must be undefined');
//         assert.isUndefined(mathEnforcer.sum(10, '10'), 'return value must be undefined');
//         assert.isUndefined(mathEnforcer.sum(10, []), 'return value must be undefined');
//     });
//     if ('test with valid value', () => {
//         assert.equal(mathEnforcer.sum(-10, 10), 0, 'result is correct');
//         assert.equal(mathEnforcer.sum(10, 0), 10, 'result is correct');
//         assert.equal(mathEnforcer.sum(0, 0), 0, 'result is correct');
//         assert.equal(mathEnforcer.sum(-10, -5), -15, 'result is correct');
//         assert.equal(mathEnforcer.sum(10, 5), 15, 'result is correct');
//         assert.equal(mathEnforcer.sum(10.5, 5), 15.5, 'result is correct');
//         assert.equal(mathEnforcer.sum(1, 5.5), 6.5, 'result is correct');
//         assert.equal(mathEnforcer.sum(1.5, 5.5), 7, 'result is correct');
//     });
// });
describe("mathEnforcer", function () {
	describe("addFive", function () {
		it("should return undefined for string parameter", function () {
			let actual = mathEnforcer.addFive("test");
			expect(actual).to.be.undefined;
		});

		it("should return 5 for 0", function () {
			let actual = mathEnforcer.addFive(0);
			let expected = 5;
			expect(actual).to.be.equal(expected);
		});

		it("should return 0 for -5", function () {
			let actual = mathEnforcer.addFive(-5);
			let expected = 0;
			expect(actual).to.be.equal(expected);
		});

		it("should return 7.5 for 2.5", function () {
			let actual = mathEnforcer.addFive(2.5);
			let expected = 7.5;
			expect(actual).to.be.closeTo(expected, 0.01);
		});
	});

	describe("subtractTen", function () {
		it("should return undefined for string parameter", function () {
			let actual = mathEnforcer.subtractTen("test");
			expect(actual).to.be.undefined;
		});

		it("should return 0 for 10", function () {
			let actual = mathEnforcer.subtractTen(10);
			let expected = 0;
			expect(actual).to.be.equal(expected);
		});

		it("should return -20 for -10", function () {
			let actual = mathEnforcer.subtractTen(-10);
			let expected = -20;
			expect(actual).to.be.equal(expected);
		});

		it("should return 2.5 for 12.5", function () {
			let actual = mathEnforcer.subtractTen(12.5);
			let expected = 2.5;
			expect(actual).to.be.closeTo(expected, 0.01);
		});
	});

	describe("sum", function () {
		it("should return undefined for string as first parameter", function () {
			let actual = mathEnforcer.sum("test", 5);
			expect(actual).to.be.undefined;
		});

		it("should return undefined for string as second parameter", function () {
			let actual = mathEnforcer.sum(5, "test");
			expect(actual).to.be.undefined;
		});

		it("should return 10 for 5,5", function () {
			let actual = mathEnforcer.sum(5, 5);
			let expected = 10;
			expect(actual).to.be.equal(expected);
		});

		it("should return 0 for 5,-5", function () {
			let actual = mathEnforcer.sum(5, -5);
			let expected = 0;
			expect(actual).to.be.equal(expected);
		});

		it("should return 10.7 for 5.5,5.2", function () {
			let actual = mathEnforcer.sum(5.5, 5.2);
			let expected = 10.7;
			expect(actual).to.be.closeTo(expected, 0.01);
		});
	});
});