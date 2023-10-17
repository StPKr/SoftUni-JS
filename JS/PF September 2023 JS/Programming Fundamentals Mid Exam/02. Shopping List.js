function solve(initialList) {
    let shoppingList = initialList.shift().split("!");
    for (let i = 0; i < initialList.length; i++) {
        if (initialList[i] === "Go Shopping!") {
            break;
        }
        else {
            let [command, firstItem, secondItem] = initialList[i].split(" ");
            switch (command) {
                case "Urgent":
                    if (!shoppingList.includes(firstItem)) {
                        shoppingList.unshift(firstItem);
                    }
                    break;
                case "Unnecessary":
                    if (shoppingList.includes(firstItem)) {
                        shoppingList.splice(shoppingList.indexOf(firstItem), 1);
                    }
                    break;
                case "Correct":
                    if (shoppingList.includes(firstItem)) {
                        shoppingList.splice(shoppingList.indexOf(firstItem), 1, secondItem);
                    }
                    break;
                case "Rearrange":
                    if (shoppingList.includes(firstItem)) {
                        let itemHold = shoppingList.splice(shoppingList.indexOf(firstItem), 1);
                        shoppingList.push(itemHold);
                    }
                    break;
            }
        }
    }
    console.log(shoppingList.join(", "));
}
// solve(["Tomatoes!Potatoes!Bread",
//     "Unnecessary Milk",
//     "Urgent Tomatoes",
//     "Go Shopping!"]);
solve(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);