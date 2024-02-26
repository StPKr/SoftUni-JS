// function check(input) {
//     let examHour = Number(input[0]);
//     let examMin = Number(input[1]);
//     let arrivalH = Number(input[2]);
//     let am = Number(input[3]);
//     let sh = examHour - arrivalH;
//     let sm = examMin - am;
//     if (sh === 0) {
//         if (examMin > am && sm > 30) {
//             console.log("Early");
//         } else if (examMin > am &&  sm <= 30) {
//             console.log("On time");
//         } else if (examMin < am) {
//             console.log("Late");
//         }
//     } else if (sh < 0){
//         console.log("Late");
//     } else if (sh > 1){
//         console.log("Early");
//     } else if (sh > 0){
//        if (examMin >= am){
//         console.log("Early")
//        } else if (examMin < am && (am - examMin) < 30){
//         console.log("Early");
//        } else if (examMin < am && (am - examMin) >= 30){
//         console.log("On time")
//        }
//     }
//     if (examHour > arrivalH && examHour - arrivalH < 1){
//         console.log(`(mm) minutes before the start`)
//     } else if (examHour > arrivalH && examHour - arrivalH >= 1){
//         consoloe.log(`hh:mm hours before the start`)
//     } else if (examHour <=)
// }
// check(["9", "25", "8", "55"])

function check(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMin = Number(input[3]);
    let totExam = examHour * 60 + examMin;
    let totArrival = arrivalHour * 60 + arrivalMin;
    let remainHour = 0;
    let remainMinutes = 0;

    if (totExam - totArrival > 30) {
        console.log('Early');
        remainHour = Math.floor((totExam - totArrival) / 60);
        remainMinutes = totExam - totArrival - (remainHour * 60);
        if (remainHour <= 0) {
            console.log(`${remainMinutes} minutes before the start`);
        } else {
            console.log(`${remainHour}:${remainMinutes.toString().padStart(2, '0')} hours before the start`);
        }
    } else if (totExam - totArrival >= 0) {
        console.log('On time');
        remainHour = Math.floor((totExam - totArrival) / 60);
        remainMinutes = totExam - totArrival - (remainHour * 60);
        if (totArrival !== totExam) {
            console.log(`${remainMinutes} minutes before the start`);
        }
    } else {
        console.log('Late');
        remainHour = Math.floor((totArrival - totExam) / 60);
        remainMinutes = totArrival - totExam - (remainHour * 60);
        if (remainHour <= 0) {
            console.log(`${remainMinutes} minutes after the start`);
        } else {
            console.log(`${remainHour}:${remainMinutes.toString().padStart(2, '0')} hours after the start`);
        }
    }
}
check(["16", "00", "15", "00"])
