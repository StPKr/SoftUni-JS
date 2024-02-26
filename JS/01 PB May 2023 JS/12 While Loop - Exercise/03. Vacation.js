// function holiday(input) {
//     let index = 0;
//     let needMoney = Number(input[index]);
//     index++;
//     let currentMoney = Number(input[index]);
//     index++;
//     let typeOfAction = input[index];
//     let amount = Number(input[index]);
//     let temporaryAmount = currentMoney;
//     let spendDays = 0;
//     let   = 0;
//     while (index < input.length) {
//         typeOfAction = input[index];
//         index++;
//         days++;
//         if (typeOfAction === "spend") {
//             amount = Number(input[index]);
//             temporaryAmount -= amount;
//             spendDays++;
//             if (spendDays === 5) {
//                 days++;
//                 console.log("You can't save the money.");
//                 console.log(`${days / 2}`)
//                 break;
//             }
//             if (temporaryAmount < 0) {
//                 temporaryAmount = 0;
//             }
//         } else if (typeOfAction === "save") {
//             amount = Number(input[index]);
//             temporaryAmount += amount;
//             spendDays = 0;
//         } else {
//             continue;
//         }
//     }
//     if (spendDays != 5) {

//         console.log(`You saved the money for ${days / 2} days.`)
//     }
// }
// holiday(["2000",
// "1000",
// "spend",
// "1200",
// "save",
// "2000"])

function demo(input) {
    let neededMoney = Number(input[0]);
    let currentMoney = Number(input[1]);
    let spendDays = 0;
    let days = 0;
    let index = 2;
    let currentInput = input[index];

    while (currentMoney < neededMoney) {
        days++;
        index++;
        if (currentInput === "spend") {
            spendDays++;

            if (spendDays === 5) {
                console.log("You can't save the money.");
                console.log(days);
                break;
            }
            let moneyToSpend = Number(input[index]);
            currentMoney -= moneyToSpend;

            if (currentMoney < 0) {
                currentMoney = 0;
            }
        } else if (currentInput === "save") {
            spendDays = 0;
            let moneyToSave = Number(input[index]);
            currentMoney += moneyToSave;
        }
        index++;
        currentInput = input[index];
    }
    if (currentMoney >= neededMoney) {
        console.log(`You saved the money for ${days} days.`)
    }
}




demo(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"])