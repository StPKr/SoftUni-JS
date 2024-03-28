import { html, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const homeTemplate = () => html`
<section id="home">
    <h1>
    Welcome to <span>Samurider</span> moto market, your premier destination for Japanese motorcycles.</h1>
    <img
    src="./images/motorcycle.png"
    alt="home"
    />

</section>
`;

export function showHome(ctx) {
    render(homeTemplate());
}