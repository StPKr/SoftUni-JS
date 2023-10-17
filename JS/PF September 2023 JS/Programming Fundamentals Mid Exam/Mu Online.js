function solve(string) {
    let health = 100;
    let bitcoins = 100;
    let roomMap = string.split("|");
    let check = true;
    for (i = 0; i < roomMap.length; i++) {
        if (check) {
            let [command, number] = roomMap[i].split(" ");
            number = Number(number);
            switch (command) {
                case "potion":
                    health += number;
                    if (health > 100) {
                        health = 100;
                        console.log(`You healed for ${100 - health} hp.`);
                    }
                    else {
                        console.log(`You healed for ${number} hp.`);
                    }
                    console.log(`Current health: ${health} hp.`)
                    break;
                case "chest":
                    bitcoins += number;
                    console.log(`You found ${number} bitcoins.`)
                    break;
                default:
                    health -= number;
                    if (health <= 0) {
                        check = false;
                        console.log(`You died! Killed by ${command}.`)
                        console.log(`Best room: ${i + 1}`)
                    }
                    else {
                        console.log(`You slayed ${command}.`)
                    }
                    break;
            }
        }
        else {
            break;
        }
    }
    if (check) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}
solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")