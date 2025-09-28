import React from "react";
import "../../styles/cursoPage/cursoInfo.css";

const CursoInfo = ({ informacoes }) => {
  // informacoes: array de strings tipo "Carga Horária: 72 horas"
  // Separar chave e valor
  const infoList = informacoes.map((info, idx) => {
    const [key, value] = info.split(":");
    return { key: key?.trim(), value: value?.trim() };
  });

  return (
    <section className="curso-info-section">
      <h2 className="curso-info-section-title">Detalhes do Curso</h2>
      <div className="curso-info-grid">
        {infoList.map((item, idx) => (
          <div className="curso-info-item" key={idx}>
            <span className="curso-info-title">{item.key}</span>
            <span className="curso-info-value">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CursoInfo;
