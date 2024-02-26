// function train(input){
// let index1 = 1;
// let index2 = 2;
// let counter = 0;
// let jury = Number(input[0]);
// let presentation = input[index1];
// let sumOfGrades = 0;
// let finalAssesment = 0;
// while (presentation != "Finish"){
//     for (let i = index2; i < (index2 + jury); i++){
//         let grade = Number(input[i]);
//             sumOfGrades += grade;

//     }
//     console.log(`${presentation} - ${(sumOfGrades/jury).toFixed(2)}.`);
//     counter++;
//     finalAssesment += sumOfGrades/jury;
//     sumOfGrades = 0;
//     index1 += (jury + 1);
//     presentation = input[index1];
//     index2 += (jury +1);
// }
// console.log(`Student's final assessment is ${(finalAssesment/counter).toFixed(2)}.`)
// }

// train(["2",
// "While-Loop",
// "6.00",
// "5.50",
// "For-Loop",
// "5.84",
// "5.66",
// "Finish"]);

function demo(input) {
    let judges = Number(input[0]);
    let index = 1;
    let command = input[index];
    let sumGrades = 0;
    let counter = 0;
    while (command !== "Finish") {
        counter++;
        let name = command;
        let tempSumGrade = 0;

        for (let i = 1; i <= judges; i++) {
            index++;
            let grade = Number(input[index]);
            tempSumGrade += grade;
        }
        let tempAvgGrade = tempSumGrade / judges;
        sumGrades += tempAvgGrade;
        console.log(`${name} - ${tempAvgGrade.toFixed(2)}.`);

        index++;
        command = input[index];


    }
    let avgGrade = sumGrades / counter;
    console.log(`Student's final assessment is ${avgGrade}.`)
}
demo(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"]);