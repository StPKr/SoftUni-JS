function solve(string) {
    let health = 100;
    let bitcoins = 0;
    let roomMap = string.split("|");
    let check = true;
    for (i = 0; i < roomMap.length; i++) {
        if (check) {
            let [command, number] = roomMap[i].split(" ");
            number = Number(number);
            switch (command) {
                case "potion":
                    let heal = number;
                    if (health + number > 100) {
                        console.log(`You healed for ${100 - health} hp.`);
                        health = 100;
                    }
                    else {
                        console.log(`You healed for ${number} hp.`);
                        health += number;
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
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")