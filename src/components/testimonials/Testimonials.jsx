import React from 'react'
import "./testimonials.scss"
import one from '../../images/cargo1.gif'
import two from '../../images/safeHouseDemo.gif'
import three from '../../images/portal.png'
import four from '../../images/ruiner.png'

let id = 0;
let link = "https://py3.codeskulptor.org/#user306_R0Gy8vv43d_0.py";

export default function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">

            <div className="slides3">
                <img src={one} alt="" id="imagePan3" />
                <div className="buttons3">
                    <button className="button3 left3" style={{ float: "left", }} onClick={() => { id--; changePic("imagePan3"); }}>⮜</button>
                    <button className="button3 right3" style={{ float: "right", }} onClick={() => { id++; changePic("imagePan3"); }}>⮞</button>
                </div>
            </div>

            <div className="text3">
                
                <input type="none " style={{ zIndex: "-5", position: "absolute", right: "100%" }} onFocus={() => { id=0; changePic("imagePan3"); }} id="JavaScript4" />
                <input type="none " style={{ zIndex: "-5", position: "absolute", right: "100%" }} onFocus={() => { id=1; changePic("imagePan3"); }} id="JavaScript5" />

                <h1 id="title" style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => { window.open(link) }}>Python Projects</h1>
                <p id = "info2" style={{ fontSize: "140%" }}>This is a Python Project was made using a SimpleGUI library. The project was made for a CincyHacks 2021 competition, by me, Matthew Barnett, and Joshua Kalsmeier. The project was completed in under 24 hours, and my basic game safe house shown in the next slide was used the baseline to develop this game. I was in charge of the game design, physics, design functions, and we all worked on developing a collision system. We ended up developing a game engine with our own physics and collisions. In the end we won the BestGame Category.</p>
                <br />
                <p style={{ textDecoration: "underline", cursor: "pointer", fontSize: "110%" }} onClick={() => { window.open(link) }}>Click Me or the Title to try it out!</p>
                <p id="compLink" style={{ textDecoration: "underline", cursor: "pointer", fontSize: "110%" }} onClick={() => { window.open("https://cincyhacks2021.devpost.com/project-gallery") }}>Click Me to view the competition!</p>
            </div>

        </div>
    )
}

let changePic = (imageID) => {
    if (id > 1)
        id = 0;
    else if (id < 0)
        id = 1;
    document.querySelector("#" + imageID).style = "opacity: 5%"
    setTimeout(() => {
        if (id === 0) {

            document.querySelector("#info2").innerHTML = "This is a Python Project was made using a SimpleGUI library. The project was made for a CincyHacks 2021 competition, by me, Matthew Barnett, and Joshua Kalsmeier. The project was completed in under 24 hours, and my basic game safe house shown in the next slide was used the baseline to develop this game. I was in charge of the game design, physics, design functions, and we all worked on developing a collision system. We ended up developing a game engine with our own physics and collisions. In the end we won the BestGame Category."
            document.querySelector("#" + imageID).src = one;
            document.querySelector("#compLink").innerHTML = "Click Me to view the competition!";
            link = "https://py3.codeskulptor.org/#user306_R0Gy8vv43d_0.py";
        } else if (id === 1) {
            document.querySelector("#info2").innerHTML ="This is SafeHouse, a game developed completely by me with my knowledge of SimpleGUI library in Python. I expiremented on getting the input from a keyboard which inspired me to make a game. SimpleGUI can only draw simple shapes, so I had to tinker around to come up with this game. Your goal is to get inside the blue square until the red bar reaches the top. You can't get out of bounds as it will end the game."
            document.querySelector("#" + imageID).src = two;
            document.querySelector("#compLink").innerHTML = "";
            link = "https://py3.codeskulptor.org/#user306_1AfhOZrmJz6caoB_2.py";
        }
    }, 200)
    setTimeout(() => document.querySelector("#" + imageID).style = "opacity: 100%", 250);
}