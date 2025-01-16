import React, { useContext } from 'react'
import { context } from '../App'

const Operations = () => {
    const {count,setCount} = useContext(context)
  return (
    <div>
        <button onClick={()=>{setCount(count + 1)}}>increment</button>
        <button onClick={()=>{setCount(count - 1)}}>decrement</button>
    </div>
  )
}

export default Operations