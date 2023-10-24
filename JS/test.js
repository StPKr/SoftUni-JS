// function solve(input){
// let i = 0;
// let check = input[i];
// i++;

// while (check != "Stop"){
//     console.log(i);
//     check = input[i];
//     i++;
// }
// }
// solve(["1", "2", "Stop"])

// function test(input){
//     let a = Number(input[0]);
//     let b = Number(input[1]);
//     console.log(a);
//     console.log(b);


// }
// test(["5", "Text"])

// function check(input){

// }
// check([])

// function isLetter(char){
//     return ( (char >= 'A' &&  char <= 'Z') ||
//              (char >= 'a' &&  char <= 'z') );
// }


// console.log(isLetter("a"));
// console.log(isLetter(3));
// console.log(isLetter("H"));

// function check(input){
//     let i = /[a-zA-Z]/;
//     let a = input[0];
//     if (i.test(a)){
//     console.log(a);
//     }
// }
// check(["R", "3"])

// m = 5.0100
// console.log(parseFloat(m))

// function timesFive(num){
//     return num*5;
//   }
//   let answer = timesFive(4)
//   console.log(answer)

// let n = "15"
// console.log(n[n.length - 2])

/* let a = 5;
let b = 5.5;

console.log(a % 1) //=== 0 - Integer
console.log(b % 1) //!= 0 - Float */

/* arr = [1,2,3,4,5];
console.log(arr); // length and the array might only be visible for me
console.log(arr[0]);
console.log(arr.toString())
console.log(arr.join(" ")) */

// let numbers = [ 1, 2, 3, 4, 5 ];
// let output = '';
// for (let number of numbers)
//  output += `${number} `;
// console.log(output);

// let arr = [2, 12, 3, 2, 5, 19]
// arr = arr.map(x => x * 2 > 10 && x % 3 === 0);
// arr.splice(1, 0, [5,6])
// console.log(arr);
// console.log(arr.reduce((a, b) => a + b));

// let arr = ["one", "two", "three"];
// arr.splice(arr.indexOf("two"), 1, "four");
// arr.splice(arr.indexOf("two"), 1);
// console.log(arr)

// let a = Math.random()*11;
// console.log(Math.floor(a))

// function countup(n) {
//     if (n < 1) {
//       return [];
//     } else {
//       const countArray = countup(n - 1);
//       countArray.unshift(n);
//     //   countArray.push(n);
//       return countArray;
//     }
//   }
//   console.log(countup(5));

// function rangeOfNumbers(startNum, endNum) {
//     if (startNum > endNum) {
//         return [];
//     } else {
//         const countArray = rangeOfNumbers(startNum, endNum - 1);
//         countArray.push(endNum);
//         return countArray;
//     }
// }