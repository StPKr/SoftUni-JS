import { expect } from 'chai';
import { solve } from './app.js';

// describe('First test', function () {
//     it('default pass', () => {
//         expect(1).to.equal(1);
//     });
//     it('default fail', () => {
//         expect(1).to.equal(10);
//     });
// });

describe('First test', function () {
    it('default pass', () => {
        expect(solve(4)).to.equal(20);
    });
    // it('default fail', () => {
    //     expect(1).to.equal(10);
    // });
});