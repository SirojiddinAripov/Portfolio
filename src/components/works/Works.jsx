import React from 'react'
import "./works.scss"
import fall from '../../images/fallout.png'
import lara from '../../images/lara.png'
import portal from '../../images/portal.png'
import ruiner from '../../images/ruiner.png'

let id = 0;
export default function Works() {
    return (
        <div className="works" id="works">
            <div className="text">
                <h1>Engineering Projects</h1>
                <p>These are my engineering projects because a quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog</p>
            </div>
            <div className="slides">
                <img src={fall} alt="" id="imagePan" />
                <div className="buttons">
                    <button className="button left" style={{ float: "left", }} onClick={() => { id++; changePic(); }}>⮜</button>
                    <button className="button right" style={{ float: "right", }} onClick={() => { id--; changePic(); }}>⮞</button>
                </div>
            </div>
        </div>
    )
}
let changePic = () => {
    if (id > 3)
        id = 0;
    else if (id < 0)
        id = 3;

    if (id == 0) {
        document.querySelector("#imagePan").src = fall;
    } else if (id == 1) {
        document.querySelector("#imagePan").src = lara;
    } else if (id == 2) {
        document.querySelector("#imagePan").src = portal;
    } else if (id == 3) {
        document.querySelector("#imagePan").src = ruiner;
    }
}
