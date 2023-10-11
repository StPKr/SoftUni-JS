function software(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);

    for (let i = 3; i < input.length; i++) {
        if (i % 2 != 0) {
            let points = i + 1;
            let totalPoints = input[i].length * Number(input[points]) / 2; // Тук не е само *points, става и с input[i+1]
            academyPoints += totalPoints;
        }
        if (academyPoints > 1250.5) {
            break;
        }
    }
    if (academyPoints < 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - academyPoints).toFixed(1)} more!`);
    } else {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
    }
}
software(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);