import React, { memo, useState } from 'react'
import { useFetch } from './useFetch'
import { useLocalStorage } from './useLocalStorage'

const Navbar = ({data,setData}) => {
    const [name,setName] = useLocalStorage("data","")
  return (
    <div >
        <input type="text" onChange={((e)=>setName(e.target.value))} value={name} />
    </div>
  )
}

export default memo(Navbar)