import { useAuthContext } from '../../context/AuthContext';
import './Profile.css'

export default function Profile() {
    const { username, email } = useAuthContext();
    return (
        <div className="profile-container">
            <div className="profile-header">
                <h1 className="profile-name">{username}</h1>
            </div>
            <div className="profile-info">
                <p><strong>Email:</strong> john.doe@example.com</p>
                <p><strong>Phone:</strong> (123) 456-7890</p>
                <p><strong>Location:</strong> New York, USA</p>
                <p><strong>Bio:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel lorem vel ex tincidunt malesuada.</p>
            </div>
            <div className="profile-footer">
                <button className="edit-profile">Edit Profile</button>
            </div>
        </div>
    );
}