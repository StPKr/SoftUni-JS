let myVar = 5;
console.log(myVar);
modifyVar(myVar);
console.log(myVar);

function modifyVar(externalVar) {
    externalVar++;
    console.log(externalVar);
}
// reference type example; the above only changes the value inside the function;
// the below changes the original object since the variable in the function only holds the 
// address to that object not a copy of the object itself

let person = {
    name: 'Peter',
    age: 23
};
console.log(person);
modify(person);
console.log(person)

function modify(obj) {
    obj.name = 'George';
    console.log(obj)
}