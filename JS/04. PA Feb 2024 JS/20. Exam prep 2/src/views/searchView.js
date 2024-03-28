import { searchForProducts } from '../data/products.js';
import { html, render, page } from '../lib.js';
import { createSubmitHandler } from '../util.js';


const searchTemplate = (onSubmit, result) => html`
<section id="search">
<div class="form">
    <h4>Search</h4>
    <form class="search-form" @submit=${onSubmit}>
        <input
            type="text"
            name="search"
            id="search-input"
        />
        <button class="button-list">Search</button>
    </form>
</div>
<h4 id="result-heading">Results:</h4>
${result ? showResultTemplate(result) : ""}
</section>
`;

const showResultTemplate = (result) => html`
<div class="search-result">
    ${result.length
        ? result.map(x => html`
         <div class="motorcycle">
            <img src="${x.imageUrl}" alt="example1" />
            <h3 class="model">${x.model}</h3>
            <a class="details-btn" href="/dashboard/${x._id}">More Info</a>
            </div>`)
        : html`<h2 class="no-avaliable">No result.</h2>`}
</div>

`
/* 
${result.length > 0
        ? html`
       
        : html``} 
        */
export function showSearchView() {
    render(searchTemplate(createSubmitHandler(onSubmit)));

}

async function onSubmit({ search }, form) {
    if (!search) {
        return alert('All fields are required!');
    }

    const result = await searchForProducts(search);
    render(searchTemplate(createSubmitHandler(onSubmit), result));
}

