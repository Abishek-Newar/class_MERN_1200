import React from 'react'

const Card = (props) => {
  console.log("props: ",props.data)
  return (
    <div className='w-32 h-32 border-2'>
      <h1>{props.data.title}</h1>
      <p>{props.data.description}</p>
    </div>
  )
}

export default Card