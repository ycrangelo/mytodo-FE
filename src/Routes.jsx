import { Route, Routes } from 'react-router-dom'

//components
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Todolist from './pages/Todolist'
import LandingPage from './pages/LandingPage'

const AppRoutes = () => {
 return (
  <Routes>
   <Route path='/' element={<LandingPage />} />
   <Route path='/login' element={<LoginPage />} />
   <Route path='/signup' element={<SignupPage />} />
   <Route path='/Todolist' element={<Todolist />} />
   
  </Routes>
 )
}

export default AppRoutes