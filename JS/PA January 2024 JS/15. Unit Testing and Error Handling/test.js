import { expect } from 'chai';
import { printDeckOfCards } from './deckOfCards.js';

describe('Suite', function () {
    it('works with number array', () => {
        const arr = ['AS', '10D', 'KH', '2C'];

        expect(printDeckOfCards(arr)).to.equal('A♠ 10♦ K♥ 2♣');
    });

    it('throws an error for non-array params', () => {
        expect(() => printDeckOfCards(arr).to.throw);
    });
});