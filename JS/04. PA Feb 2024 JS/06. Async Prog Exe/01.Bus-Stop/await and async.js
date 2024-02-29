async function getInfo() {
    const stopIdRef = document.getElementById('stopId');
    const stopId = stopIdRef.value;
    const stopNameRef = document.getElementById('stopName');
    const busesRef = document.getElementById('buses');

    stopNameRef.textContent = "";
    busesRef.innerHTML = "";

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`

    try {
        const response = await fetch(url);
        if (response.status === 204) {
            throw new Error("No content");
        }
        const data = await response.json();
        stopNameRef.textContent = data.name;
        appendChild(Object.entries(data.buses));
    } catch (error) {
        stopNameRef.textContent = "Error";
    }



    function appendChild(data) {
        for ([bus, time] of data) {
            let li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives in ${time} minutes`;
            busesRef.appendChild(li);
        }
    }
}