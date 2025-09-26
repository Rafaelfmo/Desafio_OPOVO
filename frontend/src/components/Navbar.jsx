import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen((open) => !open);
  };

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">
          <img
            src="https://fdr.org.br/uane/wp-content/themes/theme/assets/imgs/logos/logo-uane-white.svg"
            alt="UANE Logo"
            style={{ height: "40px" }}
          />
        </a>
      </div>
      <button
        className="navbar-hamburger"
        onClick={handleHamburgerClick}
        aria-label="Abrir menu"
      >
        &#9776;
      </button>
      <ul
        className={`navbar-menu${menuOpen ? " active" : ""}`}
        onClick={handleMenuClick}
      >
        <li>
          <a href="#cursos">Cursos</a>
        </li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#parcerias">Parcerias</a>
        </li>
        <li>
          <a href="#depoimentos">Depoimentos</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
