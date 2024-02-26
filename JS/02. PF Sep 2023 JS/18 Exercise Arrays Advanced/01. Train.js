function solve(arr) {
    let numbers = arr.shift().split(" ").map(Number);
    let maxCapacity = Number(arr.shift()); //.split(" ").map(Number); - alternative option
    for (let i = 0; i < arr.length; i++) {
        let [command, amount] = arr[i].split(" ");
        amount = Number(amount);
        switch (command) {
            case "Add":
                add(amount);
                break;
            default:
                command = Number(command);
                sort(command);
                break;
        }
    }
    function add(el) {
        numbers.push(el)
    }
    function sort(el) {
        for (let j = 0; j < numbers.length; j++) {
            let currentCap = numbers[j];
            if (maxCapacity - currentCap !== 0) {
                if (el > maxCapacity - currentCap) {
                    continue;
                } else {
                    let temp = el + currentCap
                    numbers.splice(j, 1, temp);
                    break;
                }
            } else {
                continue;
            }
        }
    }
    console.log(numbers.join(" "));
}
solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)