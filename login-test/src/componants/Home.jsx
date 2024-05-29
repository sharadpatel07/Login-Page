import React, { useEffect, useState } from 'react'
import Axios from "axios";

const Home = () => {
  let DataObj = localStorage.getItem("userOBJ")
  let userData = JSON.parse(DataObj)
  
  return (
    <div>
      <h1>data: {userData.email}</h1>
      <button>Access Name</button>
    </div>
    
  )
}

export default Home