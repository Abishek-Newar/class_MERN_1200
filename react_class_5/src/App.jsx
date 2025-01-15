import { useCallback, useEffect, useMemo, useState } from "react"
import Navbar from "./components/Navbar"

// var nums = new Array(30_000_000).fill(0).map((_,index)=>{
//   return{
//     index: index,
//     magical: index===29_000_000
//   }
// })


function App() {

  // const [number,setNumber] = useState(nums)

  // const magical = useMemo(()=>{
  //   return number.find((item)=>item.magical===true)
  // },[number])

  const [count,setCount] = useState(0)
  function increament(){
    setCount(count + 1)
  }
  function decreament(){
    setCount(count - 1)
  }

  useEffect(()=>{
    console.log("use effect",count)
  },[count])
  const demo = useCallback(()=>{
    console.log("function invoked",count)
  },[count])
  demo()
  // function demo(){
  //   console.log("function invoked")
  // }
  return (
    <>
    <Navbar data="hello" demo={demo} />
      <button onClick={increament}>increment</button>
      <h1>{count}</h1>
      <button onClick={decreament}>decrement</button>
      {/* <h1>{magical.index}</h1> */}
    </>
  )
}

export default App
