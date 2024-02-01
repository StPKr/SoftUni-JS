function printDeckOfCards(cards) {
    let deck = [];
    for (let el of cards) {
        if (el.length === 2) {
            let [a, b] = el.split('');
            deck.push(playingCards(a, b));
        } else {
            let [a, c, b] = el.split('');
            a = a + c;
            deck.push(playingCards(a, b));
        }

    }
    function playingCards(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = ['S', 'H', 'D', 'C'];

        if (!validFaces.includes(face) || !validSuits.includes(suit)) {
            throw new Error(`Invalid card: ${face}${suit}`);
        }
        let card = {
            face: face,
            suit: suit,
            toString() {
                let suitToChar = {
                    'S': "\u2660",
                    'H': "\u2665",
                    'D': "\u2666",
                    'C': "\u2663"
                };
                return card.face + suitToChar[card.suit];
            }
        }
        return card.toString();
    }
    console.log(deck.join(" "))
}
printDeckOfCards(['AS', '10D', 'KH', '2C']);

export { printDeckOfCards };