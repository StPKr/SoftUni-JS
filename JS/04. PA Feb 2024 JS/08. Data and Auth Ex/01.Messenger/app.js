function attachEvents() {
    document.getElementById('refresh').addEventListener('click', onLoadMsg);
    document.getElementById('submit').addEventListener('click', onSubmit);
    const url = 'http://localhost:3030/jsonstore/messenger';


    async function onSubmit(e) {
        let nameRef = document.querySelector('input[name="author"]');
        let textRef = document.querySelector('input[name="content"]');
        let name = nameRef.value;
        let text = textRef.value;
        let data = {
            method: 'POST',
            headders: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ author: name, content: text })
        }
        await fetch(url, data);
        onLoadMsg();
        nameRef.value = "";
        textRef.value = "";
    }

    async function onLoadMsg(e) {
        let textAreaRef = document.getElementById('messages');
        textAreaRef.value = "";
        let response = await fetch(url);
        let data = await response.json();
        Object.values(data).forEach(rec => {
            textAreaRef.value += `${rec.author}: ${rec.content}\n`
        });
        textAreaRef.value = textAreaRef.value.trim();
    }
}

attachEvents();