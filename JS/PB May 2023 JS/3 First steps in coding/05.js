function greeting(input) {
    let name = input[0];
    console.log("Hello, " + name + "!");
}
greeting(["Stef"])

//2nd way
function greeting(input) {
    let name = input[0];
    console.log(`Hello, ${name}!`);
}
greeting(["Stef"])