import React from 'react'
import "./menu.scss"
import { LocalPhoneRounded, EmailRounded } from "@material-ui/icons"
import avatar from '../../images/avatar.png';


export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
            <img src={avatar} height="310"/>                    

                <li>
                    <a href="#Home">Home</a>
                </li>
                <li>
                    <a href="#JavaScript">JavaScript</a>
                </li>
                <li>
                    <a href="#Python">Python</a>
                </li>
                <li>
                    <a href="#Arduino">Arduino</a>
                </li>
            </ul>
            
            <div className="itemContainer" onClick={() => window.open('mailto:aripov86cm@gmail.com')}>
                
                <div className="email">
                
                    <EmailRounded className="icon" />
                    <span>aripov86cm@gmail.com</span>
               
                </div>

            </div>

            <div className="itemContainer">

                <LocalPhoneRounded className="icon" />
                <span>+1 (513) 551-9503</span>

            </div>

        </div>
    )
}
