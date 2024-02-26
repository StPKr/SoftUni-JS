function travel(input) {
    let index = 0;
    let destination = input[0];
    index++;
    let neededSum = Number(input[index]);
    index++;
    let gatheredSum = Number(input[index]);
    let total = 0;
    while (destination != "End"){
        while (total < neededSum){
            gatheredSum = Number(input[index]);
            total += gatheredSum;
            index++;
        }
        console.log(`Going to ${destination}!`);
        destination = input[index];
        total = 0;
        index++;
        neededSum = Number(input[index]);
        index++;
    }
}
travel(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"])
