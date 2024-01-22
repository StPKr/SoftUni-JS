function solve(inputArray) {
    let useless = inputArray.shift();
    let list = [];
    for (let el of inputArray) {
        let [town, lat, long] = el.split(" | ");
        town = town.replace("| ", "");
        lat = Number(Number(lat).toFixed(2));
        long = Number(Number(long.replace(" |", "")).toFixed(2));
        list.push({ Town: town, Latitude: lat, Longitude: long });
    }
    console.log(JSON.stringify(list));
}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)