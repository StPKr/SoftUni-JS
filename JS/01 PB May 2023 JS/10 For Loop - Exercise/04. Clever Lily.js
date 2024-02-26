function years(input) {
    let lilisAge = Number(input[0]);
    let washingMachine = Number(input[1]);
    let toyPrice = Number(input[2]);
    let toyCounter = 0;
    let savedMoney = 0;
    let stolenMoney = 0;
    let addMoney = 10;

    for (let i = 1; i <= lilisAge; i++) {
        if (i % 2 === 0) {
            savedMoney += addMoney;
            addMoney += 10;
            stolenMoney++;
        } else {
            toyCounter++
        }
    }
    let sum = toyCounter * toyPrice + savedMoney - stolenMoney;
    if (sum >= washingMachine) {
        console.log(`Yes! ${(sum - washingMachine).toFixed(2)}`);

    } else {
        console.log(`No! ${(washingMachine - sum).toFixed(2)}`);

    }
}
years(["10", "170.00", "6"])