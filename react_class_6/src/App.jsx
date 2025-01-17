import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import Counter from './components/Counter'
import Operations from './components/Operations'



export const context = createContext(null)
const App = () => {

  const [count,setCount] = useState(0)
  return (
    <context.Provider value={{count,setCount}}>
      <Counter />
      <Operations />
    </context.Provider>
  )
}

export default App