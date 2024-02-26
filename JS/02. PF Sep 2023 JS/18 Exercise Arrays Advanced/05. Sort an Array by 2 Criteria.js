function solve(arr) {
    // arr.sort();
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(arr.join("\n"))
}
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);