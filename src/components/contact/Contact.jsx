import React from 'react'
import "./contact.scss"
import one from '../../images/zombie.gif'
import two from '../../images/zombie2.gif'
import three from '../../images/scorpo.gif'

let id = 0;
let link = "https://aripov-hangman.netlify.app/";

export default function Contact() {

    return (
        <div className="testimonials" id="Arduino">

            <div className="text3" style={{backgroundColor: "rgb(219, 16, 128)",}}>

                <input type="none " style={{ zIndex: "-5", position: "absolute", right: "100%" }} onFocus={() => { id = 0; changePic("imagePan4"); }} id="Arduino1" />
                <input type="none " style={{ zIndex: "-5", position: "absolute", right: "100%" }} onFocus={() => { id = 2; changePic("imagePan4"); }} id="Arduino2" />

                <h1>Engineering Projects</h1>
                <p id = "info3">This is a Hanging Zombie that was made by me along with my good friend Thaddeus Brockwell. This was made for a haunted house project for Engineering. The robot functions on an Arduino microcontroller, and uses pneumatics to pull itself up. In the final version we made it swing from side to side as well as scream. The robot tirggers as soon as someone walks by it. In the next slide you can see the final version.</p>
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
    if (id > 2)
        id = 0;
    else if (id < 0)
        id = 2;
    document.querySelector("#" + imageID).style = "opacity: 5%"
    setTimeout(() => {
        if (id === 0) {
            document.querySelector("#info3").innerHTML = "This is a Hanging Zombie that was made by me along with my good friend Thaddeus Brockwell. This was made for a haunted house project for Engineering. The robot functions on an Arduino microcontroller, and uses pneumatics to pull itself up. In the final version we made it swing from side to side as well as scream. The robot tirggers as soon as someone walks by it. In the next slide you can see the final version.";
            document.querySelector("#" + imageID).style = "right: 50%"
            document.querySelector("#" + imageID).src = one;

        } else if (id === 1) {
            document.querySelector("#info3").innerHTML = "This is a Hanging Zombie that was made by me along with my good friend Thaddeus Brockwell. This was made for a haunted house project for Engineering. The robot functions on an Arduino microcontroller, and uses pneumatics to pull itself up. In the final version we made it swing from side to side as well as scream. The robot tirggers as soon as someone walks by it.";
            document.querySelector("#" + imageID).src = two;

        }else if (id === 2){

            document.querySelector("#info3").innerHTML = 'This is a 4 limbed robot, that was supposed to be a scropio, but me and my good friend Nathon Hanlon over estimated our abilities at the time. In the end the robot turned into a turtle... that would go into "attack" mode if something got infront of it. Even though the project didn\'t turnout the way we wanted it to, we still learned a lot from the expirenace. Our teacher, Mr.Shields, jokingly said we won the most servos used award, so that was something!';
            document.querySelector("#" + imageID).src = three;

        }
    }, 200)
    setTimeout(() => document.querySelector("#" + imageID).style = "opacity: 100%", 250);
}