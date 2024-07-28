import { useState } from 'react'
import { AuthContext } from './context/AuthContext'
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

function App() {
  //TODO remove this from App component
  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    //TODO: Quick solution, fix by implementing persisted authState
    localStorage.setItem('accessToken', state.accessToken);
    //TODO validation
    setAuthState(state);
  }

  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState
  };

  return (
    <AuthContext.Provider value={contextData}>

      <Header />
      <main>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/book-of-the-week' element={<BookOfTheWeek />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/catalog/:_id' element={<BookDetails />} />
          <Route path='/top-five-list' element={<TopFiveList />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/logout' element={<Logout />} /> */}

          <Route path='/test' element={<Test />} />


        </Routes>

      </main>

      <Footer />
    </AuthContext.Provider>

  )
}

export default App
