function numbers(input) {
    let index = 0
    let target = Number(input[index]);
    index++;
    let sum = 0;
    while (sum < target) {
        let currentNumber = Number(input[index]);
        index++;
        sum += currentNumber;
    }
    console.log(sum);
}
numbers(["100",
    "10",
    "20",
    "30",
    "40"])
