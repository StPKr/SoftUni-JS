function cake(input) {
    let index = 0;
    let length = Number(input[index]);
    index++;
    let width = Number(input[index]);
    index++;
    let area = length * width;
    let checker = input[index];
    let pieces = 0;
    while (index < input.length) {
        if(checker != "STOP"){
        pieces = Number(checker);
        area -= pieces;
        index++;
        checker = input[index];
        } else{
            break;
        }
    }
    if (area < 0) {
        console.log(`No more cake left! You need ${0 - area} pieces more.`);
    } else {
        console.log(`${area} pieces are left.`)
    }
}
cake(["10",
    "2",
    "2",
    "4",
    "6",
"STOP"])
