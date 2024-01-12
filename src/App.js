//importamos los ficheros necesarios

import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  //defino las dos funciones que me van hacer falta, las paso como props
  const manejarClic = () => {
    //para comprobar si esta llegando hasta aqui
    console.log("Clic");
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    console.log("Reiniciar");
    setNumClics(0);
  }
  //alternativa a la importación de imagenes vista en testimonios añado la ruta de imagen a traves de una importación
  //defino tres componentes Contador y boton que lo voy a llamar dos veces 
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
