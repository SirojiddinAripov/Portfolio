import React from 'react'
import "./works.scss"
import fall from '../../images/fallout.png'
import lara from '../../images/lara.png'
import portal from '../../images/portal.png'
import ruiner from '../../images/ruiner.png'

export default function Works() {
    return (
        <div className="works" id="works">
          <div className="text">
              <h1>Engineering Projects</h1>
              <p>These are my engineering projects because a quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog</p>
          </div>
          <div className="slides">
              <img src={fall} alt="" />
                <div className="buttons">
                    <button className="button" style={{float: "left",}}>⮜</button>
                    <button className="button" style={{float: "right",}}>R</button>
                </div>
            </div>
        </div>
    )
}
