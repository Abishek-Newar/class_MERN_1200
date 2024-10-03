import React from 'react'
import { FaTrash } from "react-icons/fa";
const Card = (props) => {
  console.log("props: ",props.data)

  async function handleDelete(){
    try{
      await fetch(`http://localhost:3000/delete?id=${props.data._id}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      })
      alert("Todo deleted")
      location.reload()
    }catch(e){
      console.log(e)
      alert("error while deleting")
    }
  }
  return (
    <div className='w-32 h-32 border-2'>
      <FaTrash onClick={handleDelete} className='text-red-500 cursor-pointer' />
      <h1>{props.data.title}</h1>
      <p>{props.data.description}</p>
    </div>
  )
}

export default Card