import React, { useEffect } from 'react'
import { useSocket } from '../Context/ContextProvider'
import { useNavigate } from 'react-router-dom'

const Lobby = () => {

    const [data,setData] = React.useState({
        email: "",
        room: ""
    })
    const socket = useSocket()
    const navigate = useNavigate()
    function handleChange(type,e){
        setData({
            ...data,
            [type]:e.target.value
        })
    }

    const handleSubmit = React.useCallback((e)=>{
        e.preventDefault()
        console.log(data)
        socket.emit("room:join",data)
        
    },[data,socket])


    const handleRoomJoin = React.useCallback((data)=>{
        console.log("data from backend",data)
        navigate(`/room/${data.room}`)
    },[navigate])

    useEffect(()=>{
        socket.on("room:join",handleRoomJoin)

        return () =>{
            socket.off("room:join",handleRoomJoin)
        }
    },[socket])
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">
                <p>Email: </p>
                <input type="email" name="" id="email" onChange={(e)=>{handleChange("email",e)}} />
            </label>
            <label htmlFor="room">
                <p>Room ID: </p>
                <input type="text" name="" id="room" onChange={(e)=>{handleChange("room",e)}} />
            </label>
            <button type="submit">Join</button>
        </form>
    </div>
  )
}

export default Lobby