function solve(inputArr) {
    let n = Number(inputArr.shift());
    let pattern = /!(?<command>[A-Z][a-z]{3,})!:\[(?<text>[A-Za-z]{8,})\]/g;
    for (let el of inputArr) {
        let match = pattern.exec(el);
        if (match) {
            let command = match.groups.command;
            let text = match.groups.text;
            let string = "";
            for (let ch of text){
                string += " " + ch.charCodeAt();
            }
            console.log(command + ":" + string);
        } else {
            console.log("The message is invalid");
        }
    }
}
solve(["2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"]);
// solve(["3",
//     "go:[outside]",
//     "!drive!:YourCarToACarWash",
//     "!Watch!:[LordofTheRings]"]);

