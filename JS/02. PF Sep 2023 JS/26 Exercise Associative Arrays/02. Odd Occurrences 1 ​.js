function solve(input) {
    let array = input.split(" ");
    let list = {};
    let oddCountWords = [];

    for (let element of array) {
        if (list.hasOwnProperty(element.toLowerCase())) {
            list[element.toLowerCase()]++;
        } else {
            list[element.toLowerCase()] = 1;
            oddCountWords.push(element.toLowerCase());
        }
    }
    let output = "";
    for (let el of oddCountWords) {
        if (list[el] % 2 !== 0) {
            output += el + " ";
        }
    }
    console.log(output);
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');