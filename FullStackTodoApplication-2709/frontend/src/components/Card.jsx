import React from 'react'
import { TiTick } from "react-icons/ti";
import { FaTrash } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
const Card = ({data,handleDelete, handleDone}) => {
  // console.log("props: ",data)
  const [edit,setEdit] = React.useState(false)
  const [title,setTitle] = React.useState(data.title)
  const [description,setDescription] = React.useState(data.description)

  async function onChanges(){
    setEdit(false)
    try {
      await fetch(`http://localhost:3000/update`,{
        method:"PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: data._id,
          title: title,
          description: description
        })
      })
    } catch (error) {
      console.log(error)
      alert("error while updating")
    }
  }
  return (
    <div className='w-32 h-32 border-2'>
      <FaTrash onClick={()=>handleDelete(data._id)} className='text-red-500 cursor-pointer' />
      <FaRegEdit onClick={()=>setEdit(true)} />
      {
        edit?
        <>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <textarea value={description} onChange={(e)=>setDescription(e.target.value)} />
          <button onClick={()=>onChanges()}>Change</button>
        </>
        :
        <>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        </>
      }
      <div>
        {
          data.done? 
          (
            <>
            <div className='w-4 h-4 border'>
              <TiTick className='text-green-500' />
              
            </div>
            <p>Done</p>
            </>
          )
          :
          (
            <>
            <div className='w-4 h-4 border' onClick={()=>handleDone(data)}></div>
            <p>UnDone</p>
            </>
          )
        }
        
      </div>
    </div>
  )
}

export default Card