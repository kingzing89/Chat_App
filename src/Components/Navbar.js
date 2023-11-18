import React from 'react'
import "../styles/navbar.css"
import { Link } from "react-router-dom";
import logo from "../Images/Logo1.png"



export default function Navbar() {
  return (
    
        <ul class="Navbar">
            <li class="Logo" ><img src={logo} alt="Logo" class="img-logo"/></li>
            <Link to="/blog" class="link"><li class="Menu-item">Blog</li></Link>
            <Link to="/chat" class="link"> <li class="Menu-item">Chat</li></Link>
            <li class="Login">Login</li>





        </ul>








    
  )
}
