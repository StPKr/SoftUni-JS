import { Navigate } from 'react-router-dom'
import { useLogout } from '../../hooks/useAuth';

export default function Logout() {

    const logout = useLogout();

    logout();

    return <Navigate to='/' />;
}