import React, { useContext } from 'react'
import { context } from '../App'

const Counter = () => {
    const {count} = useContext(context)
  return (
    <div>{count}</div>
  )
}

export default Counter