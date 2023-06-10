import {useEffect, useState} from "react";

const Efectos = () => {
    const [contador, setContador] = useState(0);    
    
    const Incrementar = () => {
        setContador(contador + 1)
    }

    useEffect(() => {
        console.log("2- Modificaion de mi componente")
        console.log(contador)
    }, [contador])

    console.log("1- Montaje del componente")

    return (
    <div>
        <h1>Efectos</h1>
        <p>Contador: {contador}</p>
        <p><button onClick={Incrementar} className="btn btn-primary">Incrementar Contador</button></p>
    </div>
    )
}

export default Efectos