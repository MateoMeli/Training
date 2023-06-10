import { useEffect, useState } from "react";

const Promesas = () => {
    const [objeto, setObjeto] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            // resolve({id:1, nombre:"Coca Cola", precio:700})
            reject("no se pudo cargar")

        });
        console.log(promesa)

        promesa.then(valor => {
            setObjeto(valor);
        }/*, error => {
            setError(true)
            setObjeto(error)
        }*/).catch(errorPromesa => {
            setError(true);
            setObjeto(errorPromesa);
        })

    }, [error])
    return (
        <div>
            <h1>Promesas</h1>
            {error ? <p>{objeto}</p> : <p>{`Id: ${objeto.id} - Nombre: ${objeto.nombre} - Precio ${objeto.precio}`}</p>}
        </div>
    )
}

export default Promesas