function add(num) {
    let sum = num;

    function calc(num2) {
        sum += num2;
        return calc;
    }

    calc.toString = function () {
        return sum;
    };
    return calc;
}
// add(1)
add(1)(6)(-3)