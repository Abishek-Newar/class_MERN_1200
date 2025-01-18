import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const navigate = useNavigate()
    function gothere(){
        navigate("/")
    }
  return (
    <div onClick={gothere}>Signin</div>
  )
}

export default Signin