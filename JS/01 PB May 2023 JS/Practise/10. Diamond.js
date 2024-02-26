// function check(input) {
//     let n = Number(input[0]);
//     let row = "";
//     for (let i = 1; i <= n; i++) {
//         row += "";
//         for (let j = 1; j <= n; j++ ){
//             row +="*"
//             for (let k = 1; k <= n; k++){
//                 row+= "-"
//             }
//         }
       
//         console.log(row)
//     }
// }
// check(["3"])

function printDiamond(n) {
    // Генерираме горната част на диаманта
    for (let i = 1; i <= n; i++) {
        let row = '';
        // Добавяме интервали в началото на реда
        for (let j = 1; j <= (n - i)/2; j++) {
            row += '-';
        }
        // Добавяме звездички и тирета в средата на реда
        for (let k = 1; k <= 2 * i - 1; k++) {
            if (k % 2 !== 0) {
                row += '*';
            } else {
                row += '-';
            }
        }
        console.log(row);
    }

//     // Генерираме долната част на диаманта
//     for (let i = n - 1; i >= 1; i--) {
//         let row = '';
//         // Добавяме интервали в началото на реда
//         for (let j = 1; j <= n - i; j++) {
//             row += '-';
//         }
//         // Добавяме звездички и тирета в средата на реда
//         for (let j = 1; j <= 2 * i - 1; j++) {
//             if (j % 2 !== 0) {
//                 row += '*';
//             } else {
//                 row += '-';
//             }
//         }
//         console.log(row);
//     }
}

// Примерно извикване на функцията
printDiamond(6);
