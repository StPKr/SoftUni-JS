// function solve(a, b, command) {
//     switch (command) {
//         case "multiply": console.log(a * b); break;
//         case "divide": console.log(a / b); break;
//         case "add": console.log(a + b); break;
//         case "subtract": console.log(a - b); break;

//     }
// }
// solve(5, 5, "multiply")

function solve(a, b, operator) {
    /* ALternative option with arrow funcions. Needs to be at the start
  let multiply = (a, b) => a * b;
  let divide = (a, b) =>  a / b;
  let add = (a, b) => a + b;
  let subtract = (a, b) => a - b;
*/
    switch (operator) {
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
    }
    function multiply(a, b) {
        return a * b;
    }
    function divide(a, b) {
        return a / b;
    }
    function add(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
}
solve(5, 5, "multiply")