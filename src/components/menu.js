import React from 'react';
import '../styles/menu.css';


const Menu = () => {
  const modules = [
    {
      title: "Ventas",
      description: "Este modulo puede registar todo lo relacionado con las ventas",
      link: "/venta",
    },
    {
      title: "Inventario",
      description: "Este modulo puede consultar todo lo relacionado con el inventario",
      link: "/inventario",
    },
    
    {
      title: "Ingreso Mercancía",
      description: "Este modulo puede registrar todo lo relacionado con los productos",
      link: "/ingreso_mercancia",
    },
    {
      title: "Transferencia",
      description: "Este modulo puede registrar y consultar todo lo relacionado con las transferencias",
      link: "/transferencia",
    },
    
  ];

  return (
    <div className="menu">
      <section className="menu__encabezado">
        <img
          src="/assets/bike.jpg"
          alt="Logo de la Tienda de Bicicletas Bikekeobs"
          height="90"
          width="90"
        />
        <h1 className="header__encabezado__texto">Tienda de Bicicletas Bikekeobs</h1>
        <a
          className="waves-effect waves-light btn-large blue darken-3"
          href="/"
        >
          <i className="material-icons left">exit_to_app</i>Cerrar Sesión
        </a>
      </section>
      <main className="home">
        <div className="container">
          <div className="row">
            {modules.map((module, index) => (
              <div key={index} className="zoom">
                <a href={module.link}>
                  <div className="col m5">
                    <div className="row">
                      <div className="col s12 m12">
                        <div className="card-panel hoverable card blue darken-3 card-content white-text">
                          <span className="card-title">
                            <h4>{module.title}</h4>
                          </span>
                          <br />
                          <p>{module.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu;