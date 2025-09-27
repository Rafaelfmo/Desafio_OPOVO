import React from "react";
import { Link } from "react-router-dom";
import "../../styles/CursoCard.css";

const CursoCard = ({ curso }) => {
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
        <Link to={`/curso/${curso.id}`} className="curso-card-btn">
          Ver mais
        </Link>
      </div>
    </div>
  );
};

export default CursoCard;
