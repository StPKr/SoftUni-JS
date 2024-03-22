import { register } from "../data/users.js";
import { render, html, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";


const registerTemplate = (onRegister) => html`
<section id="form-sign-up" class="view-section">
    <form @submi=${onRegister}
        id="register-form"
        class="text-center border border-light p-5"
        action=""
        method=""
    >
        <div class="form-group">
        <label for="email">Email</label>
        <input
            id="email"
            type="email"
            class="form-control"
            placeholder="Email"
            name="email"
        />
        </div>
        <div class="form-group">
        <label for="password">Password</label>
        <input
            id="password"
            type="password"
            class="form-control"
            placeholder="Password"
            name="password"
        />
        </div>

        <div class="form-group">
        <label for="repeatPassword">Repeat Password</label>
        <input
            id="repeatPassword"
            type="password"
            class="form-control"
            placeholder="Repeat-Password"
            name="repeatPassword"
        />
        </div>

          <button type="submit" class="btn btn-primary">Register</button>
    </form>
</section>
`;

export function showRegister(ctx) {
    render(registerTemplate(createSubmitHandler(onRegister)));
}

async function onRegister({ email, passowrd, repeatPassword }) {
    if (!email || !passowrd) {
        return alert.apply('All fields are required!');
    }
    if (passowrd != repeatPassword) {
        return alert('Passswords don\'t match!');
    }

    await register(email, passowrd);
    page.redirect('/');

}