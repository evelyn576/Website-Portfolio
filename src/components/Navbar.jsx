import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Evelyn Christine</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">CV</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;