import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";


export default function Header() {
    const { isAuthenticated } = useContext(AuthContext); //can also take user data, like username to display somewhere
    return (
        <header>
            <h1><Link className="home" to="/">GamesPlay</Link></h1>
            <nav>
                <Link to="/games">All games</Link>
                {isAuthenticated
                    ? (<div id="user">
                        <Link to="/games/create">Create Game</Link>
                        <Link to="/logout">Logout</Link>
                    </div>)
                    : (<div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>)
                }
            </nav>
        </header>
    );
}