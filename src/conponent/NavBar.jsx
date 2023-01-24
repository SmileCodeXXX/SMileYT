import React from 'react'
import { MdDehaze } from "react-icons/md";
import { Outlet,Link } from 'react-router-dom';



function NavBar() {
  return (
    <>
    <div className="wrapper">
        <div className="nav-container">
        <div className="logo"><Link to="/">SMILE YT</Link></div>
        <div className="links">
            <ul>
                <li><Link to='/'>YouTube</Link></li>
                <li><Link to='/'>Facebook</Link></li>
                <li><Link to='/'>Instagram</Link></li>
                <li><Link to='/'>Tiktok</Link></li>
            </ul>
        </div>
        <MdDehaze className="mobile-link"/>
        
        </div>
      
    </div>
    <Outlet/>
    </>
    
  )
}

export default NavBar;