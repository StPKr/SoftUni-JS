function solve(word, text) {
    let arrayOfWords = text.split(" ").map(x => x.toLowerCase());
    if (arrayOfWords.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`)
    }
}
solve('javascript',
    'JavaScript is the best programming language'
)