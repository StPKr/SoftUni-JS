function test(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let sum = 0
    let buff = "";
    for (let i = start; i <= end; i++) {
        if (i % 9 === 0) {
            sum += i;
            buff += i + "\n" // кара всяка итерация да е на нов ред
        }
    }
    console.log("The sum: " + sum);
    console.log(buff);
}
test(["100", "200"])



// Дърварски метод
// function test(input) {
//     let start = Number(input[0]);
//     let end = Number(input[1]);
//     let sum = 0
//     for (let i = start; i <= end; i++) {
//         if (i % 9 === 0) {
//             sum += i;
//         }
//     }
//     console.log("The sum: " + sum);
//     for (let i = start; i <= end; i++) {
//         if (i % 9 === 0) {
//             console.log(i);
//         }
//     }
// }
// test(["100", "200"])