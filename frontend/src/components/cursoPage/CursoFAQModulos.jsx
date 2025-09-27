import React, { useState } from "react";
import "../../styles/cursoPage/faqModulos.css";

const modulos = [
  {
    titulo: "Módulo 1 - Secretaria escolar",
    conteudo: "Conteúdo detalhado do módulo 1.",
  },
  {
    titulo: "Módulo 2 - Redação oficial e informática",
    conteudo: "Conteúdo detalhado do módulo 2.",
  },
  {
    titulo: "Módulo 3 - Estatística básica e indicadores educacionais",
    conteudo: "Conteúdo detalhado do módulo 3.",
  },
  {
    titulo: "Módulo 4 - Planejamento, gestão e legislação educacional",
    conteudo: "Conteúdo detalhado do módulo 4.",
  },
  {
    titulo: "Módulo 5 - Funcionamento e organização da secretaria escolar",
    conteudo: "Conteúdo detalhado do módulo 5.",
  },
  {
    titulo: "Módulo 6 - Legislação educacional",
    conteudo: "Conteúdo detalhado do módulo 6.",
  },
  {
    titulo: "Módulo 7 - Estágio supervisionado",
    conteudo: "Conteúdo detalhado do módulo 7.",
  },
];

const CursoFAQModulos = () => {
  const [aberto, setAberto] = useState(null);

  const toggle = (idx) => {
    setAberto(aberto === idx ? null : idx);
  };

  return (
    <section className="faq-mod-section">
      <h2 className="faq-mod-title">O que você vai aprender</h2>
      <div className="faq-mod-accordion">
        {modulos.map((item, idx) => (
          <div
            className={`faq-mod-item${aberto === idx ? " aberto" : ""}`}
            key={idx}
          >
            <button className="faq-mod-question" onClick={() => toggle(idx)}>
              {item.titulo}
              <span
                className={`faq-mod-icon${aberto === idx ? " aberto" : ""}`}
              >
                {aberto === idx ? "▲" : "▼"}
              </span>
            </button>
            {aberto === idx && (
              <div className="faq-mod-answer">{item.conteudo}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CursoFAQModulos;
