function solve(inputArray) {
    let list = {};
    inputArray.forEach((el) => {
        [town, product, price] = el.split(" | ");
        price = Number(price);
        list[product] ?
            list[product].price > price ?
                (list[product].town = town, list[product].price = price) :
                null :
            (list[product] = { town, price });
    });
    for (let key in list){
        console.log(`${key} -> ${list[key].price} (${list[key].town})`);
    }
}
solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)