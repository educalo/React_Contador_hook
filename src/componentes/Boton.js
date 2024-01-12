//importo los ficheros necesarios
import React from 'react';
import '../hojas-de-estilo/Boton.css';

//paso props el objeto paso las propiedades directamente: texto, esBotoDeclic (operador de condición), manejarClic
function Boton({ texto, esBotonDeClic, manejarClic }) {
  //añado una clase con una condición, operador ternario,  dependiendo la funcion del botón
  //añado el event Listener onClick llamando a la función manejarClic que se pasa como props, esta función viene del componente que renderize el boton, en nuestro caso App.js
  return (
    <button
      className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={manejarClic}>
      {texto}
    </button>
  );
}

//para poder importarlo lo tenemos que exportar
export default Boton;