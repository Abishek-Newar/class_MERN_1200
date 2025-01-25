import { createContext, useContext, useMemo } from "react";
import {io} from "socket.io-client"

export const context = createContext(null)



export const useSocket = () =>{
    const socket = useContext(context)
    return socket
}

const  ContextProvider = (props) =>{
    
const socket = useMemo(()=>io("localhost:3000"),[])
    return (
        <context.Provider value={socket}>
            {props.children}
        </context.Provider>
    )
}

export default ContextProvider