import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './Routes'
import './App.css'
import { UserContext } from './pages/UserContext'

import Footer from './pages/Footer'
import { useState } from 'react'

function App() {
  const [isLogin, setLogin] = useState(false)
  const [username, setUsername] = useState('')
  const [dateCreated, setDateCreated] = useState('')
  const [isOK, setIsOK] = useState(false)
  const [logErr, setLogerr] = useState(false)
  const [res, setres] = useState([])
  const [isOpenAdd, setOpenAdd] = useState(false)
      const [successfulAdd, setSuccessfullAdd] = useState(false)
  

  
  const handlesetOk = () => {
    setIsOK(false)
  }
  const handleseterr = () => {
    setLogerr(false)
  }

  
  
  console.log('login in?:')
  console.log(isLogin)
  console.log('username:')
  console.log(username)
    console.log('res:')
  console.log(res)
      console.log('opened?:')
  console.log(isOpenAdd)
  console.log('successfulAdd?:')
  
    
  return (
    <>
      
      {isOK && <div className='flex justify-center'>
        <div role="alert" className="fixed mt-6  top-0  z-40 lg:w-[50%]  rounded-xl border border-gray-100 bg-white p-4">
  <div className="flex items-start gap-4">
    <span className="text-green-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </span>

    <div className="flex-1">
      <strong className="block font-black text-gray-900"> Successfully login </strong>

    </div>

    <button onClick={handlesetOk} className="text-gray-500 transition hover:text-gray-600">
      <span className="sr-only">Dismiss popup</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</div>
      </div>}
      {logErr && <div className='flex justify-center'><div role="alert" className="fixed mt-6  top-0  z-40 lg:w-[50%] rounded border-s-4 border-red-500 bg-red-50 p-4">
        <div className='flex flex-row justify-between'>
           <strong className="block font-medium text-red-800"> Something went wrong </strong>
           <button onClick={handleseterr} className="text-gray-500 transition hover:text-gray-600">
      <span className="sr-only">Dismiss popup</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
        </div>
 

  <p className="mt-2 text-sm text-red-700">
   Incorrect username or password. please try again.
        </p>
          
      </div></div>}
      
      <Router>
        <UserContext.Provider value={{successfulAdd, setSuccessfullAdd,isOpenAdd, setOpenAdd,res,setres,setLogerr, username, setUsername, isLogin, setLogin,dateCreated,setDateCreated,isOK,setIsOK }}>
         <AppRoutes />
          {/* <Footer/> */}
        </UserContext.Provider>

      </Router>
    </>
  )
}

export default App



//  <Router>
//         <UserContext.Provider value={{ username, setUsername, isLogin, setLogin,dateCreated,setDateCreated }}>
//           <AppRoutes />
//           {/* <Footer/> */}
//         </UserContext.Provider>

//       </Router>