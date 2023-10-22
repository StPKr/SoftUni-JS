function schoolLibrary(inputArray) {
    let shelf = inputArray.shift().split("&");
    for (let i = 0; i < inputArray.length; i++) {
        let [command, value, value2] = inputArray[i].split("|");
        switch (command) {
            case "Add Book ":
                let startAddition = value.trim();
                if (!shelf.includes(startAddition)) {
                    shelf.unshift(startAddition);
                }
                break;
            case "Take Book ":
                let removal = value.trim();
                if (shelf.includes(removal)) {
                    shelf.splice(shelf.indexOf(removal), 1);
                }
                break;
            case "Swap Books ":
                let book1 = value.trim();
                let book2 = value2.trim();
                if (shelf.includes(book1) && shelf.includes(book2)) {
                    let indexOfBook1 = shelf.indexOf(book1);
                    let indexOfBook2 = shelf.indexOf(book2);
                    shelf[indexOfBook1] = book2;
                    shelf[indexOfBook2] = book1;
                }
                break;
            case "Insert Book ":
                let endAddition = value.trim();
                if (!shelf.includes(endAddition)) {
                    shelf.push(endAddition);
                }
                break;
            case "Check Book ":
                let indexToCheck = Number(value.trim());
                if (indexToCheck <= shelf.length - 1) {
                    console.log(shelf[indexToCheck]);
                }
                break;
            case "Done":
                console.log(shelf.join(", "))
                break;
        }
    }
}
// schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
//     "Add Book | Ulysses",
//     "Take Book | Don Quixote",
//     "Insert Book | Alice's Adventures in Wonderland",
//     "Done"]);
schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    "Add Book | Catch-22",
    "Swap Books | Anna Karenina | Catch-22",
    "Take Book | David Copperfield",
    "Done"]);