import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
     const [res,setRes] = useState([])
    const navigate = useNavigate();

    const loginPage = async () => {
        try {
            const response = await axios.post(
                'https://todolist-lbt3.onrender.com/api/user/login',
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
        setRes(response);
        console.log('before response');
        console.log(response.status);
            if (response.status === 200) {
                console.log('inside if statement');
                console.log(res);
                //Redirect to the '/Todolist' route upon successful login
           navigate('/Todolist');
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleloginPage = async (e) => {
    e.preventDefault();
    console.log('hello121');
    await loginPage();
    console.log(res);
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
    useEffect(() => {
       
        loginPage()
        
    },[])
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