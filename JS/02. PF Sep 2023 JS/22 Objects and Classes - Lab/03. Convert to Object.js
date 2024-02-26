function solve(json) {
    let converted = JSON.parse(json);
    let keys = Object.keys(converted);
    for (let key of keys) {
        console.log(`${key}: ${converted[key]}`);
    }
}
solve('{"name": "George", "age": 40, "town": "Sofia"}');