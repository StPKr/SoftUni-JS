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
import UserGuard from './components/common/UserGuard'
import NotFound from './components/not-found/NotFound'
import GuestGuard from './components/common/GuestGuard'
import PastDiscussion from './components/past-discussion/PastDiscussion'

function App() {

  return (
    <AuthContextProvider >

      <Header />
      <main>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/book-of-the-week' element={<BookOfTheWeek />} />
          <Route path='/past-discussion/:bookId' element={<PastDiscussion />} />
          <Route path='/books' element={<Catalog />} />
          <Route path='/books/:bookId' element={<BookDetails />} />
          <Route path='/top-five-list' element={<TopFiveList />} />
          <Route path='/about' element={<About />} />

          <Route element={<GuestGuard />}>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Route>

          <Route element={<UserGuard />}>
            
            <Route path='/create' element={<CreateBook />} />
            <Route path='/books/:bookId/edit' element={<EditBook />} />
            <Route path='/logout' element={<Logout />} />
          </Route>

          <Route path='/test' element={<Test />} />

          <Route path='*' element={<NotFound />} />


        </Routes>

      </main>

      <Footer />

    </AuthContextProvider>

  )
}

export default App
