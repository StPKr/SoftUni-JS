import './Header.css'

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="book-of-the-week.html">Book of the Week</a></li>
                    <li><a href="catalog.html">Catalog</a></li>
                    <li><a href="top-list.html">Top 10 List</a></li>
                    <li><a href="register.html">Register</a></li>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="profile.html">Profile</a></li>
                    <li><a href="logout.html">Logout</a></li>
                </ul>
            </nav>
        </header>
    );
}