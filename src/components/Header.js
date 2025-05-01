import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation(); // Detecta la ruta actual

  return (
    <header className="Encabezado">
      <div className="header__nav">
        <nav className="nav-extended transparent">
          <div className="nav-wrapper">
            <Link to="/menu" className="brand-logo left">
              <img className='image' src="/assets/bike.jpg" alt="Logo de la Tienda de Bicicletas Bikekeobs" height="65" width="60" />
            </Link>
            <h4 className="Encabezado__titulo">Tienda de Bicicletas Bikeobs</h4>
            <ul className="right hide-on-med-and-down">
              <li className={location.pathname === "/venta" ? "active" : ""}>
                <Link to="/venta">Ventas</Link>
              </li>
              <li className={location.pathname === "/inventario" ? "active" : ""}>
                <Link to="/inventario">Inventario</Link>
              </li>
              <li className={location.pathname === "/ingreso_mercancia" ? "active" : ""}>
                <Link to="/ingreso_mercancia">Ingreso Mercancía</Link>
              </li>
              <li className={location.pathname === "/transferencia" ? "active" : ""}>
                <Link to="/transferencia">Transferencia</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;