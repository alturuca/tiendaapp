import React, { useState } from 'react';
import '../styles/Inventario.css';

const Inventario = () => {
  const [plu, setPlu] = useState('');
  const [nombreProducto, setNombreProducto] = useState('');
  const [existencia, setExistencia] = useState('');

  const checkProduct = () => {
    alert(`Verificando producto:\nPLU: ${plu}\nNombre: ${nombreProducto}\nExistencia: ${existencia}`);
  };

  return (
    <div className="inventario">
      {/* Header */}
      <header className="header">
        <section className="header__encabezado">
          <h4>Tienda de Bicicletas Bikeobs</h4>
        </section>
        <div className="header__nav">
          <nav className="nav-extended transparent">
            <div className="nav-wrapper">
              <a href="/menu" className="brand-logo left">
                <img src="/assets/bike.jpg" alt="Logo de la Tienda de Bicicletas Bikekeobs" height="65" width="60" />
              </a>
              <ul className="right hide-on-med-and-down">
                <li><a href="/venta">Ventas</a></li>
                <li className="active"><a href="/inventario">Inventario</a></li>
                <li><a href="/ingreso_mercancia">Ingreso Mercancía</a></li>
                <li><a href="/transferencia">Transferencia</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="centro">
        <section className="centro__informacion">
          <label htmlFor="plu">PLU:</label>
          <input
            className="centro__informacion__entrada"
            id="plu"
            type="number"
            name="plu"
            value={plu}
            onChange={(e) => setPlu(e.target.value)}
          />

          <label htmlFor="nombre_producto">Nombre Producto:</label>
          <input
            className="centro__informacion__entrada"
            id="nombre_producto"
            type="text"
            name="nombre_producto"
            value={nombreProducto}
            onChange={(e) => setNombreProducto(e.target.value)}
          />

          <label htmlFor="existencia">Existencia:</label>
          <input
            className="centro__informacion__entrada"
            id="existencia"
            type="text"
            name="existencia"
            value={existencia}
            onChange={(e) => setExistencia(e.target.value)}
          />
        </section>

        <section className="centro__boton">
          <button className="centro__boton__link" onClick={checkProduct}>
            Verificar Producto
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Desarrollado por Alex Tulio Ruiz Camilo</p>
      </footer>
    </div>
  );
};

export default Inventario;