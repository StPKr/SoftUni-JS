function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

let myVar = [10, 20, 30];

function print(){
    console.log(myVar);
}
module.exports = {
    add,
    multiply,
    myVar,
    print
}; // we can access files from anywhere in node, only by 
//declaring that something is public can we access it