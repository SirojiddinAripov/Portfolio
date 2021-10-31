import React from 'react'
import "./works.scss"
import one from '../../images/hangMan3.gif'
import two from '../../images/toDo.gif'

let id = 0;
let link = "https://aripov-hangman.netlify.app/";
export default function Works() {
    return (
        <div className="works" id="JavaScript">
            <div className="text">
                <input type = "none "style={{ zIndex:"-5", position: "absolute", right: "100%"}} onFocus={() => { id--; changePic("imagePan2"); }} id="JavaScript2" />
                <input type = "none "style={{ zIndex:"-5", position: "absolute", right: "100%"}} onFocus={() => { id++; changePic("imagePan2"); }} id="JavaScript3" />
                <h1 id="title" style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => { window.open(link) }}>JavaScript Projects</h1>
                <p id="info">HangMan, was one my first JavaScript projects, that I built following a tutorial to learn how to use JavaScript promises, to fetch data from external API. In this game, the external data is the DataBase with words. I expanded the web-app by adding more features like the keyboard, images and two-player mode.</p>
                <p style={{ textDecoration: "underline", cursor: "pointer", fontSize: "130%" }} onClick={() => { window.open(link) }}>Click Me or the Title to try it out!</p>
            </div>
            <div className="slides">

                <img src={one} alt="" id="imagePan2" />

                <div className="buttons">
                    <button className="button left" style={{ float: "left", }} onClick={() => { id--; changePic("imagePan2"); }}>⮜</button>
                    <button className="button right" style={{ float: "right", }} onClick={() => { id++; changePic("imagePan2"); }}>⮞</button>
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
            document.querySelector("#info").innerHTML = "HangMan, was one my first JavaScript projects," +
                "that I built following a tutorial to learn how to use JavaScript promises," +
                " to fetch data from external API. In this game, the external data is the DataBase with words." +
                " I expanded the web-app by adding more features like the keyboard, images and two-player mode."
            document.querySelector("#" + imageID).src = one;
            link = "https://aripov-hangman.netlify.app/";
        } else if (id === 1) {
            document.querySelector("#info").innerHTML = "ToDo, was my first project in JavaScript," +
                "I had to follow a tutorial to learn how to use JavaScript " +
                "to sort through items, use unique identifiers, use searching algorithms " +
                "as well as gain my first and basic knowledge in CSS. " +
                "I learned JavaScript, node.js, and React.js, from Andrew Mead's courses. " +
                "With all of the knowldge that I gained through tutorials and expirementation I am capable using JavaScript to build websites such as these."
            document.querySelector("#" + imageID).src = two;
            link = "https://aripov-todolist.netlify.app/";
        }
    }, 200)
    setTimeout(() => document.querySelector("#" + imageID).style = "opacity: 100%", 250);
}
