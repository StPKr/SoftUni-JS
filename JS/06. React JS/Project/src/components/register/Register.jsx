export default function Register() {
    return (
        <section id="register">
            <h1>Register</h1>
            <form id="register-form">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required />
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Register</button>
            </form>
        </section>
    );
}