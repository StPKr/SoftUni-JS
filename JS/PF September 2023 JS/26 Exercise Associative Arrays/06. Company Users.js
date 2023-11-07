function solve(inputArray) {
    let list = {};
    for (let el of inputArray) {
        let [company, employee] = el.split(" -> ");
        if (list.hasOwnProperty(company)) {
            list[company] += " " + employee;
        } else {
            list[company] = employee;
        }
    }
    let sortedKeys = Object.keys(list).sort((a, b) => a.localeCompare(b));
    let sortedObject = {};
    for (const key of sortedKeys) {
        sortedObject[key] = list[key];
    }
    for (let entry of Object.entries(sortedObject)) {
        console.log(entry[0]);
        let employees = entry[1].split(" ");
        for (let el of employees) {
            console.log("--", el);
        }
    }
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
)