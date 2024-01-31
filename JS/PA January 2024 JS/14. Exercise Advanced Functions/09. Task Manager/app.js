function solve() {
    const formRef = document.querySelector('form');
    const [addTask, openTask, inProgress, completeTask] = document.querySelectorAll('section');

    formRef.addEventListener('click', onSubmithandler);

    function onSubmithandler(e) {
        e.preventDefault();
        let formElements = formRef.elements;
        let taskName = formElements[0].value;
        let desc = formElements[1].value;
        let date = formElements[2].value;

        if (!taskName || !desc || !date) {
            return;
        }
        createArticle(taskName, desc, date);
    }
    function createArticle(name, desc, date) {
        let newArticle = document.createElement("article");
        newArticle.innerHTML = getArticleTemp(name, desc, date);
        openTask.children[1].appendChild(newArticle);
        addEventListenerToButton();
    }

    function addEventListenerToButton(btns) {
        Array.from(btns).forEach(btn => btn.addEventListener('click', clickhandler));
    }

    function getArticleTemp(name, desc, date) {
        let btnsPartial = getBtnPartial();
        return `<h3>${name}</h3>` +
            `<p>Description: ${desc}</p>` +
            `<p>Due Date: ${date}</p>` +
            getBtnPartial()
    }

    function getBtnPartial() {
        return `<div class="flex">` +
            `<button class="green">Start</button>` +
            `<button class="red">Delete</button>` +
            `</div>`
    }
}