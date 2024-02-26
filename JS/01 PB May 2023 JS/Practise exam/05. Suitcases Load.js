function check(input) {
    let capacity = Number(input[0]);
    let suitcases = 0;
    let index = 1;
    let currentInput = input[index];
    let counter = 0;
    while (currentInput != "End") {
        let volume = Number(currentInput);
        counter++;
        if (counter % 3 === 0) {
            volume *= 1.10;
        }

        if (capacity < volume) {
            console.log("No more space!")
            break;
        }
        
        

        capacity -= volume;
        suitcases++;

        index++;
        currentInput = input[index];

    }
    if (currentInput === "End") {
        console.log("Congratulations! All suitcases are loaded!")
    }

    console.log(`Statistic: ${suitcases} suitcases loaded.`)
}
check(["700.5", "180", "340.6", "126", "220"])