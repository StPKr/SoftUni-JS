function solve(initialList) {
    let neighborhood = initialList.shift().split("@").map(Number);
    let index = 0;
    let [command, number] = initialList[index].split(" ");
    let startingPosition = 0;
    while (command !== "Love!") {
        startingPosition += Number(number);
        if (startingPosition > neighborhood.length - 1) {
            startingPosition = 0;
        }
        if (neighborhood[startingPosition] === 0) {
            console.log(`Place ${startingPosition} already had Valentine's day.`)
        } else {
            neighborhood[startingPosition] -= 2;
            if (neighborhood[startingPosition] <= 0) {
                console.log(`Place ${startingPosition} has Valentine's day.`)
                neighborhood[startingPosition] = 0;
            }
        }
        index++;
        [command, number] = initialList[index].split(" ");
    }
    console.log(`Cupid's last position was ${startingPosition}.`);
    let counter = 0;
    for (i = 0; i < neighborhood.length; i++) {
        if (neighborhood[i] != 0) {
            counter++;
        }
    }
    if (counter === 0) {
        console.log("Mission was successful.")
    } else {
        console.log(`Cupid has failed ${counter} places.`)
    }
}
// solve(["10@10@10@2",
//     "Jump 1",
//     "Jump 2",
//     "Love!"]);
solve(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"]);
