function solve(text, startIndex, count) {
    let substring = text
        .substring(startIndex, startIndex + count);
    console.log(substring);
}
solve('ASentence', 1, 8)