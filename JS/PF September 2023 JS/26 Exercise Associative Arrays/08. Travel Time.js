function solve(inputArray) {
    let list = {};
    for (let el of inputArray) {
        let [country, town, cost] = el.split(" > ");
        cost = Number(cost);
        if (country in list) {
            if (town in list[country]) {
                if (list[country][town] >= cost) {
                    list[country][town] = cost;
                } else {
                    continue;
                }
            } else {
                list[country][town] = cost;
            }
        } else {
            list[country] = {
                [town]: cost
            }
        }
    }
    for (let country in list) {
        for (let town in list[country]) {
            console.log(`${country} -> ${town} -> ${list[country][town]}`);
        }
    }
}
solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
)