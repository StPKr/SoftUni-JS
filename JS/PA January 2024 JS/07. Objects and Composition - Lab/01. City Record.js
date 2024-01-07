function solve(name, pop, treasury) {
    let object = {};
    object.name = name;
    object.population = pop;
    object.treasury = treasury;
    return object;
};
solve('Tortuga',
    7000,
    15000
);