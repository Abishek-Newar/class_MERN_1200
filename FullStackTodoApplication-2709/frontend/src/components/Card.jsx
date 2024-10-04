import React from 'react'
import { TiTick } from "react-icons/ti";
import { FaTrash } from "react-icons/fa";
const Card = ({data,handleDelete, handleDone}) => {
  // console.log("props: ",data)

  
  return (
    <div className='w-32 h-32 border-2'>
      <FaTrash onClick={()=>handleDelete(data._id)} className='text-red-500 cursor-pointer' />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
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