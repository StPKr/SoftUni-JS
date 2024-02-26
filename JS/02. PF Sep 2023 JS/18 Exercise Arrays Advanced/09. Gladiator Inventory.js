function solve(arr) {
    let inventory = arr.shift().split(" ");
    for (let i = 0; i < arr.length; i++) {
        let elements = arr[i].split(" ");
        let command = elements[0];
        let item = elements[1];
        switch (command) {
            case "Buy":
                if (!inventory.includes(item)) {
                    inventory.push(item)
                };
                break;
            case "Trash":
                if (inventory.includes(item)) {
                    inventory.splice(inventory.indexOf(item), 1);
                }
                break;
            case "Repair":
                if (inventory.includes(item)) {
                    let repairedItem = inventory.splice(inventory.indexOf(item), 1);
                    inventory.push(repairedItem);
                }
                break;
            case "Upgrade":
                let subElements = item.split("-");
                let itemToUpgrade = subElements[0];
                if (inventory.includes(itemToUpgrade)) {
                    let upgradedItem = `${subElements.join(":")}`;
                    inventory.splice(inventory.indexOf(itemToUpgrade) + 1, 0, upgradedItem);
                }

                break;
        }
    }
    console.log(inventory.join(" "));
}
solve(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
);