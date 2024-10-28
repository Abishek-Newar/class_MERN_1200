import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = ({authType,setAuthType}) => {
    const navigate = useNavigate()
    const [signupdata,setSignupdata] = React.useState({
        username: "",
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
        let flag = 0
        if(signupdata.password.length <6){
            flag = 1
            alert("password need to be atleast 6 digits")
        }
        if(flag === 0){
            try{
                const response  = await fetch("http://localhost:3000/user/signup",{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: signupdata.username,
                        email: signupdata.email,
                        password: signupdata.password
                    })
                })
                const data = await response.json()
                localStorage.setItem("token",data.token)
                navigate("/home")
            }catch(e){
                alert("error while signinup")
            }
        }
    }
  return (
    <div className='min-h-screen flex items-center justify-center'>
        <div className='w-96 h-auto border rounded-md p-6'>
            <div>
                <LabeledInput type="text" placeholder="abi123" id="username" name="Username" onChange={(e)=>handleChange("username",e)} />
                <LabeledInput type="email" placeholder="abi@gmal.com" id="email" name="Email" onChange={(e)=>handleChange("email",e)} />
                <LabeledInput type="password" placeholder="" id="password" name="Password" onChange={(e)=>handleChange("password",e)} />
            </div>
            <button onClick={handleSubmit}>Signup</button>
            <p>Already Have a Account? <span className='cursor-pointer' onClick={()=>setAuthType("signin")}>Signin</span></p>
        </div>
    </div>
  )
}

export const LabeledInput = ({name,id,placeholder,onChange,type}) =>{
    return <label htmlFor={id}>
        <p>{name}</p>
        <input className='border rounded-md' type={type} placeholder={placeholder} id={id} onChange={onChange} />
    </label>
}

export default Signup