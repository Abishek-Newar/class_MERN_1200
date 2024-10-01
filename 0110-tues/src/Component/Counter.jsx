import React from 'react'

const Counter = ({count,CounterAdd,CountSub}) => {
  return (
    <>
    <h1>{count}</h1>
    <button onClick={CounterAdd}>Add</button>   
    <button onClick={CountSub}>Sub</button>
    </>
  )
}

export default Counter