import { Route, Routes } from "react-router-dom"

import { AuthContextProvider } from "./contexts/AuthContext"

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import GameList from "./components/game-list/GameList"
import GameCreate from "./components/game-create/GameCreate"
import GameDetails from "./components/game-details/GameDetails"
import Logout from "./components/logout/Logout"
import GameEdit from "./components/game-edit/GameEdit"

function App() {

  return (
    <AuthContextProvider >
      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/games" element={<GameList />} />
            <Route path="/games/:gameId/details" element={<GameDetails />} />
            <Route path="/games/:gameId/edit" element={<GameEdit />} />
            <Route path="/games/create" element={<GameCreate />} />
          </Routes>
        </main>
      </div >
    </AuthContextProvider>
  )
}

export default App
