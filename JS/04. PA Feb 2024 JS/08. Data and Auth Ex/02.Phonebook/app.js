function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const ulRef = document.getElementById('phonebook')
    document.getElementById('btnLoad').addEventListener('click', onLoadAllRecords);
    document.getElementById('btnCreate').addEventListener('click', onCreateRecord);

    async function onCreateRecord(e) {
        let personRef = document.getElementById('person');
        let phoneRef = document.getElementById('phone');

        let person = personRef.value;
        let phone = phoneRef.value;

        if (!person || !phone) {
            return;
        }

        let data = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ person, phone })
        }

        await fetch(url, data);
        personRef.value = "";
        phoneRef.value = "";
        onLoadAllRecords();
    }

    async function onLoadAllRecords(e) {
        let response = await fetch(url);
        let data = await response.json();
        ulRef.innerHTML = "";
        Object.values(data).forEach(rec => {
            createAndAppendLi(rec);
        });
    }

    function createAndAppendLi(data) {
        let li = document.createElement('li');
        li.textContent = `${data.person}: ${data.phone}`;
        let btn = document.createElement('button');
        btn.textContent = "Delelte";
        btn.dataset.id = data._id;
        btn.addEventListener('click', onDelete);

        li.appendChild(btn);
        ulRef.appendChild(li);
    }

    async function onDelete(e) {
        let id = e.target.dataset.id;
        await fetch(url + "/" + id, {
            method: "DELETE"
        });
        onLoadAllRecords();
    }
}

attachEvents();