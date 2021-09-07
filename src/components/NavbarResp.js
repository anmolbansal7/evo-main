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
                        <li><a href="#landing"><input class="menu-btn" type="checkbox" id="menu-btn" /><label class="menu-icon" for="menu-btn">Home</label></a></li>
                        <li><a href="#mission" id="lnk"><input class="menu-btn" type="checkbox" id="menu-btn" />Mission</a></li>
                        <li><a href="#challenges" id="lnk">Challenge</a></li>
                        <li><a href="#solutions" id="lnk">Solutions</a></li>
                        <li><a href="#features" id="lnk">Features</a></li>
                        <li><a href="#contact" id="lnk">Contact Us</a></li>
                    </ul>
                    </header>
            </div>
        </div>
    )
}

export default NavbarResp
