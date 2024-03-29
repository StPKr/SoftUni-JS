import { getUserData } from '@src/util.js';

export function session() {
    return function (ctx, next) {
        ctx.user = getUserData();

        next();
    };
}