import React from "react";
import Navbar from "../components/home/Navbar";
// import BannerCurso from "./BannerCurso"; // componente futuro
// import FAQ from "./FAQ"; // componente futuro
import "../styles/CursoPage.css";

const CursoPage = () => {
  return (
    <div className="curso-page">
      <Navbar />
      {/* Banner do curso */}
      <section className="curso-banner">
        {/* Tags, título, descrição, botão matrícula */}
        <div className="curso-banner-content">
          <div className="curso-tags">
            <span className="curso-tag">Técnico</span>
            <span className="curso-tag">EAD</span>
          </div>
          <h1 className="curso-titulo">Nome do Curso</h1>
          <p className="curso-descricao">
            Breve descrição do curso, destacando diferenciais e público-alvo.
          </p>
          <button className="curso-matricula-btn">Fazer matrícula</button>
        </div>
      </section>

      {/* Informações do curso */}
      <section className="curso-info">
        <h2 className="curso-info-titulo">Informações do Curso</h2>
        <ul className="curso-info-list">
          <li>
            <strong>Carga horária:</strong> 400h
          </li>
          <li>
            <strong>Modalidade:</strong> EAD
          </li>
          <li>
            <strong>Conteúdo:</strong> 10 módulos
          </li>
        </ul>
      </section>

      {/* FAQ para decisão */}
      <section className="curso-faq-decisao">
        <h2 className="curso-faq-titulo">Informações para decidir</h2>
        {/* FAQ tópicos expansíveis */}
        {/* Exemplo de tópico */}
        <div className="faq-item">
          <button className="faq-question">
            Para quem se destina esse curso?
          </button>
          <div className="faq-answer">Conteúdo da resposta...</div>
        </div>
        {/* ...outros tópicos */}
      </section>

      {/* FAQ dos módulos */}
      <section className="curso-faq-modulos">
        <h2 className="curso-faq-titulo">O que você vai aprender</h2>
        {/* FAQ módulos expansíveis */}
        {/* Exemplo de módulo */}
        <div className="faq-item">
          <button className="faq-question">Módulo 1: Introdução</button>
          <div className="faq-answer">Conteúdo do módulo...</div>
        </div>
        {/* ...outros módulos */}
      </section>
    </div>
  );
};

export default CursoPage;
