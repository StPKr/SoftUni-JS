function check(input) {
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let totalNumberOfPeople = 0;
    for (let i = 1; i < input.length; i++) {
        let numberOfPeople = Number(input[i]);
        totalNumberOfPeople += numberOfPeople
        if (numberOfPeople <= 5) {
            p1 += numberOfPeople;
        } else if (numberOfPeople <= 12) {
            p2 += numberOfPeople;
        } else if (numberOfPeople <= 25) {
            p3 += numberOfPeople;
        } else if (numberOfPeople <= 40) {
            p4 += numberOfPeople;
        } else if (numberOfPeople >= 41) {
            p5 += numberOfPeople;
        }

    }
    console.log(`${(p1 / totalNumberOfPeople * 100).toFixed(2)}%`);
    console.log(`${(p2 / totalNumberOfPeople * 100).toFixed(2)}%`);
    console.log(`${(p3 / totalNumberOfPeople * 100).toFixed(2)}%`);
    console.log(`${(p4 / totalNumberOfPeople * 100).toFixed(2)}%`);
    console.log(`${(p5 / totalNumberOfPeople * 100).toFixed(2)}%`);

}
check(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"])