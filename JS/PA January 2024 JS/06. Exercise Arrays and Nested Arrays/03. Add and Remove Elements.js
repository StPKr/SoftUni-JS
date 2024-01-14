function solve(inputArray) {
    let outputArray = [];
    for (let i = 1; i <= inputArray.length; i++) {
        let command = inputArray[i - 1];
        switch (command) {
            case "add": outputArray.push(i); break;
            case "remove": outputArray.pop(); break;
        }
    }
    console.log(outputArray.join("\n"));
}
solve(['add',
    'add',
    'add',
    'add']
)