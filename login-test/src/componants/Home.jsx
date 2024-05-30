import React, { useEffect, useState } from 'react'
import Axios from "axios";

const Home = () => {
  let DataObj = localStorage.getItem("userOBJ")
  let userData = JSON.parse(DataObj)
  let TOKEN = localStorage.getItem("TOKEN")
  let [data , setData] = useState({});
  
//   const HandleFunction = async ()=>{
//     await fetch("http://localhost:4000/auth/getuser" , {
//       method:"post",
//       headers:{
//         "Content-Type": "application/json",
//         "Accept-Encoding":"gzip, deflate, br",
//         "auth-token": TOKEN,
//       },
//   })
//   .then((res)=>{
//     setData(res.json())
//      console.log(data)
//   })
//   .catch((err)=>{
//     console.log(err)
//   })
// }

 const HandleFunction = async()=>{
  await  Axios.post("http://localhost:4000/auth/getuser" ,{} , {
    headers:{
      "Content-Type": "application/json",
      "auth-token": TOKEN,
    }
  })
    .then((res)=>{
      setData(res.data)
    })
 }
  return (
    <div>
      <h1>data: {data.email}</h1>
      <button onClick={HandleFunction}>Access Name</button>
    </div>
    
  )
}

export default Home