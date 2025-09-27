import React from "react";
import "../../styles/cursoPage/investimento.css";

const Investimento = () => (
  <section className="investimento-section">
    <h2 className="investimento-title">Investimento</h2>
    <div className="investimento-card">
      <p className="investimento-lote">
        3º lote: Total de R$ 2.835,35
        <br />+ Matrícula de R$ 70
      </p>
      <div className="investimento-parcelado">Até 15X de R$ 189,02</div>
      <button className="investimento-btn">Faça sua matrícula</button>
    </div>
    <div className="investimento-beneficio">
      <img
        src="https://mais.opovo.com.br/includes/assets/opovomais/imgs/fase-2/opovo_mais.svg"
        alt="OPOVO+"
        className="beneficio-logo"
      />
      <div className="beneficio-text">
        <strong>Ganhe acesso grátis por 90 dias.</strong>
        <p>
          Reportagens & Colunistas; Filmes & Séries; Podcasts & Web Stories.
        </p>
        <a href="#" className="beneficio-link">
          Conheça o OPOVO+
        </a>
      </div>
    </div>
  </section>
);

export default Investimento;
