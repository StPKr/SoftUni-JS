// function demo(input) {
//     let index = 0;
//     let command = Number(input[index]);
//     let totalcommand = 0;
//     while (index < input.length) {
//         totalcommand += command;
//         index++
//         if (input[index] === "Going home") {
//             command = Number(input[index + 1]);
//             index++;
//         } else {
//             command = Number(input[index]);
//         }
//     }
//     if (totalcommand >= 10000){
//     console.log("Goal reached! Good job!");
//     console.log(`${totalcommand - 10000} command over the goal!`);
//     } else if (10000 > totalcommand) {
//     console.log(`${10000 - totalcommand} more command to reach goal.`);

//     }
// }
// demo(["1500",
// "3000",
// "250",
// "1548",
// "2000",
// "Going home",
// "2000"])

function demo(input) {
    let index = 0;
    let command = input[index];
    let totalcommand = 0;
    while (command !== "Going home") {
        let steps = Number(command)
        totalcommand += steps
        if (totalcommand >= 10000) {
            console.log("Goal reached! Good job!");
            console.log(`${totalcommand - 10000} steps over the goal!`);
            break;
        }
        index++;
        command = input[index];

    }
    if (command === "Going home") {
        let stepsToHome = Number(input[index + 1]);
        totalcommand += stepsToHome;
        if (totalcommand >= 10000) {
            console.log("Goal reached! Good job!");
            console.log(`${totalcommand - 10000} steps over the goal!`);
        } else if (10000 > totalcommand) {
            console.log(`${10000 - totalcommand} more steps to reach goal.`);

        }
    }
}
demo(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"])