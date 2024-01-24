import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Add from "./Add";

const Todolist = () => {
   // State to hold the greeting and current time
   const [greeting, setGreeting] = useState("");
   const [currentTime, setCurrentTime] = useState(getFormattedTime());
   const [imageSrc, setImageSrc] = useState('img/add.png');
   const [isOpenAdd,setOpenAdd] = useState(false)

  const handleMouseOver = () => {
    setImageSrc('img/add2.png');
  };

  const handleMouseOut = () => {
    setImageSrc('img/add.png');
   };
   
   const handleOpenAdd = () => {
      setOpenAdd(true)
   }

   // Function to get the current time in the Philippines
   function getFormattedTime() {
      let currentDate = new Date();
      let options = { timeZone: 'Asia/Manila' };
      return currentDate.toLocaleTimeString('en-US', options);
   }

   // Effect to update the time and greeting every second
   useEffect(() => {
      const intervalId = setInterval(() => {
         const currentHour = new Date().getHours();
         let newGreeting = "";

         if (currentHour >= 0 && currentHour < 12) {
            newGreeting = "Good Morning";
         } else if (currentHour >= 12 && currentHour < 18) {
            newGreeting = "Good Afternoon";
         } else {
            newGreeting = "Good Evening";
         }

         setGreeting(newGreeting);
         setCurrentTime(getFormattedTime());
      }, 1000);

      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
   }, []); // Empty dependency array means the effect runs once after the initial render

   return (
      <>
         <div className="px-11 h-auto">
            <SideBar />
            <div className="flex flex-col">
               <div className=" flex justify-end pb-9">
                  <div className="text-end ">
                     <h1 className="text-3xl font-bold text-[#07130e]">{greeting}!</h1>
                     <h1 className="text-3xl font-bold text-[#07130e]">
                        {currentTime}
                     </h1>
                  </div>
               </div>
               <div className="text-center py-11">
                  <h1 className="font-bold text-8xl tracking-wide text-[#3bd38d]">Your todo&apos;s</h1>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:mx-[9rem]">
                  <div className=' lg:px-7 flex flex-col gap-4'>
                     <h1 className="pt-5 font-bold">TITTLE: LITTLE DICK</h1>
                     <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus debitis animi doloremque beatae, quo vitae sequi nam sint voluptatem. Saepe delectus maxime aut pariatur facere consequuntur aliquid beatae hic nihil!</p>
                     <p className="font-thin">date created:</p>
                     <div className=" flex justify-end">
                        <img src="img/delete.png" className="w-[2rem] cursor-pointer" alt="" />
                     </div>
                  </div>
                  <div className=' lg:px-7 flex flex-col gap-4'>
                     <h1 className="pt-5 font-bold">TITTLE: LITTLE DICK</h1>
                     <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae quis fuga dolorum dolorem animi placeat a ratione porro vero!</p>
                     <p className="font-thin">date created:</p>
                     <div className=" flex justify-end ">
                        <img src="img/delete.png" className="w-[2rem] cursor-pointer" alt="" />
                     </div>
                  </div>
                  <div className=' lg:px-7 flex flex-col gap-4'>
                     <h1 className="pt-5 font-bold">TITTLE: LITTLE DICK</h1>
                     <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae quis fuga dolorum dolorem animi placeat a ratione porro vero!</p>
                     <p className="font-thin">date created:</p>
                     <div className=" flex justify-end">
                        <img src="img/delete.png" className="w-[2rem] cursor-pointer" alt="" />
                     </div>
                  </div>
                  <div className=' lg:px-7 flex flex-col gap-4'>
                     <h1 className="pt-5 font-bold">TITTLE: LITTLE DICK</h1>
                     <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae quis fuga dolorum dolorem animi placeat a ratione porro vero!</p>
                     <p className="font-thin">date created:</p>
                     <div className=" flex justify-end">
                        <img src="img/delete.png" className="w-[2rem] cursor-pointer" alt="" />
                     </div>
                  </div>
                  <div className=' lg:px-7 flex flex-col gap-4'>
                     <h1 className="pt-5 font-bold">TITTLE: LITTLE DICK</h1>
                     <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae quis fuga dolorum dolorem animi placeat a ratione porro vero!</p>
                     <p className="font-thin">date created:</p>
                     <div className=" flex justify-end">
                        <img src="img/delete.png" className="w-[2rem] cursor-pointer" alt="" />
                     </div>
                  </div>
                  <div className=' lg:px-7 flex flex-col gap-4'>
                     <h1 className="pt-5 font-bold">TITTLE: LITTLE DICK</h1>
                     <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae quis fuga dolorum dolorem animi placeat a ratione porro vero!</p>
                     <p className="font-thin">date created:</p>
                     <div className=" flex justify-end">
                        <img src="img/delete.png" className="w-[2rem] cursor-pointer" alt="" />
                     </div>
                  </div>
                  <div className=' lg:px-7 flex flex-col gap-4'>
                     <h1 className="pt-5 font-bold">TITTLE: LITTLE DICK</h1>
                     <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae quis fuga dolorum dolorem animi placeat a ratione porro vero!</p>
                     <p className="font-thin">date created:</p>
                     <div className=" flex justify-end">
                        <img src="img/delete.png" className="w-[2rem] cursor-pointer" alt="" />
                     </div>
                  </div>
                  <div className=' lg:px-7 flex flex-col gap-4'>
                     <h1 className="pt-5 font-bold">TITTLE: LITTLE DICK</h1>
                     <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae quis fuga dolorum dolorem animi placeat a ratione porro vero!</p>
                     <p className="font-thin">date created:</p>
                     <div className=" flex justify-end">
                        <img src="img/delete.png" className="w-[2rem] cursor-pointer" alt="" />
                     </div>
                  </div>
                  <div className=' lg:px-7 flex flex-col gap-4'>
                     <h1 className="pt-5 font-bold">TITTLE: LITTLE DICK</h1>
                     <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae quis fuga dolorum dolorem animi placeat a ratione porro vero!</p>
                     <p className="font-thin">date created:</p>
                     <div className=" flex justify-end">
                        <img src="img/delete.png" className="w-[2rem] cursor-pointer" alt="" />
                     </div>
                  </div>
                  <div className=' lg:px-7 flex flex-col gap-4'>
                     <h1 className="pt-5 font-bold">TITTLE: LITTLE DICK</h1>
                     <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae quis fuga dolorum dolorem animi placeat a ratione porro vero!</p>
                     <p className="font-thin">date created:</p>
                     <div className=" flex justify-end">
                        <img src="img/delete.png" className="w-[2rem] cursor-pointer" alt="" />
                     </div>
                  </div>
                  <div className=' lg:px-7 flex flex-col gap-4'>
                     <h1 className="pt-5 font-bold">TITTLE: LITTLE DICK</h1>
                     <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae quis fuga dolorum dolorem animi placeat a ratione porro vero!</p>
                     <p className="font-thin">date created:</p>
                     <div className=" flex justify-end">
                        <img src="img/delete.png" className="w-[2rem] cursor-pointer" alt="" />
                     </div>
                  </div>
                  <div className=' lg:px-7 flex flex-col gap-4'>
                     <h1 className="pt-5 font-bold">TITTLE: LITTLE DICK</h1>
                     <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae quis fuga dolorum dolorem animi placeat a ratione porro vero!</p>
                     <p className="font-thin">date created:</p>
                     <div className=" flex justify-end">
                        <img src="img/delete.png" className="w-[2rem] cursor-pointer" alt="" />
                     </div>
                  </div>
               </div>

            </div>
          
         </div>
           <div
      className="flex justify-end px-3 fixed md:bottom-20 md:right-20 bottom-6 right-1 z-100 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-200"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img src={imageSrc} alt=""onClick={handleOpenAdd} />
         </div>

         {isOpenAdd &&  <Add/>}
        
      </>
   );
}

export default Todolist;
