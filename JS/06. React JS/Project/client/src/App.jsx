import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import BookOfTheWeek from './components/book-of-the-week/BookOfTheWeek'
import Catalog from './components/catalog/Catalog'
import TopFiveList from './components/top-five-list/TopFiveList'
import Register from './components/register/Register'
import Login from './components/login/Login'

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/book-of-the-week' element={<BookOfTheWeek />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/top-five-list' element={<TopFiveList />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/logou' element={<Logout />} /> */}
          
        </Routes>

      </main>

      <Footer />
    </>
  )
}

export default App
