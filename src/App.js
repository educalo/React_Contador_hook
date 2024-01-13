//importamos los ficheros necesarios

import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
//función importada desde react, hook mas importante de React, para actualizar un componente especifico
import { useState } from 'react';

function App() {

  //array con dos elementos
  //numClics: el valor que queremos usar como el estado
  //setNumClics función que nos permite actualizar el estado, la palabra set es una convención set + nombre estado
  //a esto se le asigna el valor retornado por useState, cuyo valor inicial es 0
  const [numClics, setNumClics] = useState(0);

  //defino las dos funciones que me van hacer falta, las paso como props
  const manejarClic = () => {
    //para comprobar si esta llegando hasta aqui
    console.log("Clic");
    //actualiza solo lo que es necesario, en nuestro caso el numclics, no se actualiza toda la página
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
