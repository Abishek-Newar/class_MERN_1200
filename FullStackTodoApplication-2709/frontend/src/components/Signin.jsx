import React from 'react'
import { useNavigate } from 'react-router-dom'
import {LabeledInput} from './Signup'
const Signin = ({authType,setAuthType}) => {
    const navigate = useNavigate()
    const [signupdata,setSignupdata] = React.useState({
        email: "",
        password: ""
    })
    function handleChange(type,e){
        setSignupdata((prev)=>({
            ...prev,
            [type]: e.target.value
        }))
    }

    async function handleSubmit(){
        try{
            const response  = await fetch("http://localhost:3000/user/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: signupdata.email,
                    password: signupdata.password
                })
            })
            const data = await response.json()
            if (!response.ok) { // Check if response status is not OK (200-299)
                throw new Error(`HTTP error! Status: ${response.status}`);
            }    
            localStorage.setItem("token",data.token)
            navigate("/home")
        }catch(e){
            alert("error while signinup")
        }
    }
  return (
    <div className='min-h-screen flex items-center justify-center'>
        <div className='w-96 h-auto border rounded-md p-6'>
            <div>
                <LabeledInput type="email" placeholder="abi@gmal.com" id="email" name="Email" onChange={(e)=>handleChange("email",e)} />
                <LabeledInput type="password" placeholder="" id="password" name="Password" onChange={(e)=>handleChange("password",e)} />
            </div>
            <button onClick={handleSubmit}>Signin</button>
            <p>Don't Have a Account? <span className='cursor-pointer' onClick={()=>setAuthType("signup")}>Signup</span></p>
        </div>
    </div>
  )
}

export default Signin