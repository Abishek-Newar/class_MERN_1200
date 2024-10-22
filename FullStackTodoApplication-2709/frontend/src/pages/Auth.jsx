import React from 'react'
import Signup from '../components/Signup'
import Signin from '../components/Signin'

const Auth = () => {
    const [authType,setAuthType] = React.useState("signup")
  return (
    <div>
        {
            authType === "signup"?
            <Signup authType={authType} setAuthType={setAuthType} />
            :
            <Signin authType={authType} setAuthType={setAuthType} />
        }
    </div>
  )
}

export default Auth