import { expect } from 'chai';
import { findNewApartment } from './findApartment.js';

// describe('First test', function () {
//     it('default pass', () => {
//         expect(1).to.equal(1);
//     });
//     it('default fail', () => {
//         expect(1).to.equal(10);
//     });
// });


describe('Tests', function () {

    describe('•	isGoodLocation', function () {
        it('string value different than Sofia, Plovdiv or Varna but bool is true', () => {
            expect(findNewApartment.isGoodLocation('Teteven', true)).to.equal(`This location is not suitable for you.`);
        });

        it('string value Sofia, Plovdiv or Varna but bool is false', () => {
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal(`There is no public transport in area.`);
        });

        it('string value Sofia, Plovdiv or Varna and  bool is true', () => {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal(`You can go on home tour!`);
        });

        it('string value is not a string and  bool is true', () => {
            expect(() => findNewApartment.isGoodLocation(5, true)).to.throw(`Invalid input!`);
        });

        // it('string value Sofia, Plovdiv or Varna but bool is not bool', () => {
        //     expect(findNewApartment.isGoodLocation('Sofia', 'True')).to.equal(`Invalid input!`);
        // });

        it('string value Sofia, Plovdiv or Varna but bool is not bool', () => {
            expect(() => findNewApartment.isGoodLocation('Sofia', 'True')).to.throw(`Invalid input!`);
        });
    });

    describe('•	isLargeEnough', function () {
        it('hapy path', () => {
            expect(findNewApartment.isLargeEnough([50, 60], 30)).to.equal(`50, 60`);
        });

        it('first parameter is not an array', () => {
            expect(() => findNewApartment.isLargeEnough(50, 5)).to.throw(`Invalid input!`);
        });

        it('second parameter is not a number', () => {
            expect(() => findNewApartment.isLargeEnough([50], '5')).to.throw(`Invalid input!`);
        });

        it('first parameter is not an empty array', () => {
            expect(() => findNewApartment.isLargeEnough([], 5)).to.throw(`Invalid input!`);
        });
    });

    describe('•	isItAffordable', function () {
        it('first parameter is not a number', () => {
            expect(() => findNewApartment.isItAffordable('50', 500)).to.throw(`Invalid input!`);
        });

        it('second parameter is not a number', () => {
            expect(() => findNewApartment.isItAffordable(50, '500')).to.throw(`Invalid input!`);
        });

        it('result is lower than 0', () => {
            expect(findNewApartment.isItAffordable(50, 5)).to.equal(`You don't have enough money for this house!`);
        });

        it('result is lower more 0', () => {
            expect(findNewApartment.isItAffordable(50, 500)).to.equal(`You can afford this home!`);
        });
    });
});