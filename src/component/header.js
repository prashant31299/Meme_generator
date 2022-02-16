import React from "react";
import img from './troll_face.jpeg'
import '../style.css'

function Header(){
    return (
<div className="header">
    <img  src={img} className="header--img"/>
   <h2 className="header--title">Meme Generator</h2>
   <h4 className="header--project"> React Course - project</h4>
</div>

    )
}

export default Header