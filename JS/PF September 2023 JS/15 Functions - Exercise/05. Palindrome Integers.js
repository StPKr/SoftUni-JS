function solve(array) {
    let check = true;
    for (let element of array) {
        for (let i = 0; i < element.toString().length; i++) {
            let firstNumber = element.toString()[i];
            let lastNumber = element.toString()[element.toString().length - 1 - i];
            if (i > element.toString().length - 1 - i) {
                break
            }
            if (firstNumber === lastNumber){
                check = true;
            } else {
                check = false;
                break;
            }
        } 
        return check;
        
    }
}
solve([123, 323, 421, 121])