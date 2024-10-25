import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const Home = () => {
  const [data,setData] = React.useState([])
  React.useEffect(()=>{
    async function fetchData(){
      const response = await fetch("http://localhost:3000/todo/read",{
        method: "GET",
        headers: {
          "authorization": localStorage.getItem("token")
        }
      })
     const res = await response.json()
     console.log("response from backend for read",res.response)
     setData(res.response)
    }

    fetchData()
  },[])
  async function handleDelete(id){
    try{
      await fetch(`http://localhost:3000/todo/delete?id=${id}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      })
      setData((current)=>current.filter(item => item._id !== id))

      alert("Todo deleted")
    }catch(e){
      console.log(e)
      alert("error while deleting")
    }
  }

  async function handleDone(data){
    try {
      await fetch(`http://localhost:3000/todo/update`,{
        method:"PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: data._id,
          title: data.title,
          description: data.description
        })
      })
      setData((current)=>current.map((item)=>{
        if(item._id === data._id){
          return {...item,done: true}
        }
        return item
      }))
    } catch (error) {
      console.log("error wile updating")
      alert("error while updating")
    }
  }
  
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
              <Card data={item} handleDelete={handleDelete} handleDone={handleDone} />
            </div>
          ))}
          </div>
        )
      }
    </div>
  )
}

export default Home