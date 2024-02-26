function move(input) {
    let index = 0;
    let length = Number(input[index]);
    index++;
    let width = Number(input[index]);
    index++;
    let heigth = Number(input[index]);
    index++;
    let volume = length * width * heigth;
    let checker = input[index];
    let pieces = 0;
    while (index < input.length) {
        if (checker != "Done") {
            pieces = Number(checker);
            volume -= pieces;
            index++;
            checker = input[index];
        } else {
            break;
        }
    }
    if (volume < 0) {
        console.log(`No more free space! You need ${0 - volume} Cubic meters more.`);
    } else {
        console.log(`${volume} Cubic meters left.`)
    }
}
move(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"]);