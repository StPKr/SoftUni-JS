function deleteByEmail() {
    const input = document.querySelector('[name="email"]');
    const table = document.getElementById('customers');
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    let result = "Not found.";
    for (let row of rows) {
        if (row.children[1].textContent == input.value) {
            row.remove();
            result = "Deleted";
        }
    }
    const output = document.getElementById('result');
    output.textContent = result;
}