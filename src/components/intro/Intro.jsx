import React from 'react'
import "./intro.scss"
import hangman from '../../images/hangMan.gif';
import toDo from '../../images/toDo.png';
import cargo from '../../images/cargo.gif';
import safeHouse from '../../images/safeHouse.gif';
import zombie from '../../images/zombie.gif'
import scorpo from '../../images/scorpo.gif'

export default function Intro() {
    return (
        <div className="intro" id="Home">
            <div className="row">

                <div className="column">
                    <div className="content" onClick={() => window.location.href = "#JavaScript1"}>
                        <img src={hangman} alt="Hangman" style={{width: "100%"}}/>
                        <h3 >JS - The Hang Man Game</h3>
                    </div>
                </div>

                <div className="column">
                    <div className="content" onClick={() => window.location.href = "#Python1"}>
                        <img src={cargo} alt="cargo" style={{width: "100%"}}/>
                        <h3>Python - Cargo</h3>
                    </div>
                </div>

                <div className="column">
                    <div className="content" onClick={() => window.location.href = "#Arduino1"} >
                        <img src={zombie} alt="zombie" style={{width: "100%"}}/>
                        <h3>Arduino - Hanging Zombie</h3>
                    </div>
                </div>

            </div>
            <div className="row">

                <div className="column">
                    <div className="content" onClick={() => window.location.href = "#JavaScript2"} >
                        <img src={toDo} alt="toDo" style={{width: "100%"}}/>
                        <h3>JS - To Do list</h3>
                    </div>
                </div>

                <div className="column">
                    <div className="content" onClick={() => window.location.href = "#Python2"}>
                        <img src={safeHouse} alt="safeHouse" style={{width: "100%"}}/>
                        <h3>Python - Safe House</h3>
                    </div>
                </div>

                <div className="column">
                    <div className="content" onClick={() => window.location.href = "#Arduino2"} >
                        <img src={scorpo} alt="scorpo" style={{width: "100%"}}/>
                        <h3>Arduino - Party Bot!</h3>
                    </div>
                </div>
                <br />
                <h4>Photo by Simon Berger from Pexels</h4>
            </div>
            
        </div>
    )
}
