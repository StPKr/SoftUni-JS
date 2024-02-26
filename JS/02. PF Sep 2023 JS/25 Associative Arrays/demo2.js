let myObj = {
    name: 'Peter'
};

console.log(Object.hasOwn(myObj, 'name'));
console.log(Object.hasOwn(myObj, 'age'));

console.log(myObj.hasOwnProperty('name'));
console.log(myObj.hasOwnProperty('age'));