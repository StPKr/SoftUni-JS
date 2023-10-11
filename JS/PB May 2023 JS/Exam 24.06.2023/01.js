function check(input) {
    let processorPrice = Number(input[0]);
    let videoCardPrice = Number(input[1]);
    let ramPrice = Number(input[2]);
    let numberOfRams = Number(input[3]);
    let discount = Number(input[4]);
    let requiredPrice = 0;
    requiredPrice = (processorPrice*1.57 + videoCardPrice* 1.57) * (1-discount) + ramPrice*numberOfRams*1.57;
    console.log(`Money needed - ${requiredPrice.toFixed(2)} leva.`)

}
check(["500",
    "200",
    "80",
    "2",
    "0.05"])
