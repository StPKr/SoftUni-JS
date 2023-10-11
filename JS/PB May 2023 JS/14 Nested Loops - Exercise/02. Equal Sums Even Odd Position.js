function sum(input) {
    let firstNum = Number(input[0]);
    let secondNUm = Number(input[1]);
    let printLine = ""; // за да изкараме стрингове от конзолата накрая
    for (let i = firstNum; i <= secondNUm; i++) {
        let currentNum = "" + i; // за да стане стринг пак
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j <= currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }

        }
        if (oddSum === evenSum) {
            printLine += `${i} `
        }
    }
    console.log(printLine);
}
sum(["100000",
    "100050"]);
