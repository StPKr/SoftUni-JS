function sum(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);
    let delay = Math.floor(distance / 15 )* 12.5;
    let time = distance * timePerMeter + delay;
    if (time >= record) {
        console.log(`No, he failed! He was ${(time - record).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    }
}
sum(["55555.67", "3017", "5.03"])