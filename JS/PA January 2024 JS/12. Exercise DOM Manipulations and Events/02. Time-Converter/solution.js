function attachEventsListeners() {
    const buttons = Array.from(document.querySelectorAll('input[type="button"]'));
    for (let button of buttons) {
        button.addEventListener('click', convert);
    }
    function convert(e) {
        let currentUnitInput = e.currentTarget.parentElement.children[1];
        let value = Number(currentUnitInput.value);
        let unit = currentUnitInput.id;

        switch (unit) {
            case "days": propagateNewValue(value);
                break;
            case "hours": propagateNewValue(value / 24);
                break;
            case "minutes": propagateNewValue(value / 24 / 60);
                break;
            case "seconds": propagateNewValue(value / 24 / 60 / 60);
                break;
        }
    }
    function propagateNewValue(days) {
        let inputs = document.querySelectorAll('input[type="text"]');
        inputs[0].value = days;
        inputs[1].value = days * 24;
        inputs[2].value = days * 24 * 60;
        inputs[3].value = days * 24 * 60 * 60;
    }
}