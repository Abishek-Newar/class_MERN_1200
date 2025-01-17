import React from 'react'
import { useNavigate } from 'react-router-dom'

const Component2 = () => {
    const navigate = useNavigate()
    function go(){
        navigate("/login")
    }
  return (
    <div>Component2
        <button onClick={go}>GO TO</button>
    </div>
  )
}

export default Component2