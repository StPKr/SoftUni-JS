function solve(input) {
    let vipSet = [];
    let regularSet = [];
    while (input.length > 0) {
        let el = input.shift();
        if (el === "PARTY") {
            break;
        }
        if (parseInt(el[0])) {
            vipSet.push(el);
        } else {
            regularSet.push(el);
        }
    }
    for (let el of input) {
        if (parseInt(el[0])) {
            vipSet.splice(vipSet.indexOf(el), 1);
        } else {
            regularSet.splice(regularSet.indexOf(el), 1);
        }
    }
    console.log(vipSet.length + regularSet.length);
    vipSet.forEach(x => console.log(x));
    regularSet.forEach(x => console.log(x));
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