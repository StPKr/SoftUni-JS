const root = document.querySelector('main');

let views = {};

export function init(inViews) {
    views = inViews;

    for (const linkId in views) {
        document.getElementById(linkId)?.addEventListener('click', onClick);
    }
}

function onClick(event) {
    const linkId = event.target.id;
    if (views[linkId]) {
        event.preventDefault();
        showView(linkId);
    }
}

export async function showView(linkId, param) {
    const view = views[linkId];

    if (typeof view == 'function') {
        const section = await view(param)
        root.replaceChildren(section);
    }
}