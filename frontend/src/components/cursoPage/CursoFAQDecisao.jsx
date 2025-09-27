import React, { useState } from "react";
import "../../styles/cursoPage/faqDecisao.css";

const perguntas = [
  {
    titulo: "Competências que você vai desenvolver",
    conteudo:
      "Aqui você pode descrever as principais competências e habilidades que o aluno irá adquirir ao longo do curso.",
  },
  {
    titulo: "Para quem se destina",
    conteudo:
      "Esse curso é para você, que já concluiu ou está concluindo o ensino médio e quer se capacitar para entrar no mercado de trabalho. É gestor escolar e quer ampliar os seus conhecimentos a respeito dos processos realizados na secretaria escolar. Que deseja ter uma formação técnica para estar preparado(a) para realizar concurso público e atuar em escolas públicas ou privadas.",
  },
  {
    titulo:
      "Quando será o pagamento da primeira mensalidade e a data de início do curso?",
    conteudo:
      "Informações sobre datas de pagamento, início das aulas e cronograma do curso.",
  },
  {
    titulo:
      "Quais são as condições de pagamento e quais os descontos oferecidos?",
    conteudo:
      "Detalhes sobre formas de pagamento, descontos, bolsas e promoções disponíveis para o curso.",
  },
];

const CursoFAQDecisao = () => {
  const [aberto, setAberto] = useState(1); // abre o segundo por padrão

  const toggle = (idx) => {
    setAberto(aberto === idx ? null : idx);
  };

  return (
    <section className="faq-dec-section">
      <h2 className="faq-dec-title">Informações importantes</h2>
      <div className="faq-dec-accordion">
        {perguntas.map((item, idx) => (
          <div
            className={`faq-dec-item${aberto === idx ? " aberto" : ""}`}
            key={idx}
          >
            <button className="faq-dec-question" onClick={() => toggle(idx)}>
              {item.titulo}
              <span
                className={`faq-dec-icon${aberto === idx ? " aberto" : ""}`}
              >
                {aberto === idx ? "▲" : "▼"}
              </span>
            </button>
            {aberto === idx && (
              <div className="faq-dec-answer">{item.conteudo}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CursoFAQDecisao;
