import { html} from "../../node_modules/lit-html/lit-html.js";
import { userService } from "../api/userService.js";
import { goTo } from "../common/goTo.js";
import { renderer } from "../common/render.js";
import { userHelper } from "../common/userHelper.js";

const registerTemp = (hasError) => html`
<section id="register">
    <article class="narrow">
        <header class="pad-med">
            <h1>Register</h1>
        </header>
        <form @submit=${onSubmit} id="register-form" class="main-form pad-large">
            ${hasError ? html`<div class="error">${hasError}</div>` : ''}
            <label>E-mail: <input type="text" name="email"></label>
            <label>Username: <input type="text" name="username"></label>
            <label>Password: <input type="password" name="password"></label>
            <label>Repeat: <input type="password" name="repass"></label>
            <input class="action cta" type="submit" value="Create Account">
        </form>
        <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
        </footer>
    </article>
</section>
`;

export function showRegsiterView() {
    return renderer(registerTemp());
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, email, password, repass } = Object.fromEntries(formData);
    const pattern = /(><=\s|^)([A-Za-z0-9]+[A-Za-z0-9.\-_]*)@([a-z]+\-?[a-z]+)(\.[a-z]+)+/g
    if (!pattern.test(email)) {
        return renderer(registerTemp('Invalid email'))
    }
    if (username.length < 3 || password < 3 || password != repass) {
        return renderer(registerTemp('Invalid username or password'))
    }

    const userData = await userService.register({ username, email, password });
    userHelper.setUserData(userData);
    goTo('/my-team');

}