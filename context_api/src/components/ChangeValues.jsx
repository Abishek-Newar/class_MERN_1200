import React, { useContext } from 'react'
import Counter from './Counter'
import { context } from '../App'

const ChangeValues = () => {
    const {count,setCount} = useContext(context)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
      <Counter/>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default ChangeValues