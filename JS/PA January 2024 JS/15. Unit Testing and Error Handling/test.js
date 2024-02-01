import { expect } from 'chai';
import { printDeckOfCards } from './deckOfCards.js';

describe('Suite', function () {
    it('works with number array', () => {
        const arr = ['AS', '10D', 'KH', '2C'];
        expect(printDeckOfCards(arr)).to.equal('A♠ 10♦ K♥ 2♣');
    });
});

describe('Suite2', function () {
    it('throws an error for non-array params', () => {
        const arr2 = ['5S', '3D', 'QD', '1C'];
        expect(printDeckOfCards(arr2)).to.throw;
    });
});