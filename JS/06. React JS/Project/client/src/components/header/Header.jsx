import { NavLink } from 'react-router-dom';
import './Header.css'

export default function Header() {
    const navigation = [
        // { name: 'Home', href: '/' },
        { name: 'Book of the Week', href: '/book-of-the-week' },
        { name: 'Catalog', href: '/catalog' },
        { name: 'Create', href: '/create' },
        { name: 'Top 5 List', href: '/top-five-list' },
        { name: 'Register', href: '/register' },
        { name: 'Login', href: '/login' },
        // { name: 'Profile', href: '/profile' },
        { name: 'Logout', href: '/logout' },
        { name: 'About', href: '/about' },
    ]

    return (
        <header>
            <nav>
                <div>
                    <NavLink to="/" id="home-logo">
                        <img src="home-logo.jpg" alt="Home" className='home-logo' />
                    </NavLink>
                </div>
                <ul>
                    {navigation.map((item) => (
                        <li key={item.name}>
                            <NavLink
                                to={item.href}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div>
                    <NavLink to="/profile" id="profile-logo">
                        <img src="profile-logo.jpg" alt="Profile" className='profile-logo' />
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}