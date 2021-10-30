import React from 'react'
import "./testimonials.scss"
import lara from '../../images/lara.png'

export default function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">

            <div className="slides3">
                <img src={lara} alt="" />
                <div className="buttons3">
                    <button className="button3 left3" style={{ float: "left", }} onClick={() => console.log("left")}>⮜</button>
                    <button className="button3 right3" style={{ float: "right", }} onClick={() => console.log("right")}>⮞</button>
                </div>
            </div>

            <div className="text3">
                <h1>Engineering Projects</h1>
                <p>These are my engineering projects because a quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog</p>
            </div>
            
        </div>
    )
}
