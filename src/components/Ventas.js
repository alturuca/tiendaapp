import React, { useState } from 'react';
import '../styles/Ventas.css';
import Header from '../components/Header.js';

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
      <Header />

      {/* Main content */}
      <main>
        {/* Muestra del total de ventas */}
        <section className="venta__mostrar">
          <label htmlFor="ventaTotal">Venta Total:</label>
          <label className="venta__mostrar__etiqueta" htmlFor="resultado">
            {totalVenta}
          </label>
        </section>

        

        {/* Botón para buscar el producto */}
        <section className="centro__boton">
          <button className="centro__boton__link" onClick={agregarProducto}>
            Agregar Producto
          </button>
        </section>

          

        <section className="lista_label">
        <label className="lista__label__name" htmlFor="codigo">Código Producto</label>
        <label className="lista__label__name" htmlFor="cantidad">Cantidad</label>
        <label className="lista__label__name" htmlFor="valorUnitario">Valor Unitario</label>
        </section>

        {/* Inputs para ingresar productos */}
        <section className="venta__form">
          <div className="venta__form__fila">
            
            <input 
              className="venta__input__dato"
              type="text"
              id="codigo"
              name="codigo"
              value={nuevoProducto.codigo}
              onChange={handleInputChange}
              
              
            />

            
            <input
              className="venta__input__dato"
              
              type="number"
              id="cantidad"
              name="cantidad"
              value={nuevoProducto.cantidad}
              onChange={handleInputChange}
              
              
            />

            
            <input
              className="venta__input__dato"
              type="number"
              id="valorUnitario"
              name="valorUnitario"
              value={nuevoProducto.valorUnitario}
              onChange={handleInputChange}
              
              
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