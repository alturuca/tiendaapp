import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/InicioSesion.css';

const InicioSesion = () => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Inicializa useNavigate para la redirección

  const handleLogin = () => {
    if (!usuario || !contraseña) {
      setMessage('Por favor, completa todos los campos.');
      return;
    }

    // Validación básica de usuario/contraseña
    const usuarioValido = 'admin';
    const contraseñaValida = '1234';

    if (usuario === usuarioValido && contraseña === contraseñaValida) {
      setMessage('Inicio de sesión exitoso. ¡Bienvenido!');
      navigate('/menu'); // Redirige al menú principal
    } else {
      setMessage('Credenciales incorrectas. Intenta nuevamente.');
    }
  };

  return (
    <div style={{
      backgroundImage: "url('/assets/pexels-fmaderebner-623919.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100vw',
      height: '100vh'
    }}>
      
    
 
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
                  <input
                    id="usuario"
                    type="text"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                  />
                  <label htmlFor="usuario">
                    <samp className="indigo-text text-lighten-4">USUARIO</samp>
                  </label>
                </div>
                <div className="input-field col s12">
                  <input
                    id="contraseña"
                    type="password"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                  />
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
    </div>
  );
};

export default InicioSesion;