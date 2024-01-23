function addItem() {
    const input = document.getElementById('newItemText');
    const text = input.value;

    if (input.value.length == 0) {
        return;
    }
    
    const liElement = document.createElement('li');
    liElement.textContent = text;
    const list = document.getElementById('items');
    list.appendChild(liElement);
    input.value = "";
}