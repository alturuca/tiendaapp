import React, { useState } from 'react';
import '../styles/Transferencia.css';
import Header from './Header';
import Pie from './Pie';

const Transferencia = () => {
  const [busqueda, setBusqueda] = useState('');
  const [productoEncontrado, setProductoEncontrado] = useState({
    codigo: '',
    nombre: '',
    cantidad: '',
  });
  const [areaTransferencia, setAreaTransferencia] = useState('');

  // Simulación de productos en inventario
  const productos = [
    { codigo: '1001', nombre: 'Bicicleta Montaña', cantidad: 15 },
    { codigo: '1002', nombre: 'Bicicleta Ruta', cantidad: 8 },
    { codigo: '1003', nombre: 'Casco Deportivo', cantidad: 20 },
    { codigo: '1004', nombre: 'Guantes Ciclismo', cantidad: 30 },
  ];

  const buscarProducto = () => {
    const producto = productos.find((p) => p.codigo === busqueda || p.nombre.toLowerCase() === busqueda.toLowerCase());
    if (producto) {
      setProductoEncontrado(producto);
    } else {
      setProductoEncontrado({ codigo: 'No encontrado', nombre: 'No encontrado', cantidad: 'N/A' });
        
    }
  };

  return (
    <div className="venta">
    {/* Header */}
    <Header />

      <main className="centro">
        {/* Barra de búsqueda */}
        <section className="centro__busqueda">
          <p>Busca por código o nombre del producto:</p>
          <input
            className="centro__busqueda__entrada"
            type="search"
            placeholder="Código o nombre del producto"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <button className="centro__boton__link" onClick={buscarProducto}>
            Buscar
          </button>
        </section>

        {/* Información del producto siempre visible */}
        <section className="centro__informacion">
          <label>Código:</label>
          <label className="centro__informacion__etiqueta">{productoEncontrado.codigo}</label>

          <label>Nombre Producto:</label>
          <label className="centro__informacion__etiqueta">{productoEncontrado.nombre}</label>

          <label>Cantidad:</label>
          <label className="centro__informacion__etiqueta">{productoEncontrado.cantidad}</label>

          <label>Área a Transferir:</label>
          <input
            className="centro__informacion__entrada"
            type="text"
            placeholder="Ej: Bodega 3"
            value={areaTransferencia}
            onChange={(e) => setAreaTransferencia(e.target.value)}
          />
        </section>
      </main>

      <Pie />
    </div>
  );
};

export default Transferencia;