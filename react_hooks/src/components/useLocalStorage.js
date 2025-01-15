import { useEffect, useState } from "react";

// function getValue(key,initalValue){
//     const value = JSON.parse(localStorage.getItem(key))

//     if(value) return value

//     if(initalValue instanceof Function) return initalValue()

//     return initalValue
// }

export function useLocalStorage(key,initalValue){
    const [data,setData] = useState(()=>{
        const jsonValue = localStorage.getItem(key)
        if(jsonValue != null) return JSON.parse(jsonValue)
        return initalValue
    })
    

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(data))
    },[key,data])


    return [data,setData]
}