import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './Routes'
import './App.css'

import Footer from './pages/Footer'

function App() {


  return (
    <>
      <Router>
        <AppRoutes />
       {/* <Footer/>  */}
      </Router>
    </>
  )
}

export default App
