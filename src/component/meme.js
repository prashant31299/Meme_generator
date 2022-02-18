import React  from "react"
import memesData from "../memesData.js"
import '../style.css'
import { useState } from "react"

export default function Meme() {
    /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */

    const [meme , setmeme]=React.useState({
        toptext:"",
        bottomtext:"",
        randomimage:"http://i.imgflip.com/1bij.jpg" 
    })
    
    const [memeimage,setMemeimage] =React.useState(memesData)


    
    function getMemeImage() {
        const memesArray = memeimage.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url =memesArray[randomNumber].url
        setmeme(prevMeme =>({
            ...prevMeme,
            randomimage:url
        }))
    }
    
    return (
        <main>
            <div className="form">

               <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.randomimage} className=" meme--image"/>
        </main>
    )
}