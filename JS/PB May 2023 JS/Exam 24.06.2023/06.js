function check(input) {
    let command = input[0];
    let firstNumber = Number(command[2]);
    let secondNumber = Number(command[1]);
    let thirdNumber = Number(command[0]);
    for (let i = 1; i <= firstNumber; i++) {
        for (let j = 1; j <= secondNumber; j++) {
            for (let k = 1; k <= thirdNumber; k++) {
                console.log(`${i} * ${j} * ${k} = ${i*j*k};`)
            }
        }
    }

}
check(["324"])