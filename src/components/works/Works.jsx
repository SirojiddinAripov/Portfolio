import React from 'react'
import "./works.scss"
import one from '../../images/fallout.png'
import two from '../../images/lara.png'
import three from '../../images/portal.png'
import four from '../../images/ruiner.png'

let id = 0;
export default function Works() {
    return (
        <div className="works" id="works">
            <div className="text">
                <h1>Engineering Projects</h1>
                <p>These are my engineering projects because a quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog</p>
            </div>
            <div className="slides">

                <img src={one} id="imagePan1" />

                <div className="buttons">
                    <button className="button left" style={{ float: "left", }} onClick={() => { id--; changePic("imagePan1"); }}>⮜</button>
                    <button className="button right" style={{ float: "right", }} onClick={() => { id++; changePic("imagePan1"); }}>⮞</button>
                </div>
            </div>
        </div>
    )
}
let changePic = (imageID) => {
    if (id > 3)
        id = 0;
    else if (id < 0)
        id = 3;
    document.querySelector("#" + imageID).style = "opacity: 5%"
    setTimeout(() => {
        if (id === 0) {

            document.querySelector("#" + imageID).src = one;

        } else if (id === 1) {

            document.querySelector("#" + imageID).src = two;

        } else if (id === 2) {

            document.querySelector("#" + imageID).src = three;

        } else if (id === 3) {

            document.querySelector("#" + imageID).src = four;

        }
    }, 200)
    setTimeout(() => document.querySelector("#" + imageID).style = "opacity: 100%", 250);
}

