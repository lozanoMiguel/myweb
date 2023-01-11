import React from "react";
import '../styles/Navbar.css'

function Navbar(){

    return <header className="topHeader">
                <nav className="topNav">
                    <ul className="menu">   
                        <li><a href="#profile" className="profileColor">profile</a></li>
                        <li><a href="#skills" className="skillsColor">skills</a></li>
                        <li><a href="#projects" className="projectsColor">projects</a></li>
                        <li><a href="#contact" className="contactColor">contact</a></li>
                    </ul> 
                </nav>
           </header>
}

export default Navbar;