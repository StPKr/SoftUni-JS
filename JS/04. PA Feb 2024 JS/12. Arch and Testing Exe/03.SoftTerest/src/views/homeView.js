const view = document.querySelector('div[data-view-name="login"]');


export function showHomeView(ctx) {
    ctx.render(view);
}