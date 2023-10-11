// function check(input) {
//     let days = Number(input[0]);
//     let index = 1;
//     let command = input[index];
//     let lossCounter = 0;
//     let winCounter = 0;
//     let money = 0;
//     let daysWon = 0;
//     let daysLost = 0;
//     let totalMoney = 0;
//     while (index < input.length) {
//         while (command !== "Finish") {
//             if (command === "win") {
//                 winCounter++;
//                 money += 20;
//             } else if (command === "lose") {
//                 lossCounter++;
//             }


//             index++;
//             command = input[index];

//         }
//         if (winCounter > lossCounter) {
//             money *= 1.1;
//             daysWon++
//         } else if (winCounter < lossCounter) {
//             daysLost++
//         }
//         totalMoney += money;
//         index++;
//         command = input[index];
//         winCounter = 0;
//         lossCounter = 0;
//         money = 0;
//     }
//     if (daysWon > daysLost) {
//         totalMoney *= 1.2;
//         console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
//     } else if (daysWon < daysLost) {
//         console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);

//     }
// }
// check(["2",
//     "volleyball",
//     "win",
//     "football",
//     "lose",
//     "basketball",
//     "win",
//     "Finish",
//     "golf",
//     "win",
//     "tennis",
//     "win",
//     "badminton",
//     "win",
//     "Finish"
// ])

function test(input) {
    let tournamentDays = Number(input[0]);
    let allDaysSum = 0;
    let index = 1;
    let currentInput = input[index];
    let wins = 0;
    let loses = 0;

    for (day = 1; day <= tournamentDays; day++) {
        let currentDayWins = 0;
        let currentDayLoses = 0;
        let currentDaySum = 0; // това я нулира и не е нужно да я нулираме долу накрая на цикъла
        while (currentInput !== "Finish") {
            if (currentInput === "win") {
                currentDayWins++;
                currentDaySum += 20;
            } else if (currentInput === "lose") {
                currentDayLoses++;
            }
            index++;
            currentInput = input[index];
        }
        if (currentDayWins > currentDayLoses) {
            currentDaySum *= 1.10;
            wins++;
        } else {
            loses++;
        }
        allDaysSum += currentDaySum;
        index++;
        currentInput = input[index];
    }
    if (wins > loses) {
        allDaysSum *= 1.20;
        console.log()
    } else {
        console.log()
    }
}

test(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"
])