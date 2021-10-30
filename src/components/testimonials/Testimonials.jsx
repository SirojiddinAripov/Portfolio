import React from 'react'
import "./testimonials.scss"
import one from '../../images/fallout.png'
import two from '../../images/lara.png'
import three from '../../images/portal.png'
import four from '../../images/ruiner.png'

let id = 0;

export default function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">

            <div className="slides3">
                <img src={one} alt="" id="imagePan2"/>
                <div className="buttons3">
                    <button className="button3 left3" style={{ float: "left", }} onClick={() => { id--; changePic("imagePan2"); }}>⮜</button>
                    <button className="button3 right3" style={{ float: "right", }} onClick={() => { id++; changePic("imagePan2"); }}>⮞</button>
                </div>
            </div>

            <div className="text3">
                <h1>Engineering Projects</h1>
                <p>These are my engineering projects because a quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog</p>
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