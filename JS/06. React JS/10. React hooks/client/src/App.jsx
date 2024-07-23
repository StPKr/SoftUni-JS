import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import UserContext from './contexts/UserContext';

import Header from './components/Header';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import ArticleCreate from './components/ArticleCreate';

import 'bootstrap/dist/css/bootstrap.min.css';
import FakeLogin from './components/FakeLogin';


function App() {
    const [currentUser, setCurrentUser] = useState({});

    const login = (username, password) => {
        // TODO: validate password

        setCurrentUser({ username });
    }

    return (
        <UserContext.Provider value={{ user: currentUser, login }}>
            <Header />
            <Routes>
                <Route path='/' element={<Navigate to='/articles' />} />
                <Route path='/articles' element={<ArticleList />} />
                <Route path='/articles/:articleId/details' element={<Article />} />
                <Route path='/articles/create' element={<ArticleCreate />} />
                <Route path='/fake-login' element={<FakeLogin />} />
            </Routes>
        </UserContext.Provider>
    )
}

export default App
