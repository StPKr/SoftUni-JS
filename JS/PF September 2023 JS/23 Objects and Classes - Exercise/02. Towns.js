function solve(inputArr) {
    for (let el of inputArr) {
        let [town, lat, long] = el.split(" | ");
        let output = {};
        output.town = town;
        output.latitude = Number(lat).toFixed(2);
        output.longitude = Number(long).toFixed(2);
        console.log(output);
    }
}
solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)