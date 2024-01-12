import React from 'react';
import '../hojas-de-estilo/Contador.css';

//solo tiene un props que es numclics
//otra alternativa es que podemos pasar props como parametro dentro de la funcion y a la hora de llamarlo hacer props.numClics
function Contador({ numClics }) {
  return (
    <div className='contador'>
      {numClics}
    </div>
  );   
}

export default Contador;
