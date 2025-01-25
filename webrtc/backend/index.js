import { Server } from "socket.io";

const io = new Server(3000,{
    cors:{
        origin: "http://localhost:5173"
    }
})

io.on('connection',(socket)=>{
    console.log("connected sockets")

    socket.on("room:join",(data)=>{
        console.log(data)

        io.to(socket.id).emit("room:join",data)
    })
})