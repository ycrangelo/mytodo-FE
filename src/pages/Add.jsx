import axios from "axios";
import { useContext, useState } from 'react';
import { UserContext } from "./UserContext";

const Add = () => {
    const { username, setOpenAdd, setSuccessfullAdd } = useContext(UserContext)
    const [title, setTitle] = useState('')
    const [todo, setTodo] = useState('')
    const [lading, isloading] = useState(true)

    

    const handlecloseAdd = () => {
        setOpenAdd(false)
    }
    const handleLoadings = () => {
        isloading(false)
    }
    const setsucc = () => {
        setSuccessfullAdd(true)
    }
    
  
    // const handleNotLoadings = () => {
    //     isloading(true)
    // }

    const addTodos = async () => {
        try {
            // Make the POST request using Axios
            const response = await axios.post('https://todolist-lbt3.onrender.com/api/todos/post/userTodos', {
                userID: username,
                title: title,
                todo: todo
            });

            // Handle the response from the server as needed

            if (response.status === 201) {
                setsucc()
                handlecloseAdd()
               
            }
             
           
          
          
                
        } catch (error) {
            // Handle any errors that occurred during the request
            console.error('Error:', error);
        }
    }

    const handleAddtodos = async (e) => {
        e.preventDefault()
        handleLoadings()
        await addTodos()
    }
    return (
        <>

            <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="   fixed top-0  z-50 flex justify-center  items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-md max-h-full">
       
                    <div className="relative bg-white rounded-lg shadow ">
           
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                            <h3 className="text-xl font-semibold text-gray-900 ">
                                Add todo
                            </h3>
                            <button onClick={handlecloseAdd} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="authentication-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
           
                        <div className="p-4 md:p-5">
                            <form className="space-y-4" onSubmit={handleAddtodos} >
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Title:</label>
                                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                                </div>
                                <div>
                                    <label htmlFor="OrderNotes" className="block text-sm font-medium text-gray-700"> Todo: </label>

                                    <textarea
                                        value={todo} onChange={(e) => setTodo(e.target.value)}
                                        id="OrderNotes"
                                        className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                                        rows="4"
                                        placeholder=""
                                        required
                                    ></textarea>
                                </div>
                                <div className="flex justify-between">
                       
                       
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 text-center ">{lading ? <>Save</> : <div className="flex items-center justify-center    rounded-lg  ">
                                    <div role="status">
                                        <svg aria-hidden="true" className="w-[1.20rem]  text-gray-200 animate-spin  fill-gray-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>}</button>
                             
                   
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add


{/* <div className="flex items-center justify-center    rounded-lg  ">
    <div role="status">
        <svg aria-hidden="true" className="w-[1.20rem]  text-gray-200 animate-spin  fill-gray-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
        <span className="sr-only">Loading...</span>
    </div>
</div> */}