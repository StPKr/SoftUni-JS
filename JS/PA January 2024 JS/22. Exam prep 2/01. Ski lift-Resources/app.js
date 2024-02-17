window.addEventListener('load', solve);

function solve() {
    console.log('it works')
    const inputs = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        peopleCount: document.getElementById('people-count'),
        fromDate: document.getElementById('from-date'),
        daysCount: document.getElementById('days-count')
    };

    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onNextClick);

    const infoList = document.querySelector('.ticket-info-list');
    const confirmList = document.querySelector('.confirm-ticket');

    const appendSec = document.getElementById('append-ticket');
    const infoSec = document.getElementById('info-ticket');
    const confirmSec = document.getElementById('confirm-ticket-section');

    const bodySec = document.getElementById('body');

    function onNextClick(event) {
        event.preventDefault();

        if (inputs.firstName.value == '' ||
            inputs.lastName.value == '' ||
            inputs.peopleCount.value == '' ||
            inputs.fromDate.value == '' ||
            inputs.daysCount.value == '') {
            return;
        }

        const firstName = inputs.firstName.value;
        const lastName = inputs.lastName.value;
        const peopleCount = Number(inputs.peopleCount.value);
        const fromDate = inputs.fromDate.value;
        const daysCount = Number(inputs.daysCount.value);

        nextBtn.parentElement.reset();
        nextBtn.disabled = true;

        const result = createPreview(firstName, lastName, peopleCount, fromDate, daysCount);
        infoList.appendChild(result);

    }

    function createInfo(firstName, lastName, peopleCount, fromDate, daysCount) {
        const element = e('li');
        element.className = 'ticket';

        const article = e('article');
        article.appendChild(e('h3', `Name: ${firstName} ${lastName}`));
        article.appendChild(e('p', `From date: ${fromDate}`));
        article.appendChild(e('p', `For ${daysCount} days`));
        article.appendChild(e('p', `For ${peopleCount} people`));

        element.appendChild(article);

        return element;
    }

    function createPreview(firstName, lastName, peopleCount, fromDate, daysCount) {
        const element = createInfo(firstName, lastName, peopleCount, fromDate, daysCount);

        const editBtn = e('button', 'Edit');
        editBtn.className = 'edit-btn';
        editBtn.addEventListener('click', () => onEditClick(firstName, lastName, peopleCount, fromDate, daysCount));

        const continueBtn = e('button', 'Continue');
        continueBtn.className = 'continue-btn';
        continueBtn.addEventListener('click', onContinueClick.bind(null, firstName, lastName, peopleCount, fromDate, daysCount))

        element.appendChild(editBtn);
        element.appendChild(continueBtn);

        return element;

    }

    function onEditClick(firstName, lastName, peopleCount, fromDate, daysCount) {
        inputs.firstName.value = firstName;
        inputs.lastName.value = lastName;
        inputs.peopleCount.value = peopleCount;
        inputs.fromDate.value = fromDate;
        inputs.daysCount.value = daysCount;

        infoList.textContent = ''; // removes all children
        nextBtn.disabled = false;

    }

    function onContinueClick(firstName, lastName, peopleCount, fromDate, daysCount) {
        const result = createConfirmation(firstName, lastName, peopleCount, fromDate, daysCount);
        confirmList.appendChild(result);
        infoList.textContent = '';
    }

    function createConfirmation(firstName, lastName, peopleCount, fromDate, daysCount) {
        const element = createInfo(firstName, lastName, peopleCount, fromDate, daysCount);

        const confirmBtn = e('button', 'Confirm');
        confirmBtn.className = 'confirm-btn';
        confirmBtn.addEventListener('click', onConfirmClick);

        const cancelBtn = e('button', 'Cancel');
        cancelBtn.className = 'cancel-btn';
        cancelBtn.addEventListener('click', onCancelClick);


        element.appendChild(confirmBtn);
        element.appendChild(cancelBtn);

        return element;

    }

    function onCancelClick() {
        confirmList.textContent = '';

        nextBtn.disabled = false;
    }

    function onConfirmClick() {

        nextBtn.disabled = false;
        confirmList.textContent = '';

        appendSec.style.display = 'none';
        infoSec.style.display = 'none';
        confirmSec.style.display = 'none';

        const element = e('h1', 'Thank you, have a nice day!');
        element.id = 'thank-you';

        const backBtn = e('button', 'Back');
        backBtn.id = 'back-btn';
        backBtn.addEventListener('click', onBackClick);

        bodySec.appendChild(element);
        bodySec.appendChild(backBtn);
    }

    function onBackClick() {
        const element = document.getElementById('thank-you');
        const backBtn = document.getElementById('back-btn');

        bodySec.removeChild(element);
        bodySec.removeChild(backBtn);
        
        appendSec.style.display = 'block';
        infoSec.style.display = 'block';
        confirmSec.style.display = 'block';
    }

    function e(type, content) {
        const element = document.createElement(type);

        if (content) {
            element.textContent = content;
        }

        return element
    }
}



