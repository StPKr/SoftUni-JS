

// describe('Suite Demo', function () {
//     it('works', function () {
//         if (add(1, 1) !== 2) {
//             throw new Error('Addition did not work!')
//         }
//     });
// }); - use mocha index.js in the terminal
import { add } from './util.js';
import { expect } from "chai";
describe('Suite Demo', function () {
    it('works', function () {
        expect(add(1, 1)).to.equal(2);
    });
}); 