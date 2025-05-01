import React, { useState } from 'react';
import '../styles/Transferencia.css';

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
    <header className="header">
      <section className="header__encabezado">
        <h4>Tienda de Bicicletas Bikeobs</h4>
      </section>
      <div className="header__nav">
        <nav className="nav-extended transparent">
          <div className="nav-wrapper">
            <a href="/menu" className="brand-logo left">
              <img
                src="/assets/bike.jpg"
                alt="Logo de la Tienda de Bicicletas Bikekeobs"
                height="65"
                width="60"
              />
            </a>
            <ul className="right hide-on-med-and-down">
              <li className="active"><a href="/ventas">Ventas</a></li>
              <li><a href="/inventario">Inventario</a></li>
              <li><a href="/ingreso_mercancia">Ingreso Mercancía</a></li>
              <li><a href="/transferencia">Transferencia</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

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

      <footer className="footer">
        <p>Desarrollado por Alex Tulio Ruiz Camilo</p>
      </footer>
    </div>
  );
};

export default Transferencia;