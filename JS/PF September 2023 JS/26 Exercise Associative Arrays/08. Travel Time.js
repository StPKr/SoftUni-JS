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
    let sortedKeys = Object.keys(list).sort((a, b) => a.localeCompare(b));
    let sortedObject = {};
    for (let key of sortedKeys) {
        sortedObject[key] = list[key];
    }
    for (let country in sortedObject) {
        let superSortedObject = {};
        let superSortedEntries = Object.entries(sortedObject[country]).sort((a, b) => a[1] - b[1]);
        for (let [key, value] of superSortedEntries) {
            superSortedObject[key] = sortedObject[country][key];
        }
        sortedObject[country] = superSortedObject;
    }
    for (let country in sortedObject) {
        let placeholder = country + " -> ";
        for (let town in sortedObject[country]) {
            placeholder += town + " -> ";
            placeholder += sortedObject[country][town] + " ";
        }
        console.log(placeholder);
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