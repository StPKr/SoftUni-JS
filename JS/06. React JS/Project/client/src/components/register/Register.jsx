import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { registerValidator } from "../../util/validators";

const initialValues = { username: '', email: '', password: '', repass: '' };

export default function Register() {
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async (values) => {

        try {
            await register(values.username, values.email, values.password);
            navigate('/');
        } catch (err) {
            console.log(err);
            errors.push(err.message)
            // setShowErrorModal(true);
        }
    };

    const {
        values,
        changeHandler,
        submitHandler,
        errors
    } = useForm(initialValues, registerHandler, registerValidator);

    
    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={submitHandler}>
                <div className="container">
                    <img src="home-logo2.png" alt="Home" className='brand-logo' />
                    <h1>Register</h1>

                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={values.username}
                        onChange={changeHandler}
                        placeholder="username"
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={changeHandler}
                        placeholder="user@email.com"
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        value={values.password}
                        onChange={changeHandler}
                        placeholder="*****"
                    />

                    <label htmlFor="repass">Repeat Password:</label>
                    <input
                        type="password"
                        name="repass"
                        id="repeat-password"
                        value={values.repass}
                        onChange={changeHandler}
                        placeholder="*****"
                    />

                    {errors.map((error, index) => (
                        <p key={index} className="error">{error}</p>
                    ))}

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>Already a member? Click <Link className='hyperlink' to="/login">here</Link> to log back in!</span>
                    </p>
                </div>
            </form>
        </section>
    );
}