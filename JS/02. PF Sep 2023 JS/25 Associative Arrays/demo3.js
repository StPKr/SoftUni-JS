let mySet = new Set();
console.log(mySet);

mySet.add(5);
console.log(mySet);

mySet.add(3);
mySet.add(5); // won't add a second 5
console.log(mySet);


console.log(mySet.delete(3));
console.log(mySet);

for (let entry of mySet){
    console.log(entry);
}