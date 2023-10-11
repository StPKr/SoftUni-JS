function solve(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let [name, onePlaceholder, command, twoPlaceholder] = arr[i].split(" ");
        if (command != "not") {
            if (!newArray.includes(name)) {
                newArray.push(name);
            } else {
                console.log(name + " is already in the list!")
            }
        } else {
            if (!newArray.includes(name)) {
                console.log(name + " is not in the list!")
            }
            newArray = newArray.filter(x => x !== name);

        }
    }
    console.log(newArray.join("\n"))
}
solve(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
);
// solve(['Tom is going!',
//     'Annie is going!',
//     'Tom is going!',
//     'Garry is going!',
//     'Jerry is going!']
// );
