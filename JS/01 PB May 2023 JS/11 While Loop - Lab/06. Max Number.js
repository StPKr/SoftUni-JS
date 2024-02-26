function maxNumer(input) {
    let index = 0;
    let maxNumber = Number.MIN_SAFE_INTEGER;
    // let maxNumber = Number(input[0]) - друг вариант, разликата е какво ще се отпечата в конзолата ако няма елементи в масива накрая
    let command = input[index];
    index++;
    while (command !== "Stop") {
        let num = Number(command);

        if (maxNumber < num) {
            maxNumber = num;
        }
        command = input[index];
        index++;
    }
    console.log(maxNumber);
}
maxNumer(["100",
    "99",
    "80",
    "70",
    "Stop"])
