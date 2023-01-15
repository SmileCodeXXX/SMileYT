import React from 'react'
import { MdDehaze } from "react-icons/md";



function NavBar() {
  return (
    <div className="wrapper">
        <div className="nav-container">
        <div className="logo">SMILE YT</div>
        <div className="links">
            <ul>
                <li>YouTube</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Tiktok</li>
            </ul>
        </div>
        <MdDehaze className="mobile-link"/>
        </div>
        
    </div>
  )
}

export default NavBar;