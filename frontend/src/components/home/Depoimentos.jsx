import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../styles/home/Depoimentos.css";

const depoimentos = [
  {
    nome: "Dayana Nascimento",
    cargo: "Aluna",
    texto:
      "Hoje fui ao polo de Baturité e recebi o meu diploma do curso técnico em secretaria escolar. Agradeço imensamente a toda equipe que faz parte da Fundação Demócrito Rocha por todo apoio dado ao longo da realização do curso.",
    foto: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    nome: "Katya Angella",
    cargo: "Aluna",
    texto:
      "Muito obrigada, foi um grande prazer fazer parte da Instituição Demócrito Rocha, vocês são muito atenciosos e rápidos no atendimento! Instituição nota 100000!",
    foto: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    nome: "Mariana Barros",
    cargo: "Aluna",
    texto:
      "Olá, me chamo Mariana e quero primeiramente parabenizar a FDR pela qualidade de conteúdo na plataforma e o próprio sistema tecnológico é completo! Muito bom. Acabei de concluir o curso e estou muito animada. Obrigada e que todos valorizem conteúdo excelente e gratuito sugerido pela Instituição.",
    foto: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    nome: "Lucas Almeida",
    cargo: "Aluno",
    texto:
      "O curso superou minhas expectativas! Material didático excelente e professores muito dedicados. Recomendo para todos que querem crescer profissionalmente.",
    foto: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    nome: "Fernanda Costa",
    cargo: "Aluna",
    texto:
      "A plataforma é intuitiva e os conteúdos são atualizados. Fiquei muito satisfeita com o suporte e a atenção da equipe.",
    foto: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    nome: "Rafael Souza",
    cargo: "Aluno",
    texto:
      "Aprendi muito durante o curso! Agradeço a todos os envolvidos pelo empenho e dedicação. Certamente farei outros cursos futuramente.",
    foto: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const getSlidesToShow = () => {
  if (window.innerWidth < 700) return 1;
  if (window.innerWidth < 1100) return 2;
  return 2;
};

const Depoimentos = () => {
  const [current, setCurrent] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  React.useEffect(() => {
    const handleResize = () => setSlidesToShow(getSlidesToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = depoimentos.length - slidesToShow;
  const goPrev = () => setCurrent((prev) => Math.max(prev - 1, 0));
  const goNext = () => setCurrent((prev) => Math.min(prev + 1, maxIndex));

  return (
    <section className="depoimentos-section" id="depoimentos">
      <div className="depoimentos-container">
        <h2 className="depoimentos-title">Depoimentos</h2>

        <div className="depoimentos-slider-custom">
          <button
            className="depoimentos-arrow left"
            onClick={goPrev}
            disabled={current === 0}
          >
            <FaChevronLeft />
          </button>
          <div className="depoimentos-cards-wrapper">
            {depoimentos
              .slice(current, current + slidesToShow)
              .map((d, idx) => (
                <div className="depoimento-card" key={current + idx}>
                  <div className="depoimento-foto-wrapper">
                    <img
                      className="depoimento-foto"
                      src={d.foto}
                      alt={d.nome}
                    />
                  </div>
                  <div className="depoimento-texto-wrapper">
                    <div className="depoimento-texto">“{d.texto}”</div>
                  </div>
                  <div className="depoimento-footer">
                    <hr className="depoimento-divider" />
                    <div className="depoimento-nome">{d.nome}</div>
                    <div className="depoimento-cargo">{d.cargo}</div>
                  </div>
                </div>
              ))}
          </div>
          <button
            className="depoimentos-arrow right"
            onClick={goNext}
            disabled={current === maxIndex}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
