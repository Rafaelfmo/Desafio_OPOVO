import React from "react";
import "../../styles/home/SobreUANE.css";

const dadosUANE = [
  { numero: "+40", legenda: "ANOS DE MERCADO" },
  { numero: "+1,6M", legenda: "ALUNOS EM TODO O BRASIL" },
  { numero: "+90", legenda: "CURSOS DE EXTENSÃO" },
  { numero: "+60", legenda: "CURSOS GRATUITOS" },
  { numero: "31", legenda: "POLOS DE APOIO PRESENCIAL NOS MUNICÍPIOS" },
  { numero: "+30", legenda: "TURMAS DO CURSO NOVOS TALENTOS PARA JORNALISMO" },
  { numero: "+35", legenda: "TURMAS DE CURSOS TÉCNICOS SECRETARIA ESCOLAR" },
  {
    numero: "+150",
    legenda:
      "TUTORES ATUARAM EM ATENDIMENTO DE SUPORTE E ACOMPANHAMENTO PEDAGÓGICO DOS CURSOS",
  },
];

const SobreUANE = () => (
  <section className="sobre-uane-section" id="sobre">
    <div className="sobre-uane-container">
      <h2 className="sobre-uane-title">Sobre a UANE</h2>
      <div className="sobre-uane-grid">
        {dadosUANE.map((item, idx) => (
          <div className="sobre-uane-item" key={idx}>
            <span className="sobre-uane-numero">{item.numero}</span>
            <span className="sobre-uane-legenda">{item.legenda}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SobreUANE;
