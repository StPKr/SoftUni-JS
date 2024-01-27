function attachEventsListeners() {
    const btn = document.getElementById('convert');
    const inputFieldRef = document.getElementById('inputDistance');
    const outputFieldRef = document.getElementById('outputDistance');

    btn.addEventListener('click', convert);

    function convert() {
        let inputDistance = Number(inputFieldRef.value);
        let inputMenuRef = document.getElementById('inputUnits').value;
        let distanceAfterFirstConversion = convertToMeters(inputDistance, inputMenuRef);
        let outputMenuRef = document.getElementById('outputUnits').value;
        let outputDistance = convertFromMeters(distanceAfterFirstConversion, outputMenuRef)

        outputFieldRef.value = outputDistance;
    }

    function convertToMeters(x, unit) {
        switch (unit) {
            case "km": x *= 1000; break;
            case "m": break;
            case "cm": x *= 0.01; break;
            case "mm": x *= 0.001; break;
            case "mi": x *= 1609.34; break;
            case "yrd": x *= 0.9144; break;
            case "ft": x *= 0.3048; break;
            case "in": x *= 0.0254; break;
        }
        return x;
    }

    function convertFromMeters(x, unit) {
        switch (unit) {
            case "km": x /= 1000; break;
            case "m": break;
            case "cm": x /= 0.01; break;
            case "mm": x /= 0.001; break;
            case "mi": x /= 1609.34; break;
            case "yrd": x /= 0.9144; break;
            case "ft": x /= 0.3048; break;
            case "in": x /= 0.0254; break;
        }
        return x;
    }
}