function solve(numberedArr) {
    let sum = 0;
    let sortedArray = numberedArr.sort((a, b) => a - b);
    let lowestElement = sortedArray.slice(0, 1);
    let dayValueArr = [];
    while (lowestElement < 30) {
        let dailyAmountCounter = 0;
        for (let i = 0; i < numberedArr.length; i++) {
            if (numberedArr[i] < 30) {
                numberedArr[i]++;
                sum += 195;
                dailyAmountCounter++;
            }
        }
        dayValueArr.push(dailyAmountCounter * 195) 
        lowestElement++;
    }
    console.log(dayValueArr.join(", "));
    console.log(sum * 1900 + " pesos");
}
solve([21, 25, 28]);
// solve([17]);