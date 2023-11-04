function solve(input) {
    let addressBook = {};
    for (let item of input) {
        let [name, address] = item.split(':');
        addressBook[name] = address;
    }
    const sortedKeys = Object.keys(addressBook).sort((a, b) => a.localeCompare(b));
    const sortedObject = {};
    for (const key of sortedKeys) {
        sortedObject[key] = addressBook[key];
    }
    for (let entry of Object.entries(sortedObject)) {
        console.log(entry.join(' -> '));
    }
}
solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);