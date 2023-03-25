import './App.css';
import {useState} from 'react'

//componente: es una funcion que comienza con una letra mayuscula
//y retorna JSX

function App() {

  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSustr = () => {
    if(count <= 0){
      return
    }
    setCount(count - 1);
  };

  return (
    <div>
      <h1> {count} </h1>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSustr}>-</button>
    </div>
  );
}

export default App;