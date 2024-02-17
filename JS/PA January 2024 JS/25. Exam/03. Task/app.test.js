import { expect } from 'chai';
import { planYourTrip } from './planYourTrip.js';

// describe('First test', function () {
//     it('default pass', () => {
//         expect(1).to.equal(1);
//     });
//     it('default fail', () => {
//         expect(1).to.equal(10);
//     });
// });

describe('Test', function () {

    describe('•	choosingDestination', function () {
        it('year is not 2024', () => {
            expect(() => planYourTrip.choosingDestination('Ski Resort', 'Winter', 2023)).to.throw(`Invalid Year!`);
        });

        it('destination is not valid', () => {
            expect(() => planYourTrip.choosingDestination('Miami', 'Winter', 2024)).to.throw(`This destination is not what you are looking for.`);
        });

        it('season is not valid', () => {
            expect(planYourTrip.choosingDestination('Ski Resort', 'Summer', 2024)).to.equal(`Consider visiting during the Winter for the best experience at the Ski Resort.`);
        });

        it('nothing is valid', () => {
            expect(() => planYourTrip.choosingDestination('Miami', 'Summer', 2025)).to.throw(`Invalid Year!`);
        });

        it('happy path', () => {
            expect(planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024)).to.equal(`Great choice! The Winter is the perfect time to visit the Ski Resort.`);
        });

    });

    describe('•	exploreOptions', function () {
        it('happy path', () => {
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 2)).to.equal(`Skiing, Snowboarding`);
        });

        it('happy path', () => {
            expect(planYourTrip.exploreOptions(["Skiing"], 0)).to.equal(``);
        });

        it('happy path', () => {
            expect(()=> planYourTrip.exploreOptions(["Skiing"], -1)).to.throw(`Invalid Information!`);
        });

        it('invalid array', () => {
            expect(() => planYourTrip.exploreOptions("Winter Hiking", 2)).to.throw(`Invalid Information!`);
        });

        it('invalid array 2', () => {
            expect(() => planYourTrip.exploreOptions("Winter Hiking", 0)).to.throw(`Invalid Information!`);
        });

        it('empty', () => {
            expect(() => planYourTrip.exploreOptions([], 0)).to.throw(`Invalid Information!`);
        });

        it('index out of range', () => {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Winter Hiking"], 2)).to.throw(`Invalid Information!`);
        });

        it('index NaN', () => {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Winter Hiking"], "1")).to.throw(`Invalid Information!`);
        });

        it('index not an integer', () => {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Winter Hiking"], 0.5)).to.throw(`Invalid Information!`);
        });

        it('missing param', () => {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Winter Hiking"])).to.throw(`Invalid Information!`);
        });

        it('missing param 2', () => {
            expect(() => planYourTrip.exploreOptions(5)).to.throw(`Invalid Information!`);
        });

        it('missing param 3', () => {
            expect(() => planYourTrip.exploreOptions()).to.throw(`Invalid Information!`);
        });

        it('missing param 3', () => {
            expect(() => planYourTrip.exploreOptions(null, 5)).to.throw(`Invalid Information!`);
        });

        it('missing param 3', () => {
            expect(() => planYourTrip.exploreOptions(['Skiing'], null)).to.throw(`Invalid Information!`);
        });

        it('missing param 3', () => {
            expect(() => planYourTrip.exploreOptions(NaN, NaN)).to.throw(`Invalid Information!`);
        });
    });

    describe('•	estimateExpenses', function () {
        it('happy path', () => {
            expect(planYourTrip.estimateExpenses(50, 2)).to.equal(`The trip is budget-friendly, estimated cost is $100.00.`);
        });

        it('happy path 2', () => {
            expect(planYourTrip.estimateExpenses(250, 2)).to.equal(`The trip is budget-friendly, estimated cost is $500.00.`);
        });

        it('extra param', () => {
            expect(planYourTrip.estimateExpenses(250, 2, 5)).to.equal(`The trip is budget-friendly, estimated cost is $500.00.`);
        });

        it('happy path 2.5', () => {
            expect(planYourTrip.estimateExpenses(200.5, 2)).to.equal(`The trip is budget-friendly, estimated cost is $401.00.`);
        });

        it('happy path 2.75', () => {
            expect(planYourTrip.estimateExpenses(200.5, 2.1)).to.equal(`The trip is budget-friendly, estimated cost is $421.05.`);
        });

        it('happy path 3', () => {
            expect(planYourTrip.estimateExpenses(500, 2)).to.equal(`The estimated cost for the trip is $1000.00, plan accordingly.`);
        });

        it('params are NaN', () => {
            expect(() => planYourTrip.estimateExpenses("gsqgsq", 2)).to.throw(`Invalid Information!`);
        });

        it('params are NaN 2', () => {
            expect(() => planYourTrip.estimateExpenses(50, "gasgas")).to.throw(`Invalid Information!`);
        });

        it('params are NaN 3', () => {
            expect(() => planYourTrip.estimateExpenses("five", "wrq")).to.throw(`Invalid Information!`);
        });

        it('params are negative', () => {
            expect(() => planYourTrip.estimateExpenses(-50, 2)).to.throw(`Invalid Information!`);
        });

        it('params are negative 2', () => {
            expect(() => planYourTrip.estimateExpenses(50, -2)).to.throw(`Invalid Information!`);
        });

        it('params are negative 3', () => {
            expect(() => planYourTrip.estimateExpenses(-50, -2)).to.throw(`Invalid Information!`);
        });

        it('params are 0', () => {
            expect(() => planYourTrip.estimateExpenses(0, 2)).to.throw(`Invalid Information!`);
        });

        it('params are 0, 2', () => {
            expect(() => planYourTrip.estimateExpenses(50, 0)).to.throw(`Invalid Information!`);
        });

        it('params are 0, 3', () => {
            expect(() => planYourTrip.estimateExpenses(0, 0)).to.throw(`Invalid Information!`);
        });

        it('missing param', () => {
            expect(() => planYourTrip.estimateExpenses(50)).to.throw(`Invalid Information!`);
        });

        it('missing param 2', () => {
            expect(() => planYourTrip.estimateExpenses()).to.throw(`Invalid Information!`);
        });

        it('invalid mix', () => {
            expect(() => planYourTrip.estimateExpenses([10], -2)).to.throw(`Invalid Information!`);
        });

        it('invalid mix 2', () => {
            expect(() => planYourTrip.estimateExpenses(null, 2)).to.throw(`Invalid Information!`);
        });

        it('invalid mix 3', () => {
            expect(() => planYourTrip.estimateExpenses(120, null)).to.throw(`Invalid Information!`);
        });

        it('invalid mix 4', () => {
            expect(() => planYourTrip.estimateExpenses(NaN, NaN)).to.throw(`he estimated cost for the trip is $NaN, plan accordingly.`);
        });
    });
});
