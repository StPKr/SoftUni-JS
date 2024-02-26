function solve(input) {
    let list = {};
    for (let item of input) {
        let array = item.split(' ');
        let name = array.shift();
        if (list.hasOwnProperty(name)) {
            for (let el of array) {
                list[name].push(el);
            }

        } else {
            list[name] = array;
        }
    }
    for (let key of Object.keys(list)) {
        let length = list[key].length;
        list[key] = (list[key].map(Number).reduce((total, currentValue) => total + currentValue, 0) / length).toFixed(2);
    }
    let sortedKeys = Object.keys(list).sort((a, b) => a.localeCompare(b));
    let sortedObject = {};
    for (const key of sortedKeys) {
        sortedObject[key] = list[key];
    }
    for (let entry of Object.entries(sortedObject)) {
        console.log(entry.join(': '));
    }
}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)