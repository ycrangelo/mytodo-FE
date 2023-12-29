import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './Routes'
import LandingPage from './pages/LandingPage'
import './App.css'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import Todolist from './pages/Todolist'
import Footer from './pages/Footer'

function App() {


  return (
    <>
      <Router>
        <AppRoutes />
        <Footer/>
      </Router>
    </>
  )
}

export default App
