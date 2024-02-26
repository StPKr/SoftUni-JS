let myAssocArray = {};
// let key = 'John Smith';
myAssocArray ={
    'John Smith' : '+1-555-81374',
    'Ana Peters': '+1-555-921932',
    'Ivan Petrov': '+1-555-224212'
} 
console.log(myAssocArray)

// let keys = Object.keys(myAssocArray);
// for (let key of keys){} 
// for (let key of Object.keys(myAssocArray)){} 
// let etnries = Object.entries(myAssocArray);
// for (let entry of entries){}
// console.log(entry[0], '->', entry[1]);
// console.log(entry.join('->'));
// for (let [key, value] of Object.entries(myAssocArray)){
//     console.log(key, '->', value);
// }
for (let key in myAssocArray){
    console.log(key, "->", myAssocArray[key]);
}