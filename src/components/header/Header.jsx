import "./Header.css"
import React from 'react';
import Navbar from "../Navbar/navbar";
function Header() {
    return(
        <>
        <header>
        <Navbar id ="navBr" />
        <label className="pagename">Travel Destination</label>
        <nav>
            <a href="https://twitter.com/HamzaHazaimeh2">My Twitter</a>
            <a href="https://github.com/hamzahazaimeh">My Github</a>
        </nav>
        </header>
        </>
        
    )
  };
  export default Header;

