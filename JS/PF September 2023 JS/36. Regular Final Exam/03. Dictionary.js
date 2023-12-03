function solve(inputArr) {
    let entries = inputArr.shift().split(" | ");
    let words = inputArr.shift().split(" | ");
    let command = inputArr.shift();
    let dictionary = {};
    let counter = 2;
    for (let el of entries) {
        let [word, definition] = el.split(": ");
        if (!dictionary.hasOwnProperty(word)) {
            dictionary[word] = { definition1: definition };
        } else {
            dictionary[word]["definition" + counter] = definition;
            counter++;
        }
    }

    switch (command) {
        case "Test":
            let keys1 = Object.keys(dictionary)
            for (let el of words) {
                if (keys1.includes(el)) {
                    console.log(el + ":");
                    let values = Object.values(dictionary[el]);
                    for (let item of values) {
                        console.log(` -${item}`);
                    }
                }
            }
            break;
        case "Hand Over":
            let keys2 = Object.keys(dictionary);
            console.log(keys2.join(" "));
            break;
    }
}
solve(["programmer: an animal, which turns coffee into code | developer: a magician",
    "fish | domino",
    "Hand Over"]);
solve(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
    "care | kitchen | flower",
    "Test"]);

