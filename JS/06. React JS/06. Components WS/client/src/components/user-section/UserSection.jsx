import { useEffect, useState } from "react";
import Search from "../search/Search";
import Pagination from "../pagination/Pagination";
import UserList from "./user-list/UserList";
import UserAdd from "./user-add/UserAdd";
import UserDetails from "./user-list/user-details/UserDetails";
import UserDelete from "./user-delete/UserDelete";

const baseUrl = 'http://localhost:3030/jsonstore'

export default function UserSection() {
    const [users, setUsers] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);
    const [showUserById, setShowUserById] = useState(null);
    const [showUserDerleteById, setShowUserDerleteById] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getUsers() {
            try {
                const response = await fetch(`${baseUrl}/users`);
                const result = await response.json();
                const userResult = Object.values(result);

                setUsers(userResult);
            } catch (err) {
                alert(err.message);
            } finally {
                setIsLoading(false);
            }

        }

        getUsers(); // either call or make an IIFE
    }, []);

    const addUserClickHandler = () => {
        setShowAddUser(true);
    }

    const addUserCloseHandler = () => {
        setShowAddUser(false);
    }

    const addUserSaveHandler = async (e) => {
        e.preventDefault();

        setIsLoading(true) // won't be seen since it's behind the modal

        const formData = new FormData(e.currentTarget);
        const userData = {
            ...Object.fromEntries(formData),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        const response = await fetch(`${baseUrl}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        const createdUser = await response.json();

        setUsers(oldUsers => [...oldUsers, createdUser]);

        setShowAddUser(false);

        setIsLoading(false)
    }

    const userDetailsClickHandler = (userId) => {
        setShowUserById(userId);
    }

    const userDeleteClickHandler = (userId) => {
        setShowUserDerleteById(userId);
    }

    const userDeleteHandler = async (userId) => {
        await fetch(`${baseUrl}/users/${userId}`, {
            method: 'DELETE'
        });

        setUsers(oldUsers => oldUsers.filter(user => user._id !== userId));

        setShowUserDerleteById(null);
    }


    return (
        <section className="card users-container">
            <Search />

            <UserList
                users={users}
                onUserDetailsClick={userDetailsClickHandler}
                onUserDeleteClick={userDeleteClickHandler}
                isLoading={isLoading}
            />

            {showAddUser && (<UserAdd
                onClose={addUserCloseHandler}
                onSave={addUserSaveHandler}
            />)}

            {showUserById && (
                <UserDetails
                    user={users.find(user => user._id === showUserById)}
                    onClose={() => setShowUserById(null)}
                />
            )}

            {showUserDerleteById && (<UserDelete
                onClose={() => setShowUserDerleteById(null)}
                onUserDelete={() => userDeleteHandler(showUserDerleteById)}
            />
            )}

            <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

            <Pagination />
        </section>
    )
}