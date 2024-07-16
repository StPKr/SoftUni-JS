export default function Login() {
    return (
        <section id="login">
            <h1>Login</h1>
            <form id="login-form">
                <label for="username">Username:</label>
                <input type="text" id="login-username" name="username" required />
                <label for="password">Password:</label>
                <input type="password" id="login-password" name="password" required />
                <button type="submit">Login</button>
            </form>
        </section>
    );
}