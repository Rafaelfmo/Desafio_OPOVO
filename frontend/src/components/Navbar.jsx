import React, { useState } from "react";
import "../styles/Navbar.css";

const scrollToSection = (id) => {
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen((open) => !open);
  };

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar-container">
      <div className="container">
        <div className="navbar-logo">
          <a href="#" onClick={(e) => handleLinkClick(e, "body")}>
            <img
              src="https://fdr.org.br/uane/wp-content/themes/theme/assets/imgs/logos/logo-uane-white.svg"
              alt="UANE Logo"
            />
          </a>
        </div>
        <button
          className="navbar-hamburger"
          onClick={handleHamburgerClick}
          aria-label="Abrir menu"
          type="button"
        >
          &#9776;
        </button>
        <div className={`navbar-links${menuOpen ? " active" : ""}`}>
          <a
            className="navbar-link"
            href="#cursos"
            onClick={(e) => handleLinkClick(e, "#cursos")}
          >
            Cursos
          </a>
          <a
            className="navbar-link"
            href="#sobre"
            onClick={(e) => handleLinkClick(e, "#sobre")}
          >
            Sobre
          </a>
          <a
            className="navbar-link"
            href="#parcerias"
            onClick={(e) => handleLinkClick(e, "#parcerias")}
          >
            Parcerias
          </a>
          <a
            className="navbar-link"
            href="#depoimentos"
            onClick={(e) => handleLinkClick(e, "#depoimentos")}
          >
            Depoimentos
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
