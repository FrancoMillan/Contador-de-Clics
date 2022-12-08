import React from 'react';
import '../stylesheet/Web.css';

function Web(props) {

  return (
    <div className='contenedor-web'>
      <img
         className='imagen-web'
         src={require(`../imagenes/${props.imagen}.jpg`)}
         alt='Foto de Messi' />
         <div className='contenedor-texto-web'>
          <p className='nombre-web'><strong>{props.nombre}</strong></p>
          <p className='posicion-web'>{props.posicion} de la <strong>{props.pais}</strong></p>
          <p className='texto-web'>{props.texto}</p>

         </div>
    </div>
  );
}

export default Web;