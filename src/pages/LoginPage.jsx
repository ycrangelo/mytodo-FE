import { useState, useContext } from "react"
import axios from "axios"
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false)

    const {setUsername,setLogin,setIsOK,setLogerr,setres} = useContext(UserContext)

    const handleLoading = () => {
        setLoading(true)
    }
     const handledisLoading = () => {
        setLoading(false)
    }


    const loginPage = async () => {
        try {
            const response = await axios.post(
                'https://tasty-sunbonnet-goat.cyclic.app/api/user/login',
                {
                    email: email,
                    password: password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',

                    },
                }
            )
            // Update state using setRes
       
            console.log('before response');
             console.log(response);
            
            console.log(response.status);
            if (response.status === 200) {
                console.log('inside if statement');
                setLogin(true)
                setIsOK(true)
                handledisLoading()
               await setres(response);
                setUsername(response.data.user.email)
                //Redirect to the '/Todolist' route upon successful login
                navigate('/Todolist');
  
            } else {
                setres([]);
                
            }
        
         
        } catch (error) {
            console.error(error);
            setLogerr(true)
            handledisLoading()
        }
    }

    const handleloginPage = async (e) => {
        e.preventDefault();
        setres([]);
        handleLoading()
    console.log('hello121');
        await loginPage();
      
    };
    


    // const signupDc = () => {
    //     axios
    //         .get(`https://todolist-lbt3.onrender.com/api/user/discord`)
    //         .then((response) => {
    //             const data = response.data;
    //             if (Array.isArray(data) && data.length > 0) {
    //                 setRes(data)
    //             }
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching data:', error);
    //         });
    // }

    // const handlesignupDC = (e) => {
    //     console.log(e.preventDefault())
    //     signupDc()
    // }
 
    //  useEffect(() => {
       
    //     signupDc()
        
    //  })

    return (
        <>
            <div className="min-h-screen bg-[#fbfdfc] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-4xl font-extrabold text-[#07130e]">
                        Welcome back!
                    </h2>
    
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md " id="containerLogin">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" onSubmit={(e) =>{ handleloginPage(e)}}
                        >
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Username
                                </label>
                                <div className="mt-1">
                                    <input id="text" name="text" type='text'
                                        value={email} onChange={(e) => setemail(e.target.value)} autoComplete="text" required
                                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Enter your username" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required
                                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Enter your password" />
                                </div>
                            </div>


                            <div>
                                <button type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-[#fbfdfc] bg-[#53b08f] hover:bg-[#6bd8b1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#53b08f]">

                                    Login
                                    

                                
                                  {/* <Link to='/Todolist'> Login</Link> */}
                                </button>
                            </div>
                        </form>
                      {loading &&   <div className="flex items-center justify-center pt-3    rounded-lg  ">
    <div role="status">
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin  fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
        <span className="sr-only">Loading...</span>
    </div>
</div>}
                        <div className="mt-6">

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-gray-100 text-gray-500">
                                        Or continue with
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-3 gap-3">
                                {/* <div >
                                    <a onClick={(e)=>handlesignupDC(e)}>
                                        <img
                                            onClick={(e)=>handlesignupDC(e)}
                                            src="/public/img/discord.png"
                                            alt="Description of the image"
                                        />
                                    </a>
                                </div> */}
                                
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default LoginPage