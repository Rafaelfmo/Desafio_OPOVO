import React from "react";
import "../../styles/cursoPage/banner.css";

const BannerCurso = ({ curso }) => (
  <section className="banner-section">
    <div className="banner-container">
      <div className="banner-curso">
        <div className="banner-curso-img-wrapper">
          <img
            src={curso.imagem}
            alt={curso.nome}
            className="banner-curso-img"
          />
        </div>
        <div className="banner-curso-tags">
          {curso.tags.map((tag, idx) => (
            <span key={idx} className="banner-curso-tag">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="banner-curso-titulo">{curso.nome}</h1>
        <p className="banner-curso-descricao">{curso.descricao}</p>
        <div className="banner-curso-realizacao">
          <img
            src="https://fdr.org.br/uane/wp-content/uploads/sites/13/2025/06/logos-uane-fdr.png"
            alt="Logos UANE e FDR"
            className="banner-curso-logo"
            style={{ maxHeight: "40px", width: "auto" }}
          />
        </div>
        <button className="banner-curso-btn">Faça sua matrícula</button>
      </div>
    </div>
  </section>
);

export default BannerCurso;
