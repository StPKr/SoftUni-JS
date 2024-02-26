function solve(input) {
    let arrayOfWords = input.split(" ").filter(x => x.startsWith('#') && x.length > 1);
    for (let word of arrayOfWords) {
        word = word.slice(1);
        let isValid = true;
        for (let char of word) {
            if (!/[A-Za-z]/.test(char)) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            console.log(word);
        }
    }
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');