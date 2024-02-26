function addItem() {
    const input = document.getElementById('newItemText');
    const text = input.value;

    if (input.value.length == 0) {
        return;
    } // - stops the button from adding an empty field if there is no input

    const liElement = document.createElement('li');
    liElement.textContent = text;
    const list = document.getElementById('items');
    list.appendChild(liElement);
    input.value = "";
}