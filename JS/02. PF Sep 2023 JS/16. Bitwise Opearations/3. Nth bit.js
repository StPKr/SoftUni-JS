function solve(number, position) {
    let shiftedNumber = number >> position;
    let lsb = shiftedNumber & 1;

    console.log(lsb);
}
solve(2145, 5);