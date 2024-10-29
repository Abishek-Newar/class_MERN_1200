import React from 'react'
import {Link, useNavigate} from "react-router-dom"
const Navbar = () => {
  const navigate = useNavigate()
  function Logout(){
    localStorage.removeItem("token")
    navigate("/")
  }
  return (
   <nav className='flex items-center justify-center gap-10  bg-[#45D1FD] h-16'>
    <ul className='flex items-center gap-4 text-xl font-bold text-white cursor-pointer'>
      <Link to="/home"><li>Home</li></Link>
      <Link to="/add"><li>Add</li></Link>
    </ul>
    <button className='h-12 w-36 bg-yellow-400 rounded-md' onClick={Logout}>Logout</button>
   </nav>
  )
}

export default Navbar