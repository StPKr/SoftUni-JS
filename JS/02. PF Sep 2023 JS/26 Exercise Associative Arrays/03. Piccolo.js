function solve(input) {
    let mySet = new Set();
    for (let el of input) {
        let [direction, carNumber] = el.split(", ");
        if (direction === "IN") {
            mySet.add(carNumber);
        } else {
            mySet.delete(carNumber);
        }
    }
    if (mySet.size > 0) {
        let sortedArray = Array.from(mySet).sort();
        console.log(sortedArray.join("\n"))
    } else {
        console.log("Parking Lot is Empty");
    }
}
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)