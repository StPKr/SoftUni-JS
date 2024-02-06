const person = {
    name: 'Peter',
    age: 27
}
console.log(person);
console.log(Object.getOwnPropertyDescriptor(person, "name"));

Object.defineProperty(person, 'name', {
    value: 'Peter',
    writable: false, // makes it read only
    enumerable: false, // can't be iterated
    configurable: false // makes the property non-deletable and locks the other properties of
    // the property except writable and it can only be changed true -> false 
});

person.name = 'John';
console.log(person);
console.log ("=============================");

for (let key in person){
    console.log(key);
}
console.log(Object.keys(person));
console.log ("=============================");
console.log(Object.getOwnPropertyDescriptors(person));