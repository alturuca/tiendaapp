import React, { useState } from 'react';

import '../styles/InicioSesion.css';

const InicioSesion = () => {
  const [message, setMessage] = useState('');
  

  const handleLogin = () => {
    const usuario = document.getElementById('usuario').value.trim();
    const contraseña = document.getElementById('contraseña').value.trim();

    if (!usuario || !contraseña) {
      setMessage('Por favor, completa todos los campos.');
      return;
    }

    // Validación básica de usuario/contraseña
    const usuarioValido = 'admin';
    const contraseñaValida = '1234';

    if (usuario === usuarioValido && contraseña === contraseñaValida) {
      setMessage('Inicio de sesión exitoso. ¡Bienvenido!');
       // Redirigir al menú principal
    } else {
      setMessage('Credenciales incorrectas. Intenta nuevamente.');
    }
  };

  return (
    <div className="acceso">
      <div className="acceso__intro">
        <img
          src="/assets/bike.jpg"
          alt="Logo de la Tienda de Bicicletas Bikekeobs"
          height="170"
          width="170"
        />
        <div className="acceso__intro__datos">
          <div className="card-panel transparent no-padding no-margin">
            <form className="col s12">
              <div className="input-field col s12">
                <input id="usuario" type="text" />
                <label htmlFor="usuario">
                  <samp className="indigo-text text-lighten-4">USUARIO</samp>
                </label>
              </div>
              <div className="input-field col s12">
                <input id="contraseña" type="password" />
                <label htmlFor="contraseña">
                  <samp className="indigo-text text-lighten-4">CONTRASEÑA</samp>
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="acceso__boton">
          <button
            onClick={handleLogin}
            className="waves-effect waves-light btn-small indigo darken-4"
          >
            <samp className="indigo-text text-lighten-4">Iniciar Sesión</samp>
          </button>
        </div>
      </div>
      <div id="message" className="message">
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default InicioSesion;