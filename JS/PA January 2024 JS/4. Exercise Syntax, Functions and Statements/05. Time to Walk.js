function solve(steps, foot, speed) {
    let speedInMPerS = speed / 3.6;
    let distance = steps * foot;
    let timeInS = distance / speedInMPerS;
    let rest = Math.floor(distance / 500);
    let totalTime = timeInS + rest * 60;
    let hours = 0;
    let minutes = Math.floor(totalTime / 60);
    if (minutes >= 60) {
        hours = minutes / 60;
    };
    let seconds = Math.round(totalTime % 60);
    console.log(`${(String(hours)).padStart(2, "0")}:${(String(minutes)).padStart(2, "0")}:${(String(seconds)).padStart(2, "0")}`)
}
solve(4000, 0.60, 5);