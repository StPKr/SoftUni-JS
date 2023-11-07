function solve(inputArray) {
    let list = {};
    for (let el of inputArray) {
        let [company, employee] = el.split(" -> ");
        if (list.hasOwnProperty(company)) {
            list[company].push(employee);
        } else {
            list[company] = [employee];
        }
    }
    //     let sortedKeys = Object.keys(list).sort((a, b) => a.localeCompare(b));
    //     let sortedObject = {};
    //     for (const key of sortedKeys) {
    //         sortedObject[key] = list[key];
    //     }
    //     for (let entry of Object.entries(sortedObject)) {
    //         console.log(entry[0]);
    //         let employees = new Set(entry[1].split(" "));
    //         for (let el of employees) {
    //             console.log("--", el);
    //         }
    //     }
    let entries = Object.entries(list).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [name, employeeIds] of entries) {
        console.log(name);
        employeeIds.forEach(id => console.log(`-- ${id}`));
    }
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
)