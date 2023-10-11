function solve(arr1, arr2) {
    let commonElement = "";
    for (let i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                commonElement = arr1[i];
                console.log(commonElement)
            } else {
                continue;
            }
        }
    }
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);