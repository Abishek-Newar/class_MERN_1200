import { useEffect, useRef, useState } from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Signin from "./components/signin";
import Signup from "./components/signup";
import Home from "./components/home"

function App() {
  // let [count, setCount] = useState(0)
  // let headerRef = useRef()
  // console.log(headerRef)

  // function increment() {
  //   setCount(count + 1)
  //   headerRef.current.style.color = "green"
  // }

  // function decrement() {
  //   setCount(count - 1)
  //   headerRef.current.style.color = "red"
  // }
  // const [data, setData] = useState(0)
  // let c = useRef(0)

  // useEffect(()=>{
  //   c.current +=1
  //   console.log("c",c.current)
  // })
  // useEffect(() => {
  //   fetch('https://dummyjson.com/products')
  //     .then(res => res.json())
  //     .then(console.log);
  // }, [data])

  
  return (
    <>
      {/* <button onClick={increment}>increment</button>
      <h1 ref={headerRef}>{count}</h1>
      <button onClick={decrement}>decrement</button>
      <button onClick={() => { setData(data + 1) }}>change state {data}</button> */}
      <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
