function solve(input) {
    let list = {};
    for (let item of input) {
        let [name, amount] = item.split(' ');
        if (list.hasOwnProperty(name)) {
            list[name] += Number(amount);
        } else {
            list[name] = Number(amount);
        }
    }
    for (let entry of Object.entries(list)) {
        console.log(entry.join(' -> '));
    }
}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);