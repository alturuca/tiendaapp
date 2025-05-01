import React, { useState } from 'react';
import '../styles/IngresoMercancia.css';
import Header from './Header';

const IngresoMercancia = () => {
  const [plu, setPlu] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [costo, setCosto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [productos, setProductos] = useState([
    { plu: '1001', cantidad: 15, costo: 5000 },
    { plu: '1002', cantidad: 8, costo: 6000 },
  ]);

  // Función para verificar si el producto ya está registrado
  const verificarProducto = () => {
    const existe = productos.find((producto) => producto.plu === plu);
    if (existe) {
      setMensaje(`El producto con PLU ${plu} ya está registrado.`);
    } else {
      setMensaje(`El producto con PLU ${plu} no existe. Puedes registrarlo.`);
    }
  };

  // Función para registrar mercancía nueva
  const guardarProducto = () => {
    if (plu && cantidad && costo) {
      const existe = productos.find((producto) => producto.plu === plu);
      if (!existe) {
        const nuevoProducto = { plu, cantidad: parseInt(cantidad), costo: parseInt(costo) };
        setProductos([...productos, nuevoProducto]);
        setMensaje(`Producto con PLU ${plu} registrado correctamente.`);
        setPlu('');
        setCantidad('');
        setCosto('');
      } else {
        setMensaje(`El producto con PLU ${plu} ya está registrado.`);
      }
    } else {
      setMensaje('Por favor, llena todos los campos.');
    }
  };

  return (
    <div className="venta">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="centro">
        <section className="centro__informacion">
          <label htmlFor="plu">PLU:</label>
          <input
            id="plu"
            type="number"
            name="plu"
            value={plu}
            onChange={(e) => setPlu(e.target.value)}
          />

          <label htmlFor="cantidad">Cantidad:</label>
          <input
            id="cantidad"
            type="number"
            name="cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />

          <label htmlFor="costo">Costo:</label>
          <input
            id="costo"
            type="number"
            name="costo"
            value={costo}
            onChange={(e) => setCosto(e.target.value)}
          />
        </section>

        {/* Botón para verificar si el producto ya existe */}
        <section className="centro__boton">
          <button className="centro__boton__link" onClick={verificarProducto}>
            Verificar Producto
          </button>
        </section>

        {/* Botón para registrar el producto */}
        <section className="centro__boton">
          <button className="centro__boton__link" onClick={guardarProducto}>
            Guardar
          </button>
        </section>

        {/* Mensaje de estado */}
        {mensaje && <p className="mensaje">{mensaje}</p>}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Desarrollado por Alex Tulio Ruiz Camilo</p>
      </footer>
    </div>
  );
};

export default IngresoMercancia;