import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { useLogin } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import { loginValidator } from '../../util/validators';

const initialValues = { email: '', password: '' };

export default function Login() {
    const login = useLogin();
    const navigate = useNavigate();

    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
           setErrors(errors => [...errors, err.message])
        }
    }

    const {
        values,
        changeHandler,
        submitHandler,
        errors,
        setErrors
    } = useForm(initialValues, loginHandler, loginValidator);

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={submitHandler}>

                <div className="container">
                    <img src="home-logo2.png" alt="Home" className='brand-logo' />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={changeHandler}
                        placeholder="user@email.com"
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        value={values.password}
                        onChange={changeHandler}
                        placeholder="*****"
                    />

                    {errors.map((error, index) => (
                        <p key={index} className="error">{error}</p>
                    ))}

                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>Not a member yet? Click <Link className='hyperlink' to="/register">here</Link> to join us!</span>
                    </p>
                </div>
            </form>
        </section>
    );
}