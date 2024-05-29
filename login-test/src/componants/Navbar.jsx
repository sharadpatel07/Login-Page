import React from 'react'
import {Link,Outlet} from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='nav-main'>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/resister">Resister</Link>
            </div>
            <Outlet/>
        </div>
    )
}

export default Navbar