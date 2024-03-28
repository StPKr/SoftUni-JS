import { getAllProducts } from '../data/products.js';
import { html, render } from '../lib.js';

const dashboardTemplate = (products) => html`
<h2>Available Motorcycles</h2>
<section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    ${products.length > 0
        ? products.map(productTemplate)
        : html`<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`
    }   
</section>
`;

const productTemplate = (product) => html`
<div class="motorcycle">
    <img src="${product.imageUrl}" alt="example1" />
    <h3 class="model">${product.model}</h3>
    <p class="year">Year: ${product.year}</p>
    <p class="mileage">Mileage: ${product.mileage} km.</p>
    <p class="contact">Contact Number: ${product.contact}</p>
    <a class="details-btn" href="/dashboard/${product._id}">More Info</a>
</div>
`;

export async function showDashboardView(ctx) {
    const products = await getAllProducts();
    render(dashboardTemplate(products));
}