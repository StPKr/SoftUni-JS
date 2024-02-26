const person = {
    name: 'Peter',
    age: 27
}

console.log(Object.getOwnPropertyDescriptor(person, "name"));

let country;

Object.defineProperty(person, 'country', {
    enumerable: true, 
    configurable: true,
    get() {
        return country;
    },
    set(value) {
        country = value;
    }
});

console.log(person);
console.log(person.country)

person.country = 'Italy';
console.log(person);