function solve(arrayInt, arrayCom) {
    for (let i = 0; i < arrayCom.length; i++) {
        let commands = arrayCom[i].split(" ");
        switch (commands[0]) {
            case "add":
                arrayInt.splice(commands[1], 0, commands[2]);
                break;
            case "addMany":
                for (let j = 2; j < commands.length; j++) {
                    arrayInt.splice(commands[j], 0, commands[1]);
                    break;
                }
                break;
            case "contains":
                if (arrayInt.includes(commands[1])) {
                    console.log(arrayInt.indexOf(commands[1]));
                } else {
                    console.log(-1);
                }
                break;
            case "remove":
                arrayInt.splice(commands[1], 1);
                break;
            case "shift":
                arrayInt.splice(commands[1], 0, commands[2]);
                break;
            case "sumPairs":
                arrayInt.splice(commands[1], 0, commands[2]);
                break;
            case "print":
                console.log(arrayInt);
                break;

        }
    }

}
solve([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
);