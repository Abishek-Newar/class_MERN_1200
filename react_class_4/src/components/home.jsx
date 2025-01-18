import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        Home
        <Link to="/signin">Signin</Link>
        <Link to="/signup">Signup</Link>
    </div>
  )
}

export default Home