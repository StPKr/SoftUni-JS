import { expect } from 'chai';
import { rgbToHexColor } from './solution.js';

describe("General tests", function () {
    it("should be a function", function () {
        expect(typeof rgbToHexColor).to.equal('function');
    });
    it("should be a function", function () {
        expect(typeof rgbToHexColor()).to.equal('string');
    });
});

describe("Value tests", function () {
    it("Should return hexidecimal value", function () {
        expect(rgbToHexColor(12, 44, 231)).to.be.equal('#0C2CE7');
    });
    it("Should return hexidecimal value", function () {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });
    it("Should return hexidecimal value", function () {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });
    it("Should return hexidecimal value", function () {
        expect(rgbToHexColor(255, 2552, 255)).to.be.equal(undefined);
    });
    it("Should return hexidecimal value", function () {
        expect(rgbToHexColor(12, 35)).to.be.equal(undefined);
    });
    it("Should return hexidecimal value", function () {
        expect(rgbToHexColor('s', 35, { a: 2 })).to.be.equal(undefined);
    });
    it("Should return hexidecimal value", function () {
        expect(rgbToHexColor(12, 23, 5.0)).to.be.equal(undefined);
    });
    it("Should return hexidecimal value", function () {
        expect(rgbToHexColor(12, 'a', 2)).to.be.equal(undefined);
    });
    it("Should return hexidecimal value", function () {
        expect(rgbToHexColor()).to.be.equal(undefined);
    });
    it("Should return hexidecimal value", function () {
        expect(rgbToHexColor(12, 35, 222, 123)).to.be.equal('#0C23DE');
    });
});