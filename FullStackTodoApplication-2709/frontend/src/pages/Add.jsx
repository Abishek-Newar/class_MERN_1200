import React from 'react'
import Navbar from '../components/Navbar'

const Add = () => {
  const [title,setTitle] = React.useState("")
  const [description,setDecription] = React.useState("")
  async function AddTodo(e){
    e.preventDefault()
    try{
      const response = await fetch("http://localhost:3000/todo/create",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: title,
          description: description
        })
      })
      alert("todo added")
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div>
      <Navbar />
      <div className='flex justify-center items-center h-screen'>
      <form className='border'>
        <label>
          <p>Title: </p>
          <input type='text' className='border' onChange={(e)=>{setTitle(e.target.value)}} />
        </label>
        <label>
          <p>Description: </p>
          <textarea className='border' onChange={(e)=>{setDecription(e.target.value)}} />
        </label>
        <button onClick={(e)=>{AddTodo(e)}}>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Add