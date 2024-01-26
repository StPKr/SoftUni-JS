function addItem() {
    const selectMenuRef = document.getElementById("menu");
    const textInputRef = document.getElementById("newItemText");
    const keyInputRef = document.getElementById("newItemValue");
    let textValue = textInputRef.value;
    let keyValue = keyInputRef.value;
    let option = document.createElement('option');
    option.textContent = textValue;
    option.value = keyValue;
    selectMenuRef.appendChild(option);
    textInputRef.value = "";
    keyInputRef.value = "";
}