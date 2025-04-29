import React, { useState } from 'react';
import '../styles/Ventas.css';

function Venta() {
  const [productos, setProductos] = useState([]);
  const [totalVenta, setTotalVenta] = useState(0);
  const [nuevoProducto, setNuevoProducto] = useState({
    codigo: '',
    cantidad: 0,
    valorUnitario: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoProducto({ ...nuevoProducto, [name]: value });
  };

  const agregarProducto = () => {
    const ventaParcial =
      parseInt(nuevoProducto.cantidad) * parseInt(nuevoProducto.valorUnitario);

    const producto = {
      codigo: nuevoProducto.codigo,
      cantidad: parseInt(nuevoProducto.cantidad),
      valorUnitario: parseInt(nuevoProducto.valorUnitario),
      ventaParcial,
    };

    setProductos([...productos, producto]);
    setTotalVenta(totalVenta + ventaParcial);

    setNuevoProducto({ codigo: '', cantidad: 0, valorUnitario: 0 });
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

      {/* Main content */}
      <main>
        {/* Muestra del total de ventas */}
        <section className="venta__mostrar">
          <label htmlFor="ventaTotal">Venta Total:</label>
          <label className="venta__mostrar__etiqueta" htmlFor="resultado">
            {totalVenta}
          </label>
        </section>

          <button onClick={agregarProducto} className="venta__boton">
              Agregar Producto
          </button>
        

        <section className="lista_label">
        <label htmlFor="codigo">Código Producto</label>
        <label htmlFor="cantidad">Cantidad</label>
        <label htmlFor="valorUnitario">Valor Unitario</label>
        </section>

        {/* Inputs para ingresar productos */}
        <section className="venta__form">
          <div className="venta__form__fila">
            
            <input
              type="text"
              id="codigo"
              name="codigo"
              value={nuevoProducto.codigo}
              onChange={handleInputChange}
              placeholder="Ej: 001"
              className="venta__input"
            />

            
            <input
              type="number"
              id="cantidad"
              name="cantidad"
              value={nuevoProducto.cantidad}
              onChange={handleInputChange}
              placeholder="Ej: 5"
              className="venta__input"
            />

            
            <input
              type="number"
              id="valorUnitario"
              name="valorUnitario"
              value={nuevoProducto.valorUnitario}
              onChange={handleInputChange}
              placeholder="Ej: 2000"
              className="venta__input"
            />

            
          </div>
        </section>

        {/* Lista dinámica de productos ingresados */}
        <section className="venta__datos">
          <div className="venta__datos__fila">
            <div className="venta__datos__header">Código Producto</div>
            <div className="venta__datos__header">Cantidad</div>
            <div className="venta__datos__header">Valor Unitario</div>
            <div className="venta__datos__header">Venta Parcial</div>
          </div>
          {productos.map((producto, index) => (
            <div key={index} className="venta__datos__fila">
              <div className="venta__datos__caja">{producto.codigo}</div>
              <div className="venta__datos__caja">{producto.cantidad}</div>
              <div className="venta__datos__caja">{producto.valorUnitario}</div>
              <div className="venta__datos__caja">{producto.ventaParcial}</div>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Desarrollado por Alex Tulio Ruiz Camilo</p>
      </footer>
    </div>
  );
}

export default Venta;