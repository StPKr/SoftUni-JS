import { AuthContextProvider } from './context/AuthContext'
import { Route, Routes } from 'react-router-dom'

import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import BookOfTheWeek from './components/book-of-the-week/BookOfTheWeek'
import Catalog from './components/catalog/Catalog'
import TopFiveList from './components/top-five-list/TopFiveList'
import Register from './components/register/Register'
import Login from './components/login/Login'
import Footer from './components/footer/Footer'
import BookDetails from './components/book-details/BookDetails'
import Test from './components/test/Test'
import Logout from './components/logout/Logout'
import CreateBook from './components/create-book/CreateBook'
import EditBook from './components/eidt-book/EditBook'

function App() {

  return (
    <AuthContextProvider >

      <Header />
      <main>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/book-of-the-week' element={<BookOfTheWeek />} />
          <Route path='/books' element={<Catalog />} />
          <Route path='/books/:bookId' element={<BookDetails />} />
          <Route path='/books/:bookId/edit' element={<EditBook />} />
          <Route path='/create' element={<CreateBook />} />
          <Route path='/top-five-list' element={<TopFiveList />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />

          <Route path='/test' element={<Test />} />


        </Routes>

      </main>

      <Footer />

    </AuthContextProvider>

  )
}

export default App
