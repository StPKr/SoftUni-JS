function addItem() {
    const input = document.getElementById('newItemText');
    const text = input.value;

    if (input.value.length == 0) {
        return;
    } // - stops the button from adding an empty field if there is no input

    const liElement = document.createElement('li');
    liElement.textContent = text;

    //begin 03
    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', onDelete);
    liElement.appendChild(deleteBtn);
    //end 03.

    const list = document.getElementById('items');
    list.appendChild(liElement);
    input.value = "";

    function onDelete(event) {
        const deleteBtn = event.target;
        const liElement = deleteBtn.parentElement;
        liElement.remove();
    }
}