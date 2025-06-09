import React, { useState, useEffect, useContext } from "react";
import SideBar from "./SideBar";
import { UserContext } from "./UserContext";
import Add from "./Add";
import LoginFirst from "./LoginFirst";
import axios from "axios";
import { Card, CardHeader, CardBody, CardFooter, Heading, Button, Text, Flex, Box } from '@chakra-ui/react';

const Todolist = () => {
  const [imageSrc, setImageSrc] = useState('img/add.png');
   const [todoRes, setTodores] = useState([]);
   const [isdelete,setdelet] = useState(false)
  const { isLogin, isOpenAdd, setOpenAdd, successfulAdd, setSuccessfullAdd, username, isOK } = useContext(UserContext);

  const todosGET = async () => {
    try {
      const response = await axios.get(`https://todolist-lbt3.onrender.com/api/todos/get/userTodos/${username}`);
      setTodores(response.data);
    } catch (error) {
      console.error('Error fetching user todos:', error);
    }
   };
   const handlesetdelet = () => {
      setdelet(true)
   }
   const handleNotsetdelet = () => {
      setdelet(false)
   }

  useEffect(() => {
    todosGET();
  }, [isOK, isOpenAdd]);

  const handleMouseOver = () => {
    setImageSrc('img/add2.png');
  };

  const handleMouseOut = () => {
    setImageSrc('img/add.png');
  };

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  const setsuccNot = () => {
    setSuccessfullAdd(!successfulAdd);
  };

  const handleDeleteTodo = async (_id) => {
    try {
      // Replace 'your-api-endpoint' with the actual API endpoint
      const response = await axios.delete(`https://todolist-lbt3.onrender.com/api/todos/delete/userTodos/${_id}`);
      console.log(response.data); // Handle the response if needed
       todosGET();
       if (response) {
         handlesetdelet()
      } // Refresh the todos after deletion
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
   };
   return (
      <>
         {isdelete && <div className="flex justify-center">
            <div role="alert" className="rounded-xl fixed mt-6  top-0  z-40 border border-gray-100 bg-white p-4">
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
                     <strong className="block font-medium text-[#D04848]">Successfully Deleted! </strong>

                   
                  </div>

                  <button onClick={handleNotsetdelet} className="text-gray-500 transition hover:text-gray-600">
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
        
         {successfulAdd && <div className="flex justify-center">
            <div role="alert" className="rounded-xl fixed mt-6  top-0  z-40 border border-gray-100 bg-white p-4">
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
                     <strong className="block font-medium text-gray-900">Successfully Added! </strong>

                   
                  </div>

                  <button onClick={setsuccNot} className="text-gray-500 transition hover:text-gray-600">
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
         
         {isLogin ? (
            <>
               <div className="px-11 h-auto">
                  <SideBar />
                  <div className="flex flex-col">
                     {/* <div className=" flex justify-end pb-9">
                  <div className="text-end ">
                     <h1 className="text-3xl font-bold text-[#07130e]">{greeting}!</h1>
                     <h1 className="text-3xl font-bold text-[#07130e]">
                        {currentTime}
                     </h1>
                  </div>
               </div> */}
                     
                     <div className="text-center py-11">
                        <h1 className="font-bold text-8xl tracking-wide text-[#3bd38d]">Your todo&apos;s</h1>
                     </div>
                    
                     <div className="flex justify-center">
                        <ul>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {Array.isArray(todoRes) ? (
              todoRes.map((todo, key) => (
                <li key={key}>
                  <Card maxW='md'>
                    <CardHeader>
                      <Flex spacing='4'>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                          <Box>
                            <Heading size='lg'>{todo.title}</Heading>
                            <Text fontSize='xs'>{todo.createdAt}</Text>
                          </Box>
                        </Flex>
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <Text>{todo.todo}</Text>
                    </CardBody>
                    <CardFooter justify='space-between' flexWrap='wrap'>
                      <div style={{ textAlign: 'right' }}>
                        <Button
                          variant='ghost'
                          mr={4}
                          _hover={{ backgroundColor: '#D04848', color: 'white' }}
                          onClick={() => handleDeleteTodo(todo._id)} // Pass todoId to the function
                        >
                          Delete
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </li>
              ))
            ) : (
              <p> </p>
            )}
          </div>
        </ul>
                     </div>
                  
              
               
             

                  </div>
          
               </div>
               <div
                  className="flex justify-end px-3 fixed md:bottom-20 md:right-20 bottom-6 right-1 z-100 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-200"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
               >
                  <img src={imageSrc} alt="" onClick={handleOpenAdd} />
               </div>
               {isOpenAdd && <div className="flex justify-center">
                  <Add />
               </div>}
            </>

         
         ) : <LoginFirst />}
        
      </>
   );
}

export default Todolist;


