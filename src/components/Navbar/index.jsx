import React from 'react';
import "./style.css";
import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="src/assets/icons/pngegg.png" alt="Logo" className="logo" />
        <h1 className="title">Rein Informatica</h1>
      </div>
      <div className="navbar-buttons">
        <button>Inicio</button>
        <button>Productos</button>
        <button>Nosotros</button>
      </div>
      <div className="cart-widget">
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;
