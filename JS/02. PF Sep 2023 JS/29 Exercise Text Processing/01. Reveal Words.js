function solve(words, text) {
    let wordsArray = words.split(", ");
    for (let word of wordsArray) {
        text = text.replace("*".repeat(word.length), word);
    }
    console.log(text);
}
solve('great',
    'softuni is ***** place for learning new programming languages'
);