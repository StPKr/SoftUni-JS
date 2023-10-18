function solve(inputArray) {
    let pirateShip = inputArray.shift().split(">");
    let warShip = inputArray.shift().split(">");
    let maxHealthCap = Number(inputArray.shift());
    for (let i = 0; i < inputArray.length; i ++){
        let stringOfInfo = inputArray[i].split(" ");
        let command = stringOfInfo[0];
        
    }


    console.log(maxHealthCap)
}
solve(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);
