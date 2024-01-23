import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";

const Todolist = () => {
   // State to hold the greeting and current time
   const [greeting, setGreeting] = useState("");
   const [currentTime, setCurrentTime] = useState(getFormattedTime());

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
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className='border lg:px-7 flex flex-col gap-4'>
                     <h1 className="pt-5 font-bold">TITTLE: LITTLE DICK</h1>
                     <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus debitis animi doloremque beatae, quo vitae sequi nam sint voluptatem. Saepe delectus maxime aut pariatur facere consequuntur aliquid beatae hic nihil!</p>
                  </div>
                  <div className='border lg:px-7 flex flex-col gap-4'>
                     <h1 className="pt-5 font-bold">TITTLE: LITTLE DICK</h1>
                     <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae quis fuga dolorum dolorem animi placeat a ratione porro vero!</p>
                  </div>
                  <div className='border lg:px-7 flex flex-col gap-4'>
                     <h1 className="pt-5 font-bold">TITTLE: LITTLE DICK</h1>
                     <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae quis fuga dolorum dolorem animi placeat a ratione porro vero!</p>
                  </div>
                  <div className='border lg:px-7 flex flex-col gap-4'>
                     <h1 className="pt-5 font-bold">TITTLE: LITTLE DICK</h1>
                     <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae quis fuga dolorum dolorem animi placeat a ratione porro vero!</p>
                  </div>
                  <div className='border lg:px-7 flex flex-col gap-4'>
                     <h1 className="pt-5 font-bold">TITTLE: LITTLE DICK</h1>
                     <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae quis fuga dolorum dolorem animi placeat a ratione porro vero!</p>
                  </div>
                  <div className='border lg:px-7 flex flex-col gap-4'>
                     <h1 className="pt-5 font-bold">TITTLE: LITTLE DICK</h1>
                     <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae quis fuga dolorum dolorem animi placeat a ratione porro vero!</p>
                  </div>
                  <div className='border lg:px-7 flex flex-col gap-4'>
                     <h1 className="pt-5 font-bold">TITTLE: LITTLE DICK</h1>
                     <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae quis fuga dolorum dolorem animi placeat a ratione porro vero!</p>
                  </div>
                  <div className='border lg:px-7 flex flex-col gap-4'>
                     <h1 className="pt-5 font-bold">TITTLE: LITTLE DICK</h1>
                     <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae quis fuga dolorum dolorem animi placeat a ratione porro vero!</p>
                  </div>
                  <div className='border lg:px-7 flex flex-col gap-4'>
                     <h1 className="pt-5 font-bold">TITTLE: LITTLE DICK</h1>
                     <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae quis fuga dolorum dolorem animi placeat a ratione porro vero!</p>
                  </div>
                  <div className='border lg:px-7 flex flex-col gap-4'>
                     <h1 className="pt-5 font-bold">TITTLE: LITTLE DICK</h1>
                     <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae quis fuga dolorum dolorem animi placeat a ratione porro vero!</p>
                  </div>
                  <div className='border lg:px-7 flex flex-col gap-4'>
                     <h1 className="pt-5 font-bold">TITTLE: LITTLE DICK</h1>
                     <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae quis fuga dolorum dolorem animi placeat a ratione porro vero!</p>
                  </div>
                  <div className='border lg:px-7 flex flex-col gap-4'>
                     <h1 className="pt-5 font-bold">TITTLE: LITTLE DICK</h1>
                     <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae quis fuga dolorum dolorem animi placeat a ratione porro vero!</p>
                  </div>
               </div>

            </div>
         </div>
      </>
   );
}

export default Todolist;
