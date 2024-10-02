import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const Home = () => {
  const [data,setData] = React.useState([])
  React.useEffect(()=>{
    async function fetchData(){
      const response = await fetch("http://localhost:3000/read")
     const res = await response.json()
     console.log("response from backend for read",res.response)
     setData(res.response)
    }

    fetchData()
  },[])
  return (
    <div>
      <Navbar />
      {
        data.length === 0?
        <div>No Todos Added</div>
        :
        (
          <div className='flex gap-3 flex-wrap'>
            {data.map((item,index)=>(
            <div key={index}>
              <Card data={item}  />
            </div>
          ))}
          </div>
        )
      }
    </div>
  )
}

export default Home