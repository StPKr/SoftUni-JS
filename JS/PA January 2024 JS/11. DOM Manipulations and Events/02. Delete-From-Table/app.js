function deleteByEmail() {
    const input = document.querySelector('[name="email"]');
    const table = document.getElementById('customers');
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    let success = false;
    for (let row of rows) {
        if (row.children[1].textContent == input.value){
            row.remove();
            success = true;
        }
    }
    const output = document.getElementById('result');
    if (success){
        output.textContent = 'Deleted.';
    } else {

        output.textContent = 'Not found.';
    }
}