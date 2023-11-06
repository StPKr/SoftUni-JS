function solve(input) {
    let vipSet = new Set();
    let regularSet = new Set();
    for (let el of input) {
        input.shift();
        if (el === "PARTY") {
            break;
        }
        if (parseInt(el[0])) {
            vipSet.add(el);
        } else {
            regularSet.add(el);
        }
    }
    input.shift();
    for (let el of input) {
        if (parseInt(el[0])) {
            vipSet.delete(el);
        } else {
            regularSet.delete(el);
        }
    }
    console.log(vipSet.size + regularSet.size);
    Array.from(vipSet).forEach(x => console.log(x));
    Array.from(regularSet).forEach(x => console.log(x));
}
solve(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
)