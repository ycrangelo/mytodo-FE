import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './Routes'
import LandingPage from './pages/LandingPage'
import './App.css'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import Todolist from './pages/Todolist'

function App() {


  return (
    <>
      <Router>
        <AppRoutes/>
      </Router>
    </>
  )
}

export default App
