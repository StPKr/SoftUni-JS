import { html, render, page } from '../lib.js';
import { deleteProduct, getProductById } from '../data/products.js';
import { getUserData } from '../util.js';

const detailsTemplate = (product, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="./images/Honda Hornet.png" alt="example1" />
        <p id="details-title">${product.model}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p class="year">Year: ${product.year}</p>
                <p class="mileage">Mileage: ${product.mileage} km.</p>
                <p class="contact">Contact Number: ${product.contact}</p>
                <p id = "motorcycle-description">${product.about}</p>
            </div>
            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">
            ${!isOwner
        ? ''
        : html`<a href="/edit/${product._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}> Delete</a >`}
        </div >
    </div >
</div >
</section >
    `;

export async function showDetailsView(ctx) {
    const productId = ctx.params.id;

    const product = await getProductById(productId);

    const user = await getUserData();
    const hasUser = !!user;
    const isOwner = hasUser && user._id == product._ownerId;

    render(detailsTemplate(product, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteProduct(productId);
            page.redirect('/dashboard');
        }
    } //nesting the function so we can use id

}
