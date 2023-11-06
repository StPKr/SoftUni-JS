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
    console.log(list.Peter)
    let mySet = new Set(list.Peter);
    console.log(mySet)

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
