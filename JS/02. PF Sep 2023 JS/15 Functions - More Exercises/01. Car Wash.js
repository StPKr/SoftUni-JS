function wash(arr) {
    let value = 0;
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        switch (command) {
            case "soap": value += 10; break;
            case "water": value *= 1.2; break;
            case "vacuum cleaner": value *= 1.25; break;
            case "mud": value *= 0.9; break;
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}
wash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);