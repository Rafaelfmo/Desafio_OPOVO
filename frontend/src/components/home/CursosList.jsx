import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../styles/home/CursoList.css";

const CursosList = () => {
  const [cursos, setCursos] = useState([]);
  const [index, setIndex] = useState(0);
  const [cardsPorVez, setCardsPorVez] = useState(1);

  useEffect(() => {
    fetch("http://localhost:8000/cursos.php")
      .then((res) => res.json())
      .then((data) => setCursos(data));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w <= 700) {
        setCardsPorVez(1);
      } else if (w > 700 && w <= 1024) {
        setCardsPorVez(2);
      } else {
        setCardsPorVez(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prev = () => setIndex((i) => (i === 0 ? cursos.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === cursos.length - 1 ? 0 : i + 1));

  // Seleciona os cursos para exibir
  const cursosVisiveis = cursos.slice(index, index + cardsPorVez);
  if (cursosVisiveis.length < cardsPorVez && cursos.length > 0) {
    cursosVisiveis.push(
      ...cursos.slice(0, cardsPorVez - cursosVisiveis.length)
    );
  }

  return (
    <section className="cursos-list-section" id="cursos">
      <h2 className="cursos-list-title">Nossos Cursos</h2>
      <div className="cursos-list-carrossel-wrapper">
        <button
          className="carrossel-arrow left"
          onClick={prev}
          aria-label="Anterior"
        >
          <FaChevronLeft />
        </button>
        {cursosVisiveis.map((curso) => (
          <div className="curso-card" key={curso.id}>
            <img
              src={curso.imagem}
              alt={curso.nome}
              className="curso-card-img"
            />
            <div className="curso-card-content">
              <div className="curso-card-tags">
                {curso.tags.map((tag, idx) => (
                  <span className="curso-card-tag" key={idx}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="curso-card-title">{curso.nome}</h3>
              <Link to={`/curso/${curso.id}`} className="curso-card-btn">
                Ver mais
              </Link>
            </div>
          </div>
        ))}
        <button
          className="carrossel-arrow right"
          onClick={next}
          aria-label="Próximo"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default CursosList;
