function exam(input) {
    let index = 0;
    let badCounter = 0;
    let counter = 0;
    let sumOfGrades = 0;
    let limitOfBadGrades = Number(input[index]);
    index++;
    let taskName = input[index];
    let taskGrade = Number(input[index]);
    while (index < input.length) {
        if (index % 2 != 0) {
            taskName = input[index];
            index++
        } else {
            taskGrade = Number(input[index]);
            index++;
            counter++;
            sumOfGrades += taskGrade;
            if (taskGrade <= 4) {
                badCounter++;
                if (badCounter === limitOfBadGrades) {
                    console.log(`You need a break, ${limitOfBadGrades} poor grades.`);
                    break;
                }
            }
        }
        if (input[index] === "Enough") {
            console.log(`Average score: ${(sumOfGrades / counter).toFixed(2)}`);
            console.log(`Number of problems: ${counter}`);
            console.log(`Last problem: ${input[index - 2]}`);
        }
    }
}
exam(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])
