import { Link } from 'react-router-dom';
import './Login.css'

export default function Login() {
    return (
        <section id="login-page" className="auth">
            <form id="login">

                <div className="container">
                    <img src="home-logo2.png" alt="Home" className='brand-logo' />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>Not a member yet? Click <Link to="/register">here</Link> to join us!</span>
                    </p>
                </div>
            </form>
        </section>
    );
}