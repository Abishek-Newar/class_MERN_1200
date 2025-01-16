import { createContext, useState } from "react"
import Counter from "./components/Counter"
import Operations from "./components/Operations"


export const context = createContext(null)
function App() {
  const [count,setCount] = useState(0)
  return (
    <>
      <context.Provider value={{count,setCount}}>
      <Counter />
      <Operations />
      </context.Provider>
    </>
  )
}

export default App
