function solve(inputArray) {
    let chest = inputArray.shift().split("|");
    for (let i = 0; i < inputArray.length; i++) {
        let commands = inputArray[i].split(" ");
        let command = commands.shift();
        switch (command) {
            case "Loot":
                for (let k = 0; k < commands.length; k++) {
                    let itemToLoot = commands[k];
                    if (!chest.includes(itemToLoot)) {
                        chest.unshift(itemToLoot);
                    }
                } break;
            case "Drop":
                let indexToDrop = Number(commands[0]);
                if (indexToDrop >= 0 && indexToDrop < chest.length) {
                    let itemToDrop = chest.splice(indexToDrop, 1);
                    chest.push(itemToDrop);
                }
                break;
            case "Steal":
                let numberOfItemsToSteal = Number(commands[0]);
                if (numberOfItemsToSteal >= chest.length) {
                    console.log(chest.join(", "))
                    chest = [];
                }
                else {
                    let stolenItems = chest.splice(chest.length - numberOfItemsToSteal, numberOfItemsToSteal);
                    console.log(stolenItems.join(", "));
                }
                break;
        }
    }
    if (chest.length > 0) {
        let itemsLength = 0;
        for (let j = 0; j < chest.length; j++) {
            itemsLength += chest[j].length;
        }
        console.log(`Average treasure gain: ${(itemsLength / chest.length).toFixed(2)} pirate credits.`);
    }
    else {
        console.log("Failed treasure hunt.");
    }
}
// solve(["Gold|Silver|Bronze|Medallion|Cup",
//     "Loot Wood Gold Coins",
//     "Loot Silver Pistol",
//     "Drop 3",
//     "Steal 3",
//     "Yohoho!"]);
