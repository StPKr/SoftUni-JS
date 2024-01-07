function solve(inputArray) {
    let object = {};
    while (inputArray.length > 0) {
        let input = inputArray.shift();
        [name, pop] = input.split(" <-> ");
        if (object.hasOwnProperty(name)) {
            object[name] += Number(pop);
        } else {
            object[name] = Number(pop);
        }
    };
    for (let el in object) {
        console.log(el, ":", object[el]);
    }
};
solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);