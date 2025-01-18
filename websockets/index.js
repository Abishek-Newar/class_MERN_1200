import {WebSocket, WebSocketServer} from "ws" 

const ws = new WebSocketServer({port: 3001})

ws.on('connection',(client)=>{
    client.send("connected")
    client.on('message',(data,isBinary)=>{
        ws.clients.forEach((cs)=>{
            if(cs.readyState === WebSocket.OPEN){
                cs.send(data, { binary: isBinary })
            }
        })
    })
})