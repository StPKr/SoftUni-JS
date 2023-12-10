function solve(number) {
    let shiftedNumber = number >> 1;
    let lsb = shiftedNumber & 1;

    console.log(lsb);
}
solve(51);