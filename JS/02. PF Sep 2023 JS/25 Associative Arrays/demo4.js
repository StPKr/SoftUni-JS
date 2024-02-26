let myMap = new Map();

console.log(myMap);

myMap.set('Peter', '+1-555-2934');
myMap.set('John', '+1-555-0789');

console.log(myMap.get('Peter'));
console.log(myMap['Peter']);
console.log(myMap.has('John'));

for (let entry of myMap){
    console.log(entry);
}

console.log(myMap.keys());