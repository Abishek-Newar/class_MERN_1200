import React from 'react'
import { useNavigate } from 'react-router-dom'

const Component2 = () => {
  const navigate = useNavigate()
  function onSubmit(){
    navigate("/signup")
  }
  return (
    <div>Component2
      <button onClick={onSubmit}>Go</button>
    </div>
  )
}

export default Component2