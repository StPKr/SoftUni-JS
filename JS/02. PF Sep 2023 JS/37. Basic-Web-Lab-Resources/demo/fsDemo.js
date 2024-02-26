let fs = require ('fs');

// let data = fs.readFileSync('./output.txt');
// console.log(data.toString());

// let person = {
//     name: "Peter",
//     age:21
// };

// let data = [ person ];
// fs.writeFileSync('./data.json', JSON.stringify(data)); 
let data = JSON.parse(fs.readFileSync('./data.json'));

console.log(data[0].name);

let person = {
    name: "John",
    age: 23
};
data.push(person);

console.log(data);
fs.writeFileSync('./data.json', JSON.stringify(data));