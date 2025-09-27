import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/cursoPage/cursosCarrossel.css";

const CursosCarrossel = ({ cursoAtualId }) => {
  const [cursos, setCursos] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8000/cursos.php")
      .then((res) => res.json())
      .then((data) => {
        const outros = data.filter((c) => c.id !== cursoAtualId);
        setCursos(outros);
        setIndex(0);
      });
  }, [cursoAtualId]);

  const prev = () => setIndex((i) => (i === 0 ? cursos.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === cursos.length - 1 ? 0 : i + 1));

  const curso = cursos[index];

  return (
    <section className="carrossel-section">
      <h2 className="carrossel-title">Outros cursos interessantes</h2>
      <div className="carrossel-center-wrapper">
        <button
          className="carrossel-arrow left"
          onClick={prev}
          aria-label="Anterior"
        >
          &#8592;
        </button>
        {curso && (
          <div className="carrossel-card center" key={curso.id}>
            <img
              src={curso.imagem}
              alt={curso.nome}
              className="carrossel-img"
            />
            <div className="carrossel-tags">
              {curso.tags.map((tag, idx) => (
                <span className="carrossel-tag" key={idx}>
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="carrossel-nome">{curso.nome}</h3>
            <Link to={`/curso/${curso.id}`} className="carrossel-btn">
              Ver mais
            </Link>
          </div>
        )}
        <button
          className="carrossel-arrow right"
          onClick={next}
          aria-label="Próximo"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default CursosCarrossel;
