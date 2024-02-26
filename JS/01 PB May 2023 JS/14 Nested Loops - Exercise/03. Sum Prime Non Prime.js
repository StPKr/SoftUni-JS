// function array(input) {
//     let index = 0;
//     let currentInput = input[index];
//     let sumOfPrime = 0;
//     let sumOfOther = 0;
//     let isPrime = true;
//     while (currentInput != "stop") {
//         let number = Number(currentInput);
//         if (number < 0) {
//             console.log("Number is negative.")
//         }
//         for (let j = 2; j < number; j++) {
//             if (number % j === 0) {
//                 isPrime = false;
//             }
//         }
//         if (isPrime) {
//             sumOfPrime += number;

//         } else {
//             sumOfOther += number;
//             isPrime = true;
//         }
//         index++;
//         currentInput = input[index];
//     }
//     console.log(`Sum of all prime numbers is: ${sumOfPrime}`);
//     console.log(`Sum of all non prime numbers is: ${sumOfOther}`);
// }
// array(["3",
//     "9",
//     "0",
//     "7",
//     "19",
//     "4",
//     "stop"])

function demo(input) {
    let sumSimpleNums = 0;
    let sumComplexNums = 0;
    let index = 0;
    let currentInput = input[index];
    let isComplex = false;

    while (currentInput != "stop") {
        let number = Number(currentInput);

        if (number < 0) {
            console.log("Number is negative.");
            index++;
            currentInput = input[index];
            continue;
        }
        else {
            for (let i = 2; i < number; i++) {
                if (number % i === 0) {
                    isComplex = true;
                    break;
                }
            }
        }
        if (isComplex) {
            sumComplexNums += number;
            isComplex = false;
        }
        else {
            sumSimpleNums += number;
        }
        index++;
        currentInput = input[index];
    }
    console.log(`Sum of all prime numbers is: ${sumSimpleNums}`);
    console.log(`Sum of all non prime numbers is: ${sumComplexNums}`);
}
demo(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])