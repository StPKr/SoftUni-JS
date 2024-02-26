function solve(input) {
    let encryptedMessage = input.shift();
    while (input[0] !== "Decode") {
        let tokens = input.shift().split("|");
        let command = tokens[0];
        switch (command) {
            case "Move":
                let numberOfLetters = tokens[1];
                let firstHalf = encryptedMessage.slice(0, numberOfLetters)
                let secondHalf = encryptedMessage.slice(numberOfLetters);
                encryptedMessage = secondHalf + firstHalf;
                break;
            case "Insert":
                let index = tokens[1];
                let value = tokens[2];
                let firstPart = encryptedMessage.slice(0, index)
                let secondPart = encryptedMessage.slice(index);
                encryptedMessage = firstPart + value + secondPart;
                break;
            case "ChangeAll":
                let check = tokens[1];
                let replacement = tokens[2];
                while (encryptedMessage.includes(check)) {
                    encryptedMessage = encryptedMessage.replace(check, replacement);
                }
                break;
        }

    }
    console.log(`The decrypted message is: ${encryptedMessage}`)
}
solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]
)
// solve([
//     'owyouh',
//     'Move|2',
//     'Move|3',
//     'Insert|3|are',
//     'Insert|9|?',
//     'Decode'
// ]
// )