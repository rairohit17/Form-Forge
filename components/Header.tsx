"use client"
import React from 'react'
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useRef } from 'react';
import { UserButton , useClerk } from '@clerk/nextjs';
import { IoIosLogOut } from "react-icons/io";


const Header = () => {
  const { theme, setTheme , resolvedTheme } = useTheme();
  const themeRef = useRef(null);
  const {signOut} = useClerk();
    function handleLogOut(){

  }
  console.log(theme)

  return (
    <div className='flex justify-between items-center p-4'>
      <div className="text-4xl font-bold py-[10px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        Form Forge.
      </div>
      <div className='flex gap-2.5'>
        <button 
          className={`p-2 rounded-full cursor-pointer transition-colors ${resolvedTheme =='dark' ?"" : 'bg-gray-100'}`}  
          onClick={() => setTheme("light")}
        >
          <CiLight className="text-xl" />
        </button>
        <button 
          className={`p-2 cursor-pointer rounded-full transition-colors dark:bg-gray-800`} 
          onClick={() => setTheme("dark")}
        >
          <MdDarkMode className="text-xl" />
          
          
        </button>
        <IoIosLogOut onClick={()=>signOut({ redirectUrl: "/login" })} className=' text-xl cursor-pointer ml-[20px] mt-[10px] md:ml-[100px]' ></IoIosLogOut>
      </div>
    </div>
  );
}

export default Header;
