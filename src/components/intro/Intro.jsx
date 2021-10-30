import React from 'react'
import "./intro.scss"
import hangman from '../../images/hangman.png';

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="row">

                <div className="column">
                    <div className="content" onClick={() => window.open('https://aripov-hangman.netlify.app/')}>
                        <img src={hangman} alt="Hangman" />
                        <h3 >The Hang Man Game</h3>
                    </div>
                </div>

                <div className="column">
                    <div className="content">
                        <img src={hangman} alt="Hangman" />
                        <h3>The Hang Man Game</h3>
                    </div>
                </div>

                <div className="column">
                    <div className="content">
                        <img src={hangman} alt="Hangman" />
                        <h3>The Hang Man Game</h3>
                    </div>
                </div>

            </div>
            <div className="row">

                <div className="column">
                    <div className="content" onClick={() => window.open('https://aripov-hangman.netlify.app/')}>
                        <img src={hangman} alt="Hangman" />
                        <h3 >The Hang Man Game</h3>
                    </div>
                </div>

                <div className="column">
                    <div className="content">
                        <img src={hangman} alt="Hangman" />
                        <h3>The Hang Man Game</h3>
                    </div>
                </div>

                <div className="column">
                    <div className="content">
                        <img src={hangman} alt="Hangman" />
                        <h3>The Hang Man Game</h3>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
