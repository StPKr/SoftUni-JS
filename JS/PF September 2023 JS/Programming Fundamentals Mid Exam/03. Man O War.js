function solve(inputArray) {
    let pirateShip = inputArray.shift().split(">").map(Number);
    let warShip = inputArray.shift().split(">").map(Number);
    let maxHealthCap = Number(inputArray.shift());
    let check = true;
    for (let i = 0; i < inputArray.length; i++) {
        if (!check) {
            break
        }
        let stringOfInfo = inputArray[i].split(" ");
        let command = stringOfInfo[0];
        if (command === "Retire") {
            break;
        }
        switch (command) {
            case "Fire":
                let index = Number(stringOfInfo[1]);
                if (index >= 0 && index < warShip.length) {
                    let damage = stringOfInfo[2];
                    warShip[index] -= damage;
                    if (warShip[index] <= 0) {
                        check = false;
                        console.log("You won! The enemy ship has sunken.");
                    }
                }
                break;
            case "Defend":
                let startIndex = Number(stringOfInfo[1]);
                let endIndex = Number(stringOfInfo[2]);
                if (startIndex >= 0 && endIndex >= 0 && startIndex < pirateShip.length && endIndex < pirateShip.length) {
                    for (let j = startIndex; j <= endIndex; j++) {
                        if (!check) {
                            break;
                        }
                        let damage = stringOfInfo[3];
                        pirateShip[j] -= damage
                        if (pirateShip[j] <= 0) {
                            check = false;
                            console.log("You lost! The pirate ship has sunken.");
                        }
                    }
                }
                break;
            case "Repair":
                let repairIndex = Number(stringOfInfo[1]);
                if (repairIndex >= 0 && repairIndex < pirateShip.length) {
                    let health = Number(stringOfInfo[2]);
                    pirateShip[repairIndex] += health;
                    if (pirateShip[repairIndex] > maxHealthCap) {
                        pirateShip[repairIndex] = maxHealthCap;
                    }
                }
                break;
            case "Status":
                let counter = 0;
                for (let k = 0; k < pirateShip.length; k++) {
                    if (pirateShip[k] < maxHealthCap * 0.2) {
                        counter++;
                    }
                }
                console.log(`${counter} sections need repair.`)
                break;
        }
    }
    if (check) {
        console.log(`Pirate ship status: ${pirateShip.reduce((a, b) => a + b)}`);
        console.log(`Warship status: ${warShip.reduce((a, b) => a + b)}`);
    }
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
