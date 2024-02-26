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

// function solve(input) {
//     let map = new Map();
//     for (let string of input) {
//         let tokens = string.split(' ');
//         let product = tokens[0];
//         let quantity = Number(tokens[1]);

//         if (!map.has(product)) {
//             map.set(product, +quantity);
//         } else {
//             let currQuantity = map.get(product);
//             let newQuantity = currQuantity += quantity;
//             map.set(product, newQuantity);
//         }
//     }
//     for (let kvp of map){
//         console.log(`${kvp[0]} -> ${kvp[1]}`);
//     }
// }
// solve(['tomatoes 10',
//     'coffee 5',
//     'olives 100',
//     'coffee 40']
// );