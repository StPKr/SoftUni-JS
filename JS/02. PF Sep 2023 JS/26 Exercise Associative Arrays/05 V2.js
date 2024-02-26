function solve(arr) {
    let playersCards = {};
    let powersValues = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14 };
    let typesValues = { S: 4, H: 3, D: 2, C: 1 };
    for (let playerDeck of arr) {
        let [playerName, cardsStr] = playerDeck.split(': ');
        let cards = cardsStr.split(", ");

        if (playerName in playersCards) {
            playersCards[playerName].push(...cards); // takes every element and pushes it
        } else {
            playersCards[playerName] = cards;
        }
    }
    let entries = Object.entries(playersCards);

    for (let [name, deck] of entries) {
        let uniqueDeck = new Set(deck);
        let deckValue = 0
        for (let card of uniqueDeck) {
            let power = card.slice(0, card.length - 1);
            let type = card[card.length - 1];

            let cardValue = powersValues[power] * typesValues[type];
            deckValue += cardValue;
        }
        console.log(`${name}: ${deckValue}`)
    }
}
solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)
// solve([
//     'John: 2C, 4H, 9H, AS, QS',
//     'Slav: 3H, 10S, JC, KD, 5S, 10S',
//     'Alex: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'Slav: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'Alex: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'John: JD, JD, JD, JD'
// ]
// )