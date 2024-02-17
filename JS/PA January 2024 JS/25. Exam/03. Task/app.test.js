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

        it('year is not 2024, 2', () => {
            expect(() => planYourTrip.choosingDestination('Ski Resort', 'Winter', 2025)).to.throw(`Invalid Year!`);
        });

        it('destination is not valid', () => {
            expect(() => planYourTrip.choosingDestination('Miami', 'Winter', 2024)).to.throw(`This destination is not what you are looking for.`);
        });

        it('destination is not valid, 2', () => {
            expect(() => planYourTrip.choosingDestination('John', 'Winter', 2024)).to.throw(`This destination is not what you are looking for.`);
        });

        it('season is not valid', () => {
            expect(planYourTrip.choosingDestination('Ski Resort', 'Summer', 2024)).to.equal(`Consider visiting during the Winter for the best experience at the Ski Resort.`);
        });

        it('season is not valid, 2', () => {
            expect(planYourTrip.choosingDestination('Ski Resort', 'Test', 2024)).to.equal(`Consider visiting during the Winter for the best experience at the Ski Resort.`);
        });

        it('nothing is valid', () => {
            expect(() => planYourTrip.choosingDestination('Miami', 'Summer', 1998)).to.throw(`Invalid Year!`);
        });

        it('happy path', () => {
            expect(planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024)).to.equal(`Great choice! The Winter is the perfect time to visit the Ski Resort.`);
        });

        it('happy path', () => {
            expect(planYourTrip.choosingDestination('Ski Resort', 'winter', 2024)).to.equal(`Consider visiting during the Winter for the best experience at the Ski Resort.`);
        });

    });

    describe('•	exploreOptions', function () {
        it('happy path', () => {
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 2)).to.equal(`Skiing, Snowboarding`);
        });

        it('happy path 2', () => {
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking", "Spa", "Relaxation"], 1)).to.equal(`Skiing, Winter Hiking, Spa, Relaxation`);
        });

        it('happy path 2', () => {
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Skiing", "Winter Hiking", "Spa", "Relaxation"], 2)).to.equal(`Skiing, Snowboarding, Winter Hiking, Spa, Relaxation`);
        });

        it('happy path 3', () => {
            expect(planYourTrip.exploreOptions(["Skiing"], 0)).to.equal(``);
        });

        it('negative index', () => {
            expect(() => planYourTrip.exploreOptions(["Skiing"], -1)).to.throw(`Invalid Information!`);
        });

        it('invalid index', () => {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Hiking"], 5)).to.throw(`Invalid Information!`);
        });

        it('invalid index', () => {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Hiking"], Infinity)).to.throw(`Invalid Information!`);
        });

        it('invalid index', () => {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Hiking"], 9007199254740991n)).to.throw(`Invalid Information!`);
        });

        // it('invalid index', () => {
        //     expect(() => planYourTrip.exploreOptions(["Skiing", "Hiking"], -0)).to.throw(`Invalid Information!`);
        // });

        it('invalid array', () => {
            expect(() => planYourTrip.exploreOptions("Winter Hiking", 2)).to.throw(`Invalid Information!`);
        });

        it('invalid array 2', () => {
            expect(() => planYourTrip.exploreOptions("Winter Hiking", 0)).to.throw(`Invalid Information!`);
        });

        it('invalid array 3', () => {
            expect(() => planYourTrip.exploreOptions(10, 0)).to.throw(`Invalid Information!`);
        });

        it('empty array', () => {
            expect(() => planYourTrip.exploreOptions([], 0)).to.throw(`Invalid Information!`);
        });

        it('index out of range', () => {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Winter Hiking"], 2)).to.throw(`Invalid Information!`);
        });

        it('index is not a number', () => {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Winter Hiking"], "Skiing")).to.throw(`Invalid Information!`);
        });

        it('random NaN', () => {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Winter Hiking"], NaN)).to.throw(`Invalid Information!`);
        });

        it('index not an integer', () => {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Winter Hiking", "Hiking"], 1.5)).to.throw(`Invalid Information!`);
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

        it('missing param 4', () => {
            expect(() => planYourTrip.exploreOptions(null, 5)).to.throw(`Invalid Information!`);
        });

        it('missing param 5', () => {
            expect(() => planYourTrip.exploreOptions(['Skiing'], null)).to.throw(`Invalid Information!`);
        });
    });

    describe('•	estimateExpenses', function () {
        it('happy path', () => {
            expect(planYourTrip.estimateExpenses(50, 2)).to.equal(`The trip is budget-friendly, estimated cost is $100.00.`);
        });

        it('happy path 2', () => {
            expect(planYourTrip.estimateExpenses(250, 2)).to.equal(`The trip is budget-friendly, estimated cost is $500.00.`);
        });

        it('happy path 2', () => {
            expect(planYourTrip.estimateExpenses(500, 1)).to.equal(`The trip is budget-friendly, estimated cost is $500.00.`);
        });

        it('happy path 2.5', () => {
            expect(planYourTrip.estimateExpenses(0.01, 0.1)).to.equal(`The trip is budget-friendly, estimated cost is $0.00.`);
        });

        it('extra param', () => {
            expect(planYourTrip.estimateExpenses(250, 2, 5)).to.equal(`The trip is budget-friendly, estimated cost is $500.00.`);
        });

        it('happy path 3', () => {
            expect(planYourTrip.estimateExpenses(200.5, 2)).to.equal(`The trip is budget-friendly, estimated cost is $401.00.`);
        });

        it('happy path 4', () => {
            expect(planYourTrip.estimateExpenses(200.5, 2.1)).to.equal(`The trip is budget-friendly, estimated cost is $421.05.`);
        });

        it('happy path 5', () => {
            expect(planYourTrip.estimateExpenses(500, 2)).to.equal(`The estimated cost for the trip is $1000.00, plan accordingly.`);
        });

        it('happy path 5', () => {
            expect(planYourTrip.estimateExpenses(NaN, NaN)).to.equal(`The estimated cost for the trip is $NaN, plan accordingly.`);
        });

        it('happy path 6', () => {
            expect(planYourTrip.estimateExpenses(439.5, 2.8)).to.equal(`The estimated cost for the trip is $1230.60, plan accordingly.`);
        });

        it('first param is not a number', () => {
            expect(() => planYourTrip.estimateExpenses("gsqgsq", 2)).to.throw(`Invalid Information!`);
        });

        it('second param is not a number', () => {
            expect(() => planYourTrip.estimateExpenses(50, "gasgas")).to.throw(`Invalid Information!`);
        });

        it('both params are not numbers', () => {
            expect(() => planYourTrip.estimateExpenses("five", "wrq")).to.throw(`Invalid Information!`);
        });

        it('first param is negative', () => {
            expect(() => planYourTrip.estimateExpenses(-50, 2)).to.throw(`Invalid Information!`);
        });

        it('second param is negative', () => {
            expect(() => planYourTrip.estimateExpenses(50, -2)).to.throw(`Invalid Information!`);
        });

        it('both params are negative', () => {
            expect(() => planYourTrip.estimateExpenses(-50, -2)).to.throw(`Invalid Information!`);
        });

        it('first param is 0', () => {
            expect(() => planYourTrip.estimateExpenses(0, 2)).to.throw(`Invalid Information!`);
        });

        it('second param is 0', () => {
            expect(() => planYourTrip.estimateExpenses(50, 0)).to.throw(`Invalid Information!`);
        });

        it('both params are 0', () => {
            expect(() => planYourTrip.estimateExpenses(0, 0)).to.throw(`Invalid Information!`);
        });

        it('missing param', () => {
            expect(() => planYourTrip.estimateExpenses(50)).to.throw(`Invalid Information!`);
        });

        it('no params', () => {
            expect(() => planYourTrip.estimateExpenses()).to.throw(`Invalid Information!`);
        });

        it('invalid params mix', () => {
            expect(() => planYourTrip.estimateExpenses([10], -2)).to.throw(`Invalid Information!`);
        });

        it('invalid params mix 2', () => {
            expect(() => planYourTrip.estimateExpenses(null, 2)).to.throw(`Invalid Information!`);
        });

        it('invalid params mix 3', () => {
            expect(() => planYourTrip.estimateExpenses(120, null)).to.throw(`Invalid Information!`);
        });

        it('invalid params mix 4', () => {
            expect(() => planYourTrip.estimateExpenses("text", { ditance: 4 })).to.throw(`Invalid Information!`);
        });

        it('invalid params mix 5', () => {
            expect(() => planYourTrip.estimateExpenses(-20, 0)).to.throw(`Invalid Information!`);
        });

        it('invalid params mix 6', () => {
            expect(() => planYourTrip.estimateExpenses(0, -1)).to.throw(`Invalid Information!`);
        });

        it('upper limits for estimateExpenses', () => {
            expect(planYourTrip.estimateExpenses(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).to.equal(`The estimated cost for the trip is $${(Number.MAX_SAFE_INTEGER * Number.MAX_SAFE_INTEGER).toFixed(2)}, plan accordingly.`);
        });
        
    });
});
