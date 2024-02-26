function solve(arrayInt, arrayCom) {
    for (let i = 0; i < arrayCom.length; i++) {
        let commands = arrayCom[i].split(" ");
        switch (commands[0]) {
            case "add":
                arrayInt.splice(Number(commands[1]), 0, Number(commands[2]));
                break;
            case "addMany":
                // let tempArr = [];
                // for (let j = 2; j < commands.length; j++) {
                //     tempArr.push(Number(commands[j]));
                // }
                // arrayInt.splice(Number(commands[1]), 0, ...tempArr);
                let idx = Number(commands[1]);
                let numsToAdd = commands.slice(2,).map(Number);

                for (let num of numsToAdd) {
                    arrayInt.splice(idx, 0, num);
                    idx++
                }
                break;
            case "contains":
                if (arrayInt.includes(Number(commands[1]))) {
                    console.log(arrayInt.indexOf(Number(commands[1])));
                } else {
                    console.log(-1);
                }
                break;
            case "remove":
                arrayInt.splice(commands[1], 1);
                break;
            case "shift":
                let rotations = Number(commands[1]);

                for (let rotation = 1; rotation <= rotations; rotation++) {
                    let firstNum = arrayInt.shift();
                    arrayInt.push(firstNum);
                }
                break;
            case "sumPairs":
                let pairedArr = [];
                for (let k = 0; k < arrayInt.length; k += 2) {
                    if (k + 1 < arrayInt.length) {
                        pairedArr.push(Number(arrayInt[k]) + Number(arrayInt[k + 1]));
                    } else {
                        pairedArr.push(Number(arrayInt[k]));
                    }
                }
                arrayInt = pairedArr;
                break;
            case "print":
                console.log(`[ ${arrayInt.join(', ')} ]`);
                break;

        }
    }
}
solve([1, 2, 3, 4, 5],
    ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);