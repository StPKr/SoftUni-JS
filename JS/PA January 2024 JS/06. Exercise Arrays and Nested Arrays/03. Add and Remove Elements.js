function solve(inputArray) {
    let outputArray = [];
    for (let i = 1; i <= inputArray.length; i++) {
        let command = inputArray[i - 1];
        switch (command) {
            case "add": outputArray.push(i); break;
            case "remove": outputArray.pop(); break;
        }
    }
    if (outputArray.length > 0){
        console.log(outputArray.join("\n"));
    } else {
        console.log("Empty");
    }
}
solve(['add',
    'add',
    'add',
    'add']
)