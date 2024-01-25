import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const SignupPage = () => {

      const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const [res, setRes] = useState([])
    const navigate = useNavigate()
    //  const [status,setStats] = useState([])
    //  const navigate = useNavigate();

    const signUpPage = async () => {
        try {
            const response = await axios.post(
                'https://todolist-lbt3.onrender.com/api/user/register',
                {
                    email: email,
                    password: password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            await setRes(response);
            console.log(res.status);
            if (response.status === 201) {
                console.log('inside if statement');
                console.log(res);
                //Redirect to the '/Todolist' route upon successful login
           navigate('/Todolist');
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleSignupPage = async (e) => {
        e.preventDefault()
        console.log('signup');
        setemail('')
        setPassword('')
        await signUpPage()
        await console.log(res);
        
    }
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
    useEffect(() => {
       
        signUpPage()
        
    }, [])

    
    return (
        <>
            <div className="min-h-screen bg-[#fbfdfc] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-4xl font-extrabold text-[#07130e]">
                        Create a new account
                    </h2>
    
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md " id="containerLogin">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" onSubmit={(e)=>handleSignupPage(e)}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Username
                                </label>
                                <div className="mt-1">
                                    <input  value={email} onChange={(e) => setemail(e.target.value)} id="text" name="text" type="text" autoComplete="text" required
                                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Enter your username" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input id="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" autoComplete="current-password" required
                                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Enter your password" />
                                </div>
                            </div>



                            <div>
                                <button type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-[#fbfdfc] bg-[#53b08f] hover:bg-[#6bd8b1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#53b08f]">

                                    Sign up
                                </button>
                            </div>
                        </form>
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
                                {/* <div>
                                    <a href="#"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                        <img className="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                                            alt="" />
                                    </a>
                                </div>
                                <div>
                                    <a href="#"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                        <img className="h-5 w-5" src="/img/discord.png"
                                            alt="" />
                                    </a>
                                </div>
                                <div>
                                    <a href="#"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                        <img className="h-6 w-6" src="https://www.svgrepo.com/show/506498/google.svg"
                                            alt="" />
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

export default SignupPage