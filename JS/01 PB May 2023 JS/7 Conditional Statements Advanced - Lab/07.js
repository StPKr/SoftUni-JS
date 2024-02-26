function check(input) {
    let h = Number(input[0]);
    let d = input[1];
    if (h >= 10 && h <= 18) {
        switch (d) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday": console.log("open"); break;
            default: console.log("closed"); break;
        }
    } else {
        console.log("closed")
    }
}
check(["19", "Monday"])