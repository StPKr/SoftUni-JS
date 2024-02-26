function solve(number, digit) {
    let counter = 0;
    while (number > 0) {
        let remainder = number % 2;
        number = Math.trunc(number / 2); // removes the floating part
        if (remainder === digit) {
            counter++;
        }
    }
    console.log(counter);
}
solve(20, 0);