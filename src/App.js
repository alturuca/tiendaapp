import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/menu';
import Ventas from './components/Ventas';
import Inventario from './components/Inventario';
import IngresoMercancia from './components/IngresoMercancia';
import Transferencia from './components/Transferencia';
import InicioSesion from './components/InicioSesion';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/header" element={<Header />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/venta" element={<Ventas />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/ingreso_mercancia" element={<IngresoMercancia />} />
        <Route path="/transferencia" element={<Transferencia />} />
        
      </Routes>
    </Router>
  );
}

export default App;