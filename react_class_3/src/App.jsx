import { useState } from "react";
function App() {
  let [count,setCount] = useState(0)
  // function increment(){
  //   setCount(count +1)
  // }
  // function Decrement(){
  //   setCount(count -1)
  // }
  const [name,setName] = useState("")
  // const [username,setUsername] = useState("")
  // const [email,setEmail] = useState("")
  // const [password,setPassword] = useState("")
  // function onSubmit(e){
  //   e.preventDefault()
  //   console.log(name)
  //   console.log(username)
  //   console.log(email)
  //   console.log(password)
  // }
  return (
    <>
      {/* <button onClick={Decrement}>Decrement</button>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button> */}

      <form action="">
        <input type="text" onChange={(e)=>{setName(e.target.value);console.log(e.target.value)}} />
      </form>
    </>
  )
}

export default App


// function LabelledInput({name,id,placeholder,type,onChange}){
//   return(
//     <label htmlFor={id}>
//       <p>{name}</p>
//       <input type={type} placeholder={placeholder} id={id} onChange={onChange}  />
//     </label>
//   )
// }
