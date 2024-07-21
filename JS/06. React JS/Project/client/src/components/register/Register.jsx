import { Link } from "react-router-dom";

export default function Register() {
    return (
        <section id="register-page" className="content auth">
            <form id="register">
                <div className="container">
                    <img src="home-logo2.png" alt="Home" className='brand-logo' />
                    <h1>Register</h1>

                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" placeholder="username" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com" />

                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" />

                    <label htmlFor="repass">Repeat Password:</label>
                    <input type="password" name="repeat-password" id="repeat-password" />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>Already a member? Click <Link to="/login">here</Link> to log back in!</span>
                    </p>
                </div>
            </form>
        </section>
    );
}