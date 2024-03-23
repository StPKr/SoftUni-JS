import { register } from '../data/users.js';
import { html, render, page } from '../lib.js';
import { createSubmitHandler, updateNav } from '../util.js';


const registerTemplate = (onRegister) => html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form class="register-form" @submit=${onRegister}>
            <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
            />
            <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
            />
            <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
            />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="#">Login</a></p>
        </form>
    </div>
</section>
`;

export function showRegisterView(ctx) {
    render(registerTemplate(createSubmitHandler(onRegister)));
}

async function onRegister(data, form) { //need to use data here because of name="re-password" above
    if (!data['email'] || !data['password'] || !data['re-password']) {
        return alert('All fields are required!');
    }
    if (data['password'] != data['re-password']) {
        return alert('Passwords don\'t match!');
    }

    await register(data['email'], data['password']);
    updateNav();
    page.redirect('/')
}