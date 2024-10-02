import React from 'react'

const Navbar = () => {
  return (
   <nav className='flex items-center justify-center  bg-[#45D1FD] h-16'>
    <ul className='flex items-center gap-4 text-xl font-bold text-white cursor-pointer'>
      <li>Home</li>
      <li>Add</li>
    </ul>
   </nav>
  )
}

export default Navbar