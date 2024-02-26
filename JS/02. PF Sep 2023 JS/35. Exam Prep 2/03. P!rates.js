function solve(input) {
    let command = input.shift();
    let list = {};
    while (command !== "Sail") {
        let tokens = command.split("||");
        let city = tokens[0];
        let pop = Number(tokens[1]);
        let gold = Number(tokens[2]);
        if (list.hasOwnProperty(city)) {
            list[city]["pop"] += pop;
            list[city]["gold"] += gold;
        } else {
            list[city] = { pop: pop, gold: gold };
        }
        command = input.shift();
    }
    command = input.shift();
    while (command !== "End") {
        let tokens = command.split("=>");
        let action = tokens[0];
        let city = tokens[1];
        let amount = Number(tokens[2])
        switch (action) {
            case "Plunder":
                let gold = Number(tokens[3]);
                list[city]["pop"] -= amount;
                list[city]["gold"] -= gold;
                console.log(`${city} plundered! ${gold} gold stolen, ${amount} citizens killed.`)
                if (list[city]["pop"] <= 0 || list[city]["gold"] <= 0) {
                    console.log(`${city} has been wiped off the map!`)
                    delete list[city];
                }
                break;
            case "Prosper":
                if (amount < 0) {
                    console.log("Gold added cannot be a negative number!");
                } else {
                    list[city]["gold"] += amount;
                    console.log(`${amount} gold added to the city treasury. ${city} now has ${list[city]["gold"]} gold.`);
                }
                break;
        }
        command = input.shift();
    }
    let counter = Object.keys(list);
    if (counter.length === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        console.log(`Ahoy, Captain! There are ${counter.length} wealthy settlements to go to:`);
        for (let el of counter) {
            console.log(`${el} -> Population: ${list[el]["pop"]} citizens, Gold: ${list[el]["gold"]} kg`);
        }
    }
}
solve((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
)
solve((["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])
)