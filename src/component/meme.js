import React  from "react"
import memesData from "../memesData.js"
import '../style.css'

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
    
    const [memeimage,setAllMemes] =React.useState(memesData)



    React.useEffect(() => {
        async function getMeme() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMeme()
    }, [])
    
    function getMemeImage() {
        const memesArray = memeimage.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url =memesArray[randomNumber].url
        setmeme(prevMeme =>({
            ...prevMeme,
            randomimage:url
        }))
    }
    
    function handlechange(event){
        const {name,value}=event.target
        setmeme(preve=>({
            ...preve,[name]:value
        }))

    }
    return (
        <main>
            <div className="form">

               <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    value={meme.toptext}
                    name="toptext"
                    onChange={handlechange}

                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    value={meme.bottomtext}
                    name="bottomtext"
                    onChange={handlechange}

                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>

            <div className="meme">
            <img src={meme.randomimage} className=" meme--image"/>
            <h2 className="meme--text top">{meme.toptext} </h2>
            <h2 className="meme--text bottom">{meme.bottomtext} </h2>
            </div>
        </main>
    )
}