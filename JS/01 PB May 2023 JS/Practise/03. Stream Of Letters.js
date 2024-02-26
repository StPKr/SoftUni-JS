function check(input) {
    index = 0;
    let command = input[index];
    let word = "";
    let secretWord = "";
    let cCounter = 0;
    let oCounter = 0;
    let nCounter = 0;
    let i = /[a-zA-Z]/;
    while (command != "End") {

        if (cCounter === 1 && oCounter === 1 && nCounter === 1) {
            word += " ";
            cCounter = 0;
            oCounter = 0;
            nCounter = 0;
            secretWord = word;
        } else {
            if (command === "c" && cCounter === 0) {
                cCounter = 1;
                word += "";
                index++;
            } else if (command === "c" && cCounter === 1) {
                word += command;
                index++;
            } else if (command === "o" && oCounter === 0) {
                oCounter = 1;
                word += "";
                index++;
            } else if (command === "o" && oCounter === 1) {
                word += command;
                index++;
            } else if (command === "n" && nCounter === 0) {
                nCounter = 1;
                word += "";
                index++;
            } else if (command === "n" && nCounter === 1) {
                word += command;
                index++;
            } else if (i.test(command)) {
                word += command;
                index++;
            } else {
                word += ""
                index++;
            }
        }
        command = input[index];
    }
    if (cCounter === 1 && oCounter === 1 && nCounter === 1) {
        word += " ";
        cCounter = 0;
        oCounter = 0;
        nCounter = 0;
        secretWord = word;
    }
    console.log(secretWord)
}
check(["o",
    "S",
    "%",
    "o",
    "l",
    "^",
    "v",
    "e",
    "c",
    "n",
    "&",
    "m",
    "e",
    "c",
    "o",
    "n",
    "End"    
])