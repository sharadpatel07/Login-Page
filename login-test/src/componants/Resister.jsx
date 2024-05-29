import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Axios from 'axios'
const Resister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();
  const HandleSubmit = (ev) =>{
    ev.preventDefault();
    Axios.post("http://localhost:4000/auth/signup" , {name,email,password})
    .then((res)=>{
      console.log(res);
      Navigate("/login");
    })
    .catch((error)=>{
      console.log("Error");
    })
  }
  return (
    <>
     <div className='login-main'>
        <div className='login-container'>
          <h1 className='title'>Resister</h1>
          <hr className='line' />
          <form method="post" onSubmit={HandleSubmit}>
            <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder='example@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <div>
              <label htmlFor="Already sign in">Forget password is: </label>
              <Link to="/login">reset password</Link>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Resister