import React from "react";
import "../../styles/CursoCard.css";

const CursoCard = ({ curso, onVerMais }) => {
  // const descricaoReduzida =
  //   curso.descricao.length > 120
  //     ? curso.descricao.slice(0, 120) + "..."
  //     : curso.descricao;

  return (
    <div className="curso-card">
      <img src={curso.imagem} alt={curso.nome} className="curso-card-img" />
      <div className="curso-card-content">
        <h3 className="curso-card-title">{curso.nome}</h3>
        <div className="curso-card-tags">
          {curso.tags.map((tag, idx) => (
            <span key={idx} className="curso-card-tag">
              {tag}
            </span>
          ))}
        </div>
        <button className="curso-card-btn" onClick={() => onVerMais(curso.id)}>
          Ver mais
        </button>
      </div>
    </div>
  );
};

export default CursoCard;
