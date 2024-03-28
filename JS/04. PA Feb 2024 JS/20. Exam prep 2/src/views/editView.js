import { getProductById, updateProduct } from '../data/products.js';
import { html, render, page } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (product, onEdit) => html`
<section id="edit">
    <h2>Edit Motorcycle</h2>
    <div class="form">
        <h2>Edit Motorcycle</h2>
        <form class="edit-form" @submit=${onEdit}>
        <input
            type="text"
            name="model"
            id="model"
            placeholder="Model"
            .value=${product.model}
        />
        <input
            type="text"
            name="imageUrl"
            id="moto-image"
            placeholder="Moto Image"
            .value=${product.imageUrl}
        />
        <input
            type="number"
            name="year"
            id="year"
            placeholder="Year"
            .value=${product.year}
        />
        <input
            type="number"
            name="mileage"
            id="mileage"
            placeholder="mileage"
            .value=${product.mileage}
        />
        <input
            type="number"
            name="contact"
            id="contact"
            placeholder="contact"
            .value=${product.contact}
        />
        <textarea
            id="about"
            name="about"
            placeholder="about"
            rows="10"
            cols="50"
            .value=${product.about}
        ></textarea>
        <button type="submit">Edit Motorcycle</button>
        </form>
    </div>
</section>
`;

export async function showEditView(ctx) {
    const productId = ctx.params.id;
    const event = await getProductById(productId);
    render(editTemplate(event, createSubmitHandler(onEdit)));

    async function onEdit({ model, imageUrl, year, mileage, contact, about }, form) {
        if (!model || !imageUrl || !year || !mileage || !contact || !about) {
            return alert('All fields are required!');
        }

        await updateProduct(productId, { model, imageUrl, year, mileage, contact, about });
        page.redirect('/dashboard/' + productId);
    }  // nesting the function so we can use the id 
}