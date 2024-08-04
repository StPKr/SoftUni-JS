import { Link } from 'react-router-dom'
import './NotFound.css'


export default function NotFound() {
    return (
        <div id="not-found">
            <h1 id="not-found-h1">404 - Page Not Found</h1>
            <p className="not-found">The page you are looking for does not exist.</p>
            <p className="not-found">Back to <Link to={'/'}>Home</Link>?</p>
        </div>
    );
}