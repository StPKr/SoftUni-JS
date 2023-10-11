// function belejnik(input) {
//     let index = 0;
//     let name = input[index];
//     index++;
//     let grade = Number(input[index]);
//     index++;
//     let totalGrades = 0;
//     let count = 0;

//     while (index <= input.length) {
//         totalGrades += grade;
//         grade = Number(input[index]);
//         index++;
//         count++;
//         if (grade < 4) {
//             console.log(`${name} has been excluded at ${count} grade`);
//             break;
//         } else if (grade >= 4) {
//             continue;
//         }
//         console.log(`${name} graduated. Average grade: ${(totalGrades / (input.length - 1)).toFixed(2)}`);
//     }
// }
// belejnik(["Gosho",
//     "5",
//     "5.5",
//     "6",
//     "5.43",
//     "5.5",
//     "6",
//     "5.55",
//     "5",
//     "6",
//     "6",
//     "5.43",
//     "5"])

function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;

    let badGradeCount = 0;
    let sumOfGrades = 0;
    let i = 1;
    let hasExcluded = false;

    while (i <= 12) {
        let grade = Number(input[index]);
        index++;

        if (grade < 4) {
            badGradeCount++;
            if (badGradeCount === 2) {
                console.log(`${name} has been excluded at ${i} grade`);
                hasExcluded = true;
                break;
            }
            continue;
        }
        sumOfGrades += grade;
        i++;
    }
    if (!hasExcluded) {
        let avgGrade = sumOfGrades / 12;
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
}
graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])