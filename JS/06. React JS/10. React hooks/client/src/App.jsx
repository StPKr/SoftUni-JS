import NavBar from './components/NavBar';
import ArticleList from './components/ArticleList';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Article from './components/Article';

function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<Navigate to='/articles' />} />
        <Route path='/articles' element={<ArticleList />} />
        <Route path='/articles/details/:articleId' element={<Article />} />

      </Routes>
    </>
  )
}

export default App
