import { useEffect, useState } from "react"


function App() {
  const [data,setData] = useState([])
  const [current,setCurrent] = useState(1)
  useEffect(()=>{
    async function fetchData(){
      const res = await fetch('https://dummyjson.com/products')
      const response = await res.json()
      console.log(response)
      setData(response.products)
    }
    fetchData()
  },[])
  let length = data.length
  const pages = length/10
  console.log("response",data)
  function changePage(index){
    setCurrent(index+1)
  }
  return (
    <>
      <div>
      {
        data.length === 0 ?(
          <div>Loading...</div>
        ):(
          <>
          {
            data.map((item,index)=>(
              (
                (index < current*10 && index >= (current-1)*10)?
                (<div key={index}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>)
                :
                null
                )
            ))
          }
          </>
        )
      }
      </div>
      <div>
       {
        [...Array(pages)].map((_,index)=>(
          <div key={index} onClick={()=>changePage(index)}>
            {index+1}
          </div>
        ))
      }
      </div>
    </>
  )
}

export default App
