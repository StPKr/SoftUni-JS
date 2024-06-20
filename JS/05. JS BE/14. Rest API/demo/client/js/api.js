const output = document.getElementById('output');
const details = document.getElementById('details');
const create = document.getElementById('create');
const button = document.querySelector('button');

button.addEventListener('click', getData);

async function getData() {
    const response = await fetch('/data');
    const data = await response.json();

    output.innerHTML = data.map(r => `<p id="${r._id}">${r.name} <a href="#" class="details">[Details]</a><a href="#" class="delete">[Delete]</a></p>`).join('');
}

output.addEventListener('click', onRecordClick);

function onRecordClick({ target }) {
    if (target.tagName != 'A') {
        return;
    }

    const id = target.parentElement.id;

    if (target.className == 'details') {
        getDetails(id);
    } else if (target.className == 'delete') {
        deleteData(id);
    }
}

async function getDetails(id) {
    const response = await fetch('/data/' + id);

    if (response.status == 404) {
        details.querySelector('p').textContent = `Object not found ${id}`;
        details.querySelector('p').style.display = 'block';

        details.querySelector('[name="_id"').value = '';
        details.querySelector('[name="name"').value = '';
        details.querySelector('[name="age"').value = '';

        return;
    }

    details.querySelector('p').style.display = 'none';

    const data = await response.json();
    details.querySelector('[name="_id"').value = data._id;
    details.querySelector('[name="name"').value = data.name;
    details.querySelector('[name="age"').value = data.age;
}

details.addEventListener('submit', saveData);

async function saveData(e) {
    e.preventDefault();

    const formData = new FormData(details);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('/data/' + data._id, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    details.querySelector('p').style.display = 'block';
    if (response.ok) {
        details.querySelector('p').textContent = `Changes saved`;
    } else {
        details.querySelector('p').textContent = `Error occured`;
    }
}

create.addEventListener('submit', createData);

async function createData(e) {
    e.preventDefault();

    const formData = new FormData(create);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('/data', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    create.querySelector('p').style.display = 'block';
    if (response.ok) {
        create.querySelector('p').textContent = `Record created`;
    } else {
        create.querySelector('p').textContent = `Error occured`;
    }
}

async function deleteData(id) {
    if (!confirm('Are you sure?')) {
        return;
    }
    
    const response = await fetch('/data/' + id, {
        method: 'delete'
    });

    if (response.ok) {
        document.getElementById(id).innerHTML = `Deleted`;
    } else {
        alert('Error deleting record' + id);
    }
}
