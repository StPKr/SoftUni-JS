function solve(arr1, arr2) {
    let newArray = arr1.slice(0, arr2[0]);
    newArray.splice(0, arr2[1]);
    let counter = 0;
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] === arr2[2]) {
            counter++;
        }
    }
    console.log(`Number ${arr2[2]} occurs ${counter} times.`)
}
solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);
