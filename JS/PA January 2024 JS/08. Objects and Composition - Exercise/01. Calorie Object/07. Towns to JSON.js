function solve(inputArray) {
    let useless = inputArray.shift();
    let list = [];
    for (let el of inputArray) {
        let [empty1, town, lat, long, empty2] = el.split("|");
        town = town.trim();
        let output = {};
        output["Town"] = town;
        output["Latitude"] = Number(Number(lat).toFixed(2));
        output["Longitude"] = Number(Number(long).toFixed(2));
        list.push(output);
    }
    let file = JSON.stringify(list);
    console.log(file);
}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)