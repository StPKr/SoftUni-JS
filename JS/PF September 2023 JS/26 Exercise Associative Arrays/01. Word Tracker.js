function solve(input) {
    let keyArray = input.shift().split(" ");
    let list = {};
    for (let el1 of keyArray) {
        let counter = 0;
        for (let el2 of input) {
            if (el1 === el2) {
                counter++;
            }
            list[el1] = counter;
        }
    }
    let sortedEntries = Object.entries(list).sort((a, b) => b[1] - a[1]);
    let sortedObject = Object.fromEntries(sortedEntries);
    for (let entry of Object.entries(sortedObject)) {
        console.log(entry[0], "-", entry[1]);
    }
}
solve([
    'this sentence poop',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)