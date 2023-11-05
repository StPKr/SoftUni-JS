function solve(input) {
    let list = {};
    for (let element of input) {
        if (list.hasOwnProperty(element)) {
            list[element]++;
        } else {
            list[element] = 1;
        }
    }
    let sortedEntries = Object.entries(list).sort((a, b) => b[1] - a[1]);
    let sortedObject = Object.fromEntries(sortedEntries)
    for (let entry of Object.entries(sortedObject)) {
        console.log(entry[0], "->", entry[1], "times");
    }
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);