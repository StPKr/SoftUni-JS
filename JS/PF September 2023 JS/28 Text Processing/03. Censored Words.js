function solve(text, word) {
    let replacement = "";
    for (let i = 0; i < word.length; i++) {
        replacement += "*";
    }
    let replacedText = text.replace(word, replacement);
    console.log(replacedText);
}
solve('A small sentence with some words', 'small');