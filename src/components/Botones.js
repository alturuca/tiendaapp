import React from 'react';
import '../styles/Botones.css';

const Botones = ({ texto, onClick }) => {
  return (
    <button className="centro__boton__link" onClick={onClick}>
      {texto}
    </button>
  );
}

export default Botones;