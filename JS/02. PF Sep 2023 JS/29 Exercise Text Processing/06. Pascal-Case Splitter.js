function solve(input) {
    let arrayOfWords = [];
    let word = "";
    for (let ch of input) {
        if (word.length === 0) {
            word += ch;
            continue;
        }
        if (ch === ch.toLowerCase()) {
            word += ch;
        } else {
            arrayOfWords.push(word);
            word = "";
            word += ch;
        }
    }
    if (word.length > 0) {
        arrayOfWords.push(word);
    }
    console.log(arrayOfWords.join(", "))
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
