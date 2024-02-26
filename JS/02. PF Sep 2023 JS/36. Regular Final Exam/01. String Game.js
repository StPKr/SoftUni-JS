function solve(inputArr) {
    let text = inputArr.shift();
    let command = inputArr.shift();
    while (command !== "Done") {
        let tokens = command.split(" ");
        let action = tokens[0];
        let value = tokens[1];
        let replacement = tokens[2];
        switch (action) {
            case "Change":
                while (text.includes(value)) {
                    text = text.replace(value, replacement);
                }
                console.log(text);
                break;
            case "Includes":
                if (text.includes(value)) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            case "End":
                if (text.endsWith(value)) {
                    console.log("True");
                }
                else {
                    console.log("False");
                }
                break;
            case "Uppercase":
                text = text.toUpperCase();
                console.log(text);
                break;
            case "FindIndex":
                console.log(text.indexOf(value));
                break;
            case "Cut":
                text = text.slice(value, Number(value) + Number(replacement));
                console.log(text);
                break;
        }
        command = inputArr.shift();
    }
}
solve(["//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"]);
// solve(["*S0ftUni is the B3St Plac3**",
//     "Change 2 o",
//     "Includes best",
//     "End is",
//     "Uppercase",
//     "FindIndex P",
//     "Cut 3 7",
//     "Done"])

