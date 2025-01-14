import { useCallback, useEffect, useMemo, useState, useRef } from "react"
import Navbar from "./components/Navbar"


const nums = new Array(30_000_000).fill(0).map((_,index)=>{
  return {
    index: index,
    magical: index===28_000_000
  }
})
function App() {
  let [count,setCount] = useState(0)
  // let [number,setNumber] = useState(nums)
  // const Num = useMemo(()=>{return number.find((item)=>item.magical===true)},[number])
  // console.log(Num)
  let ref = useRef()
  function increment(){
    setCount(count + 1)
    ref.current.style.color= "red"
  }
  useEffect(()=>{
    console.log("hello")
  },[])
  function decrement(){
    setCount(count -1)
  }
  // console.log(ref)
  //use Callback
  let a = useRef(0)
  useEffect(()=>{
    a.current+=1
    console.log(a.current)
  })
  const setData = useCallback(() =>{
    console.log("use callback",count)
  },[])
  setData()

  
  
  return (
    <>
      <button onClick={increment}>increment</button>
      <p ref={ref}>{count}</p>
      <button onClick={decrement}>decrement</button>
      <Navbar data="any" setData={setData}/>
      {/* {Num.index} */}
    </>
  )
}

export default App
