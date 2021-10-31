import React from 'react'
import "./contact.scss"
import one from '../../images/fallout.png'
import two from '../../images/lara.png'

let id = 0;
let link = "https://aripov-hangman.netlify.app/";

export default function Contact() {

    return (
        <div className="testimonials" id="testimonials">

            <div className="text3" style={{backgroundColor: "rgb(219, 16, 128)",}}>

                <input type="none " style={{ zIndex: "-5", position: "absolute", right: "100%" }} onFocus={() => { id = 0; changePic("imagePan4"); }} id="JavaScript6" />
                <input type="none " style={{ zIndex: "-5", position: "absolute", right: "100%" }} onFocus={() => { id = 1; changePic("imagePan4"); }} id="JavaScript7" />

                <h1>Engineering Projects</h1>
                <p>These are my engineering projects because a quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog</p>
            </div>
            <div className="slides4">
                <img src={one} alt="" id="imagePan4" />
                <div className="buttons4">
                    <button className="button4 left4" style={{ float: "left",}} onClick={() => { id--; changePic("imagePan4"); }}>⮜</button>
                    <button className="button4 right4" style={{ float: "right",}} onClick={() => { id++; changePic("imagePan4"); }}>⮞</button>
                </div>
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

            document.querySelector("#" + imageID).src = one;

        } else if (id === 1) {

            document.querySelector("#" + imageID).src = two;

        }
    }, 200)
    setTimeout(() => document.querySelector("#" + imageID).style = "opacity: 100%", 250);
}