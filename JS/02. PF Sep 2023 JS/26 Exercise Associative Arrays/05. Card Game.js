function solve(input) {
    let list = {};
    for (let el of input) {
        let personName = el.split(": ")[0];
        let cardValues = el.split(": ")[1].split(', ');

        if (list.hasOwnProperty(personName)) {
            for (let el of cardValues) {
                list[personName].push(el);
            }
        } else {
            list[personName] = cardValues;
        }
    }
    for (let el in list) {
        let mySet = new Set(list[el]);
        let sum = 0;
        for (let item of mySet) {
            let power = item[0];
            let type = item[1];
            let powerValue = 0;
            let typeValue = 0;
            if (power === "J") {
                powerValue = 11;
            } else if (power === "Q") {
                powerValue = 12;
            } else if (power === "K") {
                powerValue = 13;
            } else if (power === "A") {
                powerValue = 14;
            } else if (power === "1") {
                powerValue = 10;
                type = item[2];
            }
            else {
                powerValue = power;
            }
            if (type === "S") {
                typeValue = 4;
            } else if (type === "H") {
                typeValue = 3;
            } else if (type === "D") {
                typeValue = 2;
            } else if (type === "C") {
                typeValue = 1;
            }
            sum += powerValue * typeValue;
        }
        console.log(`${el}: ${sum}`);
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
