import React from 'react'
import Titulo from '../Titulo/Titulo';

const Formulario = () => {    
    return (      
      <form>
        <Titulo/>
      <input type="text" placeholder='Ingresar nombre'></input>
      <button> Click </button>
      </form>
    )
      
};

export default Formulario