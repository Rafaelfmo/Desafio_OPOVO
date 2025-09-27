import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import CursoCard from "../home/CursoCard";
import "../../styles/CursosList.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CursosList = () => {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/cursos.php")
      .then((res) => res.json())
      .then((data) => {
        setCursos(Array.isArray(data) ? data : [data]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleVerMais = (id) => {
    // Futuro: navegação para página do curso
    alert(`Ver mais sobre o curso ${id}`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="cursos-list" id="cursos">
      <div className="container">
        <h2>Cursos</h2>
        <div className="cursos-grid">
          {loading ? (
            <p>Carregando cursos...</p>
          ) : (
            <Slider {...settings}>
              {cursos.map((curso) => (
                <div key={curso.id} style={{ padding: "0 16px" }}>
                  <CursoCard curso={curso} onVerMais={handleVerMais} />
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </section>
  );
};

export default CursosList;
