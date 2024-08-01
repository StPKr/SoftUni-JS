import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
// import withAuth from "../../HOC/withAuth";


export default function Header(
    // auth, - for HOC
) {
    const { isAuthenticated } = useAuthContext(); //can also take user data, like username to display somewhere

    // const { isAuthenticated } = auth; - for HOC
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

// const EnhancedHeader = withAuth(Header); // need to remove export default from Header above
// export default EnhancedHeader - HOC example