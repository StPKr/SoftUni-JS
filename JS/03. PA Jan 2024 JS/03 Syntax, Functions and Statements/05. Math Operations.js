function solve(a, b, sign) {
    let result = 0;
    switch (sign) {
        case "+": result = a + b;
            break;
        case "-": result = a - b;
            break;
        case "*": result = a * b;
            break;
        case "/": result = a / b;
            break;
        case "%": result = a % b;
            break;
        case "**": result = a ** b;
            break;
    }
    console.log(result)
};
solve(4, 5, "%")