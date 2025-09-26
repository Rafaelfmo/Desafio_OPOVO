import React from "react";
import Slider from "react-slick";
import "../styles/Depoimentos.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <FaChevronRight className="depoimentos-nav right" />,
  prevArrow: <FaChevronLeft className="depoimentos-nav left" />,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Depoimentos = () => (
  <section className="depoimentos-container container">
    <h2 className="depoimentos-titulo">Depoimentos</h2>
    <Slider {...settings} className="depoimentos-list">
      {depoimentos.map((d, idx) => (
        <div className="depoimento-card" key={idx}>
          <div className="depoimento-foto">
            <img src={d.foto} alt={d.nome} />
          </div>
          <div className="depoimento-texto-wrapper">
            <div className="depoimento-texto">“{d.texto}”</div>
          </div>
          <div className="depoimento-footer">
            <hr />
            <div className="depoimento-nome">{d.nome}</div>
            <div className="depoimento-cargo">{d.cargo}</div>
          </div>
        </div>
      ))}
    </Slider>
  </section>
);

export default Depoimentos;
