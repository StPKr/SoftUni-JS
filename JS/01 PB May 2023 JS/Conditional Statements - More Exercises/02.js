function time(input) {
    let rest = Number(input[0]);
    let work = 365 - rest;
    let pt = work * 63 + rest * 127;
    if (pt > 30000) {
        console.log(`Tom will run away`);
        console.log(`${Math.floor((pt - 30000) / 60)} hours and ${(pt - 30000) % 60} minutes more for play`);
    } else {
        console.log(`Tom sleeps well`);
        console.log(`${Math.floor((30000 - pt) / 60)} hours and ${(30000 - pt) % 60} minutes less for play`)
    }
}
time(["20"])