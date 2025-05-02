import React, { useState } from 'react';
import '../styles/Inventario.css';
import Header from './Header';
import Pie from './Pie';

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
      {/* Header */}
      <Header />

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

      <Pie />
    </div>
  );
};

export default Inventario;