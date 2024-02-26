import { expect } from 'chai';
import { createCalculator } from './solution.js';


describe("Value tests", function () {
    it("Should return hexidecimal value", function () {
        expect(typeof createCalculator()).to.be.equal('object');
    });

    it("Should return hexidecimal value", function () {
        expect(createCalculator().add).to.exist;
    });
    it("Should return hexidecimal value", function () {
        expect(createCalculator().subtract).to.exist;
    });
    it("Should return hexidecimal value", function () {
        expect(createCalculator().get).to.exist;
    });
    it("Should return hexidecimal value", function () {
        expect(createCalculator().get()).to.be.equal(0);
    });
});