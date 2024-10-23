import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
   <nav className='flex items-center justify-center  bg-[#45D1FD] h-16'>
    <ul className='flex items-center gap-4 text-xl font-bold text-white cursor-pointer'>
      <Link to="/home"><li>Home</li></Link>
      <Link to="/add"><li>Add</li></Link>
    </ul>
   </nav>
  )
}

export default Navbar