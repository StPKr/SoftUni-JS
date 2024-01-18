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
// let list = {
//     a: [1, 2, 3],
//     b: 5
// }
// list.a.push(4);
// list.b++;
// console.log(list.a);
// console.log(list.b);

// let obj = {
//     "a": ["test"],
//     "b": "lala",
// }
// obj.a.push("boom")
// obj.b += "ping"
// let set = new Set([1, 2, 3]);
// obj.c = set
// console.log(obj.a)
// console.log(obj.b)
// console.log(obj.c)

// const list = {
//     Bulgaria: {
//         Lukovit: 10,
//         Sofia: 200,
//         Test: 50
//     }
// }
// list["Serbia"] = {
//     "Town": 60
// }
// // list["Serbia"] = {
// //     "Test": [40]
// // }
// if ("T" in list["Serbia"]) {
//     console.log("True")
// }
// // list["Serbia"]["Test"].push(50)
// console.log(list["Serbia"]["Town"])

// let string = "1,2,3,4,5,,6";
// let a = string.split(",");
// let b = string.split(/,/g);
// let c = string.split(/,/);
// console.log(a);
// console.log(b);
// console.log(c);
// let list = {
//     London: {
//         pop: 1000,
//         gold: 20
//     },
//     Sofia: {
//         pop: 200,
//         gold: 5
//     }
// }
// console.log(list['London']["pop"]);
// console.log(Object.values(list.London))

// function test(...input) {
//     console.log(input[4])
// }
// test(1, 2, 3)
// test(1, 2, 3, 4, 5, 6)

// let a = 5;
// let b = 12;
// a < b ? console.log(true) : console.log(false);

// let array = ["test", "mest", "best"];
// console.log(array)
// let file = JSON.stringify(array);
// console.log(file)

// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)

// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }
// console.log(numbers)