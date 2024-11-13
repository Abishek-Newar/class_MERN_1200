import { useEffect, useState } from "react"


function App() {
  const [data,setData] = useState([])
  const [current,setCurrent] = useState(1)
  useEffect(()=>{
    async function fetchData(){
      const res = await fetch('https://dummyjson.com/products?limit=20')
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

  function descreasePage(){
    if(current> 1){
      setCurrent(current - 1)
    }
  }
  function increasePage(){
    if(current< pages){
      setCurrent(current + 1)
    }
  }
  return (
    <>
      <div>
      {
        data.length === 0 ?(
          <div>Loading...</div>
        ):(
          <div className="container">
          {
            data.map((item,index)=>(
              (
                (index < current*10 && index >= (current-1)*10)?
                (<div className="card" key={index}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>)
                :
                null
                )
            ))
          }
          </div>
        )
      }
      </div>
      <div className="page">
        <div className="pageBox" onClick={descreasePage}> - </div>
       {
        [...Array(pages)].map((_,index)=>(
          <div className="pageBox" key={index} onClick={()=>changePage(index)}>
            {index+1}
          </div>
        ))
      }
      <div className="pageBox" onClick={increasePage}> + </div>
      </div>

    </>
  )
}

export default App
