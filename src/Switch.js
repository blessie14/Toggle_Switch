import React,{useState} from "react"
import "./Switch.css"

export default function Switch(){
    const[click, setClick] = useState()

const handleOn = () => {
    setClick("switch off")
}

const handleOff = () => {
    setClick("switch on")
}

    return(
        <div className="container">
            <h1 className="click">{click}</h1>
            <button onClick={handleOn} className="handleOn">ON</button>
            <button onClick={handleOff} className="handleOff">OFF</button>
        </div>
    )
}


