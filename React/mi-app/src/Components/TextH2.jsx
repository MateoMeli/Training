import { useState, useEffect } from "react";

const TextH2 = () => {
  
    const [text, setText] = useState("");

    function handleText(e) { 
        setText(e.target.value)
    }
        
    useEffect( () => {
        console.log("Componente montado!")
        return () => {
            console.log("Componente desmontado!")
        }
    }, [])

    useEffect( () => {
        console.log("Texto modificado!")

    }, [text])

    return (
    <div>
        <input type="text" onChange={handleText}/>
        <p>{text}</p>
    </div>
  )
}

export default TextH2;