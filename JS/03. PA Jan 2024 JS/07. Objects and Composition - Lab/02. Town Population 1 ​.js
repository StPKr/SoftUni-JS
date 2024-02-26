function solve(inputArray) {
    let object = {};
    for (let line of inputArray) {
        [name, pop] = line.split(" <-> ");
        if (object.hasOwnProperty(name)) {
            // if (namme in object) - same
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