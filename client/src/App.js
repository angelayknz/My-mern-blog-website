import Topbar from './components/topbar/Topbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Settings from './pages/settings/Settings'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
// import { Context } from './context/Context'
import { ThemeContext } from './context/ThemeContext'

function App() {
  // const { user } = useContext(Context)
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div
      style={{
        backgroundColor: darkMode ? '#222' : 'white',
        color: darkMode && 'white',
      }}
    >
      <Router>
        <Topbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/register" element={<Register />} />
          {/* {user ? <Home /> : <Register />} */}
          <Route path="/login" element={<Login />} />
          {/* {currentUser ? <Homepage /> : <Login />} */}
          <Route path="/post/:id" element={<Single />} />
          <Route path="/write" element={<Write />} />
          {/* {currentUser ? <Write /> : <Login />} */}
          <Route path="/settings" element={<Settings />} />
          {/* {currentUser ? <Settings /> : <Login />} */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
