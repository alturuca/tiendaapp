import React, { useState } from 'react';
import '../styles/Transferencia.css';
import Header from './Header';
import Pie from './Pie';
import Botones from './Botones';

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

      <main className="Tcentro">
        {/* Barra de búsqueda */}
        <section className="Tcentro__busqueda">
          <p>Busca por código o nombre del producto:</p>
          <input
            className="Tcentro__busqueda__entrada"
            type="search"
            placeholder="Código o nombre del producto"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          
          <Botones texto="Buscar Producto" onClick={buscarProducto} />          

        </section> 
        {/* Información del producto siempre visible */}
        <section className="Tcentro__informacion">
          <label>Código:</label>
          <input
            className="Tcentro__informacion__etiqueta"
            id="Codigo"
            type="text"
            name="Codigo"
            value={productoEncontrado.codigo}
            readOnly
          />


          <label>Nombre Producto:</label>
          <input
            className="Tcentro__informacion__etiqueta"
            id="nombre_producto"
            type="text"
            name="nombre_producto"
            value={productoEncontrado.nombre}
            readOnly
          />

          <label>Cantidad:</label>
          <input
            className="Tcentro__informacion__etiqueta"
            id="cantidad"
            type="text"
            name="cantidad"
            value={productoEncontrado.cantidad}
            readOnly
          />
          

          <label>Área a Transferir:</label>
          <input
            className="Tcentro__informacion__etiqueta"
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