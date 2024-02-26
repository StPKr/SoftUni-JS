function subtract() {
    debugger
    const num1 = Number(document.getElementById('firstNumber').value);
    const num2 = Number(document.getElementById('secondNumber').value);
    const sum = num1 - num2;
    document.getElementById("result").textContent = sum;
}