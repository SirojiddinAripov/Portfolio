import React from 'react'
import "./topbar.scss"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>

            <div className="wrapper">
                
                <div className="left">

                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    
                    </div>

                    <a href="#Home" className="logo">A R I P O V</a>

                </div>

                <div className="right">
    
                </div>

            </div>
        </div>
    )
}
