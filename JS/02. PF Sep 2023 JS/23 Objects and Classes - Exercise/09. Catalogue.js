function solve(inputArr) {
    let list = {};
    for (let el of inputArr) {
        let [key, value] = el.split(' : ');
        list[key] = Number(value);
    }
    let sortedList = Object.entries(list).sort((a, b) => a[0].localeCompare(b[0]));
    let placeholder = [];
    for (let el of sortedList) {
        let char = el[0][0];
        if (!placeholder.includes(char)) {
            console.log(char);
            placeholder.push(char);
        }
        console.log(`  ${el[0]}: ${el[1]}`)
    }
}
solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)