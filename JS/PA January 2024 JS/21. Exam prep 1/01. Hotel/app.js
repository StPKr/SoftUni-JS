window.addEventListener('load', solve);

function solve() {
    console.log('it works')
    const inputs = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        dateIn: document.getElementById('date-in'),
        dateOut: document.getElementById('date-out'),
        peopleCount: document.getElementById('people-count')
    };

    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onNextClick);

    const infoList = document.querySelector('.info-list');
    const confirmList = document.querySelector('.confirm-list');
    const output = document.getElementById('verification');

    function onNextClick(event) {
        event.preventDefault();

        if (inputs.firstName.value == '' ||
            inputs.lastName.value == '' ||
            inputs.dateIn.value == '' ||
            inputs.dateOut.value == '' ||
            inputs.peopleCount.value == '') {
            return;
        }

        const firstName = inputs.firstName.value;
        const lastName = inputs.lastName.value;
        const dateIn = inputs.dateIn.value;
        const dateOut = inputs.dateOut.value;
        const peopleCount = Number(inputs.peopleCount.value);

        if ((new Date(dateIn).getTime() >= new Date(dateOut).getTime())) {
            console.log('Check in is after check out!');
            return;
        };

        // inputs.firstName.value = '';
        // inputs.lastName.value = '';
        // inputs.dateIn.value = '';
        // inputs.dateOut.value = '';
        // inputs.peopleCount.value = ''; - same as below
        nextBtn.parentElement.reset();
        nextBtn.disabled = true;

        const result = createPreview(firstName, lastName, dateIn, dateOut, peopleCount);
        infoList.appendChild(result);

    }

    function createInfo(firstName, lastName, dateIn, dateOut, peopleCount) {
        const element = e('li');
        element.className = 'reservaiton-content';

        const article = e('article');
        article.appendChild(e('h3', `Name: ${firstName} ${lastName}`));
        article.appendChild(e('p', `From date: ${dateIn}`));
        article.appendChild(e('p', `To date: ${dateOut}`));
        article.appendChild(e('p', `For ${peopleCount} people`));

        element.appendChild(article);

        return element;
    }

    function createPreview(firstName, lastName, dateIn, dateOut, peopleCount) {
        const element = createInfo(firstName, lastName, dateIn, dateOut, peopleCount);

        const editBtn = e('button', 'Edit');
        editBtn.className = 'edit-btn';
        editBtn.addEventListener('click', () => onEditClick(firstName, lastName, dateIn, dateOut, peopleCount));

        const continueBtn = e('button', 'Continue');
        continueBtn.className = 'continue-btn';
        continueBtn.addEventListener('click', onContinueClick.bind(null, firstName, lastName, dateIn, dateOut, peopleCount))

        element.appendChild(editBtn);
        element.appendChild(continueBtn);

        return element;

    }

    function onEditClick(firstName, lastName, dateIn, dateOut, peopleCount) {
        inputs.firstName.value = firstName;
        inputs.lastName.value = lastName;
        inputs.dateIn.value = dateIn;
        inputs.dateOut.value = dateOut;
        inputs.peopleCount.value = peopleCount;

        infoList.textContent = ''; // removes all children
        nextBtn.disabled = false;

    }

    function onContinueClick(firstName, lastName, dateIn, dateOut, peopleCount) {
        const result = createConfirmation(firstName, lastName, dateIn, dateOut, peopleCount);
        confirmList.appendChild(result);
        infoList.textContent = '';
    }

    function createConfirmation(firstName, lastName, dateIn, dateOut, peopleCount) {
        const element = createInfo(firstName, lastName, dateIn, dateOut, peopleCount);

        const confirmBtn = e('button', 'Confirm');
        confirmBtn.className = 'confirm-btn';
        confirmBtn.addEventListener('click', onFinishClick.bind(null, true));

        const cancelBtn = e('button', 'Cancel');
        cancelBtn.className = 'cancel-btn';
        cancelBtn.addEventListener('click', onFinishClick.bind(null, false));


        element.appendChild(confirmBtn);
        element.appendChild(cancelBtn);

        return element;

    }

    function onFinishClick(confirmed) {
        const className = confirmed ? 'reservation-confirmed' : 'reservation-cancelled';
        const text = confirmed ? 'Confirmed.' : 'Cancelled.';

        output.className = className;
        output.textContent = text;

        confirmList.textContent = '';

        nextBtn.disabled = false;
    }

    function e(type, content) {
        const element = document.createElement(type);

        if (content) {
            element.textContent = content;
        }

        return element
    }
}





