import React, { useState } from 'react';
import '../styles/Inventario.css';

const Inventario = () => {
  const [plu, setPlu] = useState('');
  const [nombreProducto, setNombreProducto] = useState('');
  const [existencia, setExistencia] = useState('');

  // Simulación de una base de datos con productos
  const productos = [
    { plu: '1001', nombre: 'Bicicleta Montaña', existencia: 15 },
    { plu: '1002', nombre: 'Bicicleta Ruta', existencia: 8 },
    { plu: '1003', nombre: 'Casco Deportivo', existencia: 20 },
    { plu: '1004', nombre: 'Guantes Ciclismo', existencia: 30 },
  ];

  // Función para buscar producto por PLU
  const buscarProducto = () => {
    const producto = productos.find((p) => p.plu === plu);
    if (producto) {
      setNombreProducto(producto.nombre);
      setExistencia(producto.existencia);
    } else {
      setNombreProducto('No encontrado');
      setExistencia('N/A');
    }
  };

  return (
    <div className="inventario">
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

      <main className="centro">
        {/* Ingreso del PLU */}
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
            readOnly
          />

          <label htmlFor="existencia">Existencia:</label>
          <input
            className="centro__informacion__entrada"
            id="existencia"
            type="text"
            name="existencia"
            value={existencia}
            readOnly
          />
        </section>

        {/* Botón para buscar el producto */}
        <section className="centro__boton">
          <button className="centro__boton__link" onClick={buscarProducto}>
            Verificar Producto
          </button>
        </section>
      </main>

      <footer className="footer">
        <p>Desarrollado por Alex Tulio Ruiz Camilo</p>
      </footer>
    </div>
  );
};

export default Inventario;