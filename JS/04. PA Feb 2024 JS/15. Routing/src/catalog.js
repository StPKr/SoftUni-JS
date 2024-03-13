const root = document.querySelector('main');
const items = [
    {
        id: '1',
        name: 'Wiper Fluid'
    },
    {
        id: '2',
        name: 'Headlight Lamp'
    },
    {
        id: '3',
        name: 'Side mirror, Right'
    },
    {
        id: '4',
        name: 'Side mirror, Left'
    }
]

export function showCatalog() {
    root.innerHTML = `
    <p>Catalog page</p>
    <ul>
    ${items.map(i => `<li><a href='/catalog/${i.id}'>${i.name}</a></li>`).join('\n')}
    </ul>
    `;
}

export function itemNotFound() {
    root.innerHTML = `<p>Item not found</p>`;
}

export function showDetails(ctx) {
    console.log(ctx)
    const productId = ctx.params.productIdid;
    console.log(productId);
    const item = items.find(i => i.productId == productId);

    root.innerHTML = `
    <p>Product details</p>
    <p>${item.name}</p>
    `;
}

export function showCategory(ctx) {
    console.log(ctx.params)

    root.innerHTML = `
    <p>Category listing for ${ctx.params.category}</p>
    <button>Back to catalog</button>
    `;

    root.querySelector('button').addEventListener('click', () => {
        ctx.page.redirect('/catalog');
    })
}

export async function loadData(ctx, next) {
    console.log('middleware');
    root.innerHTML = `<p>Loading &hellip;</p>`

    await new Promise(r => setTimeout(r, 2000));
    next();
}