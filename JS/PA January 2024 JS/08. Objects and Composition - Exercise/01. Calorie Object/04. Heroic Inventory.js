function heroicInventory(inputArray) {
    let outputArray = [];
    for (let el of inputArray) {
        [hero, level, items] = el.split(" / ");
        let list = {};
        list.name = hero;
        list.level = Number(level);
        list.items = items ? items.split(", ") : [];
        outputArray.push(list);
    }
    console.log(JSON.stringify(outputArray));
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
); 