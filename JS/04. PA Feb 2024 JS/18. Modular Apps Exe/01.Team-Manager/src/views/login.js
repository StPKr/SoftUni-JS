import { html } from "../../node_modules/lit-html/lit-html.js";
import { userService } from "../api/userService.js";
import { goTo } from "../common/goTo.js";
import { renderer } from "../common/render.js";
import { userHelper } from "../common/userHelper.js";

const loginTemp = (hasError) => html`
<section id="login">
    <article class="narrow">
        <header class="pad-med">
            <h1>Login</h1>
        </header>
        <form @submit=${onSubmit} id="login-form" class="main-form pad-large">
            ${hasError ? html`<div class="error">${hasError}</div>` : ''}
            <label>E-mail: <input type="text" name="email"></label>
            <label>Password: <input type="password" name="password"></label>
            <input class="action cta" type="submit" value="Sign In">
        </form>
        <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
        </footer>
    </article>
</section>
`;

export function showLoginView() {
    renderer(loginTemp());
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    const pattern = /(><=\s|^)([A-Za-z0-9]+[A-Za-z0-9.\-_]*)@([a-z]+\-?[a-z]+)(\.[a-z]+)+/g

    if (!pattern.test(email) || password.length < 3) {
        return renderer(loginTemp('Ooooops Error'))
    }

    const userData = await userService.login({ email, password });
    userHelper.setUserData(userData);
    goTo('/my-team');


}