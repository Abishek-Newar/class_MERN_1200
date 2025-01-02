import { createContext, useState } from "react"
import ChangeValues from "./components/ChangeValues"


export const context = createContext(null)

function App() {
  const [count,setCount] = useState(0)
  return (
    <>
      <context.Provider value={{count,setCount}}>
      <ChangeValues />
      </context.Provider>
    </>
  )
}

export default App
