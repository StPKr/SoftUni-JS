function spaceTravel(inputArray) {
    let traavelRoute = inputArray.shift().split("||");
    let fuel = Number(inputArray.shift());
    let ammunition = Number(inputArray.shift());
    let check = true;
    for (let i = 0; i < traavelRoute.length; i++) {
        if (check) {
            let [command, value] = traavelRoute[i].split(" ");
            switch (command) {
                case "Travel":
                    let distance = Number(value);
                    if (fuel >= distance) {
                        fuel -= distance;
                        console.log(`The spaceship travelled ${distance} light-years.`);
                    }
                    else {
                        check = false;
                        console.log("Mission failed.");
                    }
                    break;
                case "Enemy":
                    let armor = Number(value);
                    if (ammunition >= armor) {
                        ammunition -= armor;
                        console.log(`An enemy with ${armor} armour is defeated.`)
                    }
                    else {
                        if (fuel >= armor * 2) {
                            fuel -= armor * 2;
                            console.log(`An enemy with ${armor} armour is outmaneuvered.`)
                        }
                        else {
                            check = false;
                            console.log("Mission failed.");
                        }
                    }
                    break;
                case "Repair":
                    let supply = Number(value);
                    fuel += supply;
                    ammunition += supply * 2;
                    console.log(`Ammunitions added: ${supply * 2}.`);
                    console.log(`Fuel added: ${supply}.`);
                    break;
                case "Titan":
                    console.log("You have reached Titan, all passengers are safe.");
                    break;
            }
        }
        else {
            break;
        }
    }
}
spaceTravel(['Travel 10||Enemy 30||Repair 15||Titan',
    '50',
    '80'])
