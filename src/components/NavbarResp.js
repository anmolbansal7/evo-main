import React from 'react'
import './NavbarResp.css'

function NavbarResp() {
    return (
        <div className="responsivenav">
            <div class="menu-wrapper">
                <header class="header">
                    <input class="menu-btn" type="checkbox" id="menu-btn" />
                    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                    <ul class="menu">
                        <li><a href="#about">Home</a></li>
                        <li><a href="#mission">Mission</a></li>
                        <li><a href="#challenge">Challenge</a></li>
                        <li><a href="#solutions">Solutions</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                    </header>
            </div>
        </div>
    )
}

export default NavbarResp
