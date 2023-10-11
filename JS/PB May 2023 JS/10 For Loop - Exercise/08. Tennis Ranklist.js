function tennis(input) {
    let numberOfTournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let wonTournaments = 0;
    let pointsFromTournaments = 0
    let totalPoints = 0;
    for (let i = 2; i < input.length; i++) {
        let position = input[i];
        if (position === "W") {
            pointsFromTournaments += 2000;
            wonTournaments++;
        } else if (position === "F") {
            pointsFromTournaments += 1200;
        } else if (position === "SF") {
            pointsFromTournaments += 720;
        }
    }
    totalPoints = pointsFromTournaments + startingPoints;
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(pointsFromTournaments / numberOfTournaments)}`);
    console.log(`${(wonTournaments / numberOfTournaments * 100).toFixed(2)}%`);
}
tennis(["5", "1400", "F", "SF", "W", "W", "SF"])
