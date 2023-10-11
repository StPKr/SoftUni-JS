function check(input) {
    let index = 0;
    let condition = input[index];
    let metersClimed = Number(input[index]);
    let daysCounter = 1;
    let totalMetersClimbed = 5364;
    while (condition != "END") {

        if (condition === "Yes") {
            daysCounter++;

        }
        if (daysCounter > 5) {
            console.log("Failed!")
            console.log(totalMetersClimbed);
            break;
        }
        index++;
        metersClimed = Number(input[index]);
        totalMetersClimbed += metersClimed;
        index++
        condition = input[index];
        if (totalMetersClimbed >= 8848) {
            console.log(`Goal reached for ${daysCounter} days!`);
            break;
        }

    }
    if (condition === "END") {
        console.log("Failed!")
        console.log(totalMetersClimbed);
    }
}
check(["Yes",
"1000",
"Yes",
"945",
"No",
"1200",
"END"])
