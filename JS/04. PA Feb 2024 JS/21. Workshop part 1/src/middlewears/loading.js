import { loading as loadingTemplate } from '@src/views/partials.js';

export function loading() {
    return function (ctx, next) {
        ctx.render(loadingTemplate());

        next();
    };
}