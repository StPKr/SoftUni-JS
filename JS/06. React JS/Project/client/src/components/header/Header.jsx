import { NavLink } from 'react-router-dom';
import './Header.css';
import { useAuthContext } from '../../context/AuthContext';

export default function Header() {
    const navigation = [
        { name: 'Book of the Week', href: '/book-of-the-week' },
        { name: 'Catalog', href: '/books' },
        { name: 'Create', href: '/create' },
        { name: 'Top 5 List', href: '/top-five-list' },
        { name: 'Register', href: '/register' },
        { name: 'Login', href: '/login' },
        { name: 'Logout', href: '/logout' },
        { name: 'About', href: '/about' },
    ];

    const { isAuthenticated, username } = useAuthContext();

    return (
        <header>
            <nav>
                <div>
                    <NavLink to="/" id="home-logo">
                        <img src="home-logo.jpg" alt="Home" className='home-logo' />
                    </NavLink>
                </div>
                <ul>
                    {navigation.map((item) => {
                        if ((item.name === 'Create' || item.name === 'Logout') && !isAuthenticated) return null;
                        if ((item.name === 'Register' || item.name === 'Login') && isAuthenticated) return null;
                        return (
                            <li key={item.name}>
                                <NavLink to={item.href}>
                                    {item.name}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
                <div>
                    {isAuthenticated && (
                        <div>
                            <span id='profile-logo-name'>{username}</span>
                            <NavLink to="/profile" id="profile-logo">

                                <img src="profile-logo.jpg" alt="Profile" className='profile-logo' />
                            </NavLink>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}
