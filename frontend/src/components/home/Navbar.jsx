import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../styles/Navbar.css";

const scrollToSection = (id) => {
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleHamburgerClick = () => {
    setMenuOpen((open) => !open);
  };

  const handleSectionLink = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      // Se já está na Home, faz scroll suave
      scrollToSection(sectionId);
    } else {
      // Se está em outra página, navega para Home e salva id
      localStorage.setItem("scrollToSection", sectionId);
      navigate("/");
    }
  };

  return (
    <nav className="navbar-container">
      <div className="container">
        <div className="navbar-logo">
          <Link to="/">
            <img
              src="https://fdr.org.br/uane/wp-content/themes/theme/assets/imgs/logos/logo-uane-white.svg"
              alt="UANE Logo"
            />
          </Link>
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
          <button
            className="navbar-link"
            onClick={() => handleSectionLink("#cursos")}
          >
            Cursos
          </button>
          <button
            className="navbar-link"
            onClick={() => handleSectionLink("#sobre")}
          >
            Sobre
          </button>
          <button
            className="navbar-link"
            onClick={() => handleSectionLink("#parcerias")}
          >
            Parcerias
          </button>
          <button
            className="navbar-link"
            onClick={() => handleSectionLink("#depoimentos")}
          >
            Depoimentos
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
