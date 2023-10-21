import React from 'react'
import { Link } from 'react-router-dom'
import Pokemon from "../asserts/Pokémon.png"
 
const Header = () => {
  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
    <div className='flex items-center h-full justify-between'>
        <Link to={""}>
        <div className="h-16">
             <img src={Pokemon} className='h-full'/>
         </div>
        </Link>
       
        <div className='flex items-center gap-4 md:gap-7'>  
         <nav className='gap-4 md:gap-6 text-base md:text-lg hidden md:flex'>  
             <Link to={""}>Home</Link>
         </nav>
        </div>
    </div>
 </header>
  )
}

export default Header