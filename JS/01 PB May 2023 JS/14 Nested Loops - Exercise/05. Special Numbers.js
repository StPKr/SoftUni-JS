// function check(input) {
//     let counter = 0;
//     let control = Number(input[0]);
//     let string = ""
//     let placeholder = ""; // ако го няма излиза ъндефайнд в конзолата понеже събираме ъндефайнд, число и стринг
//     for (let number = 1111; number <= 9999; number++) {
//         let currentNumber = number + "";
//         for (let i = 0; i < currentNumber.length; i++) {
//             let currentDigit = Number(currentNumber.charAt(i));
//             if (control % currentDigit === 0) {
//                 counter++;
//             }
//             if (counter === 4) {
//                 placeholder += currentNumber + " ";
//             }
//         }
//         counter = 0;
//     }
//     console.log(placeholder);
// }
// check(["3"]);

function demo(input) {
    let number = Number(input[0]);
    let result = "";
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            for (let k = 0; k < 9; k++) {
                for (let l = 0; l < 9; l++) {
                    let isSpecial = number % i === 0 &&
                        number % j === 0 &&
                        number % k === 0 &&
                        number % l === 0;
                    if (isSpecial) {
                        result += `${i}${j}${k}${l} `;
                    }

                }
            }
        }
    }
    console.log(result);
}
demo(["3"])
