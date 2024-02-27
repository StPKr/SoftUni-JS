window.addEventListener('load', start);

async function start() {
    const main = document.querySelector('main');

    const recipes = await getRecipes();

    main.replaceChildren(...Object.values(recipes).map(createCard));

}


function createCard({ _id, name, img }) {
    const element = document.createElement('article');
    element.className = 'preview';
    element.innerHTML = `
    <div class="title">
    <h2>${name}</h2>
    </div>
    <div class="small">
    <img src="${img}">
    </div>`

    element.addEventListener('click', () => showDetails(_id, element));

    return element;
}

async function showDetails(id, element) {
    const details = await getDetails(id);

    element.innerHTML = ` 
    <h2>Title</h2>
    <div class="band">
        <div class="thumb">
            <img src="${details.img}">
        </div>
        <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
            ${(details.ingredients.map(i => `<li>${i}</li>`)).join('\n')}
            </ul>
        </div>
    </div>
    <div class="description">
        <h3>Preparation:</h3>
        ${(details.steps.map(s => `<p>${s}</p>`)).join('\n')}
    </div>`
}

async function getRecipes() {
    const url = 'http://localhost:3030/jsonstore/cookbook/recipes';

    try {
        const response = await fetch(url);
        const recipes = await response.json();
        return recipes;
    } catch (err) {
        alert(err.message);
        throw err; // if we skip this the code will continue after the alert
    }


}

async function getDetails(id) {
    const url = `http://localhost:3030/jsonstore/cookbook/details/${id}`;

    try {
        const response = await fetch(url);
        const details = await response.json();
        return details;
    } catch (err) {
        alert(err.message);
        throw err; // if we skip this the code will continue after the alert
    }
}