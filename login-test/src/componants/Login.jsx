import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'
const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [TOKEN , setTOKEN] = useState("");
  const Navigate = useNavigate();
  const HandleSubmit = (ev) =>{
    ev.preventDefault();
    Axios.post("http://localhost:4000/auth/login" , {username,email,password})
    .then((res)=>{
      if(res.data.success){
        console.log(res.data.success)
        setTOKEN(res.data.jwtToken);
        console.log("Token: " ,res.data.jwtToken);
        localStorage.setItem("TOKEN",res.data.jwtToken);
        Navigate("/")
        const obj ={
          name:username,
          email:email
        }
        localStorage.setItem("userOBJ", JSON.stringify(obj))
      }
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <>
      <div className='login-main'>
        <div className='login-container'>
          <h1 className='title'>Login</h1>
          <hr className='line' />
          <form method="post" onSubmit={HandleSubmit}>
            <input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <input type="email" placeholder='example@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <div>
              <label htmlFor="Already sign in">Forget password is: </label>
              <Link to="/resister">reset password</Link>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login