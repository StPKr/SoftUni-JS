function solve() {
    const taskInpuRef = document.getElementById('task');
    const descrInputRef = document.getElementById('description');
    const dateInputRef = document.getElementById('date');
    const addBtn = document.getElementById('add');
    const openDivRef = document.querySelector('.orange');

    addBtn.addEventListener('click', addTask);

    function addTask() {
        const h3 = document.createElement('h3');
        let divSection = openDivRef.parentElement.nextElementSibling;
        h3.innerHTML = "Test";
        divSection.appendChild(h3);
    }
}