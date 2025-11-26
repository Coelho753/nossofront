import React from 'react';

export default function Navbar(){
  return (
    <nav className="nav">
      <div className="brand">G + A</div>
      <div className="menu">
        <a href="#timer" className="navlink">Início</a>
        <a href="#historia" className="navlink">História</a>
        <a href="#amo" className="navlink">Coisas que Odeio em você</a>
        <a href="#galeria" className="navlink">Galeria</a>
      </div>
    </nav>
  );
}
