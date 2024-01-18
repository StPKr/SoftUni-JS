function solve(inputArray) {
    let list = {};
    while (inputArray.length > 0){
        let product = inputArray.shift();
        let qty = Number(inputArray.shift());
        list[product] = qty;
    }
    console.log(list);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);