function library(input) {
    let index = 0;
    let book = input[index];
    index++;
    let checker = input[index];
    index++;
    let counter = 0;
    while (index <= input.length) {
        if (checker !== "No More Books" && checker !== book) {
            checker = input[index];
            index++;
            counter++;
            continue;
        } else if (checker === "No More Books") {
            console.log("The book you search is not here!");
            console.log(`You checked ${counter} books.`)
            break;
        } else if (checker = book) {
            console.log(`You checked ${counter} books and found it.`)
            break;
        }
    }
}
library(["Troy",
    "Stronger",
    "Life Style",
    "No More Books",
    "Troy",
])
