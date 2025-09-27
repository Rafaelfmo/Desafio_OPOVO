import React from "react";
import "../../styles/Banner.css";

const Banner = () => (
  <section className="banner" id="banner">
    <div className="container">
      <div className="banner-content">
        <h1>Educação para o Futuro!</h1>
        <h3>
          Transformando vidas através do conhecimento. Venha fazer parte dessa
          incrível jornada! Acompanhado por educadores dedicados e apaixonados.
        </h3>
        <a href="#cursos" className="banner-cta-btn">
          Venha conhecer nossos cursos!
        </a>
      </div>
    </div>
  </section>
);

export default Banner;
