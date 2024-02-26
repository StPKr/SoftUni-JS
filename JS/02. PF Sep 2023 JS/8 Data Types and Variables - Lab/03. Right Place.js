function solve(str, char, result) {
    let res = str.replace(`_`, char); // replaces the FIRST occurence of the "_"
    let output = res === result ? "Matched" : "Not Matched";
    console.log(output);
}
solve('Str_ng', 'I', 'Strong')

// Beginer solution
// function solve(str, char, result) {
//     let res = '';

//     // Loop through each character in the input string
//     for (let i = 0; i < str.length; i++) {
//         // If the current character is an underscore, add the replacement character
//         if (str[i] === '_') {
//             res += char;
//         } else {
//             // Otherwise, keep the original character
//             res += str[i];
//         }
//     }

//     if (res === result) {
//         console.log("Matched");
//     } else {
//         console.log("Not Matched");
//     }
// }

// solve('Str_ng', 'I', 'Strong');