function solve(inputArray) {
    let list = {};
    for (let i = 0; i < inputArray.length; i += 2) {
        let resource = inputArray[i];
        let quantity = Number(inputArray[i + 1]);
        if (list.hasOwnProperty(resource)) {
            list[resource] += quantity;
        } else {
            list[resource] = quantity;
        }
    }
    for (let el in list){
        console.log(el + " -> " + list[el]);
    }
}
solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]
)