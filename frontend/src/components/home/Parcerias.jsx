import React from "react";
import "../../styles/home/Parcerias.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const parcerias = [
  {
    nome: "Universidade Federal do Ceará",
    descricao:
      "A UFC é uma universidade pública federal fundada em 1954, com sede em Fortaleza (CE). É referência em ensino, pesquisa e extensão no Nordeste e no Brasil.",
    logo: "https://fdr.org.br/uane/wp-content/uploads/sites/13/2025/06/LOGOS-SITE-416x2003-1-1.png",
    redes: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
    },
  },
  {
    nome: "Universidade Estadual do Ceará",
    descricao:
      "A Universidade Estadual do Ceará (UECE) é uma instituição pública de ensino superior que se destaca pela qualidade acadêmica e compromisso com o desenvolvimento do Ceará.",
    logo: "https://fdr.org.br/uane/wp-content/uploads/sites/13/2025/06/LOGOS-SITE-416x2002-1-1.png",
    redes: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
    },
  },
  {
    nome: "Universidade do Estado do Rio Grande do Norte",
    descricao:
      "A UERN é uma universidade pública estadual fundada em 1968, com sede em Mossoró (RN). É referência em ensino, pesquisa e extensão no Rio Grande do Norte e desempenha um papel fundamental no desenvolvimento regional.",
    logo: "https://fdr.org.br/uane/wp-content/uploads/sites/13/2025/06/LOGOS-SITE-416x200-2.png",
    redes: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
    },
  },
];

const Parcerias = () => (
  <section className="parcerias-container container" id="parcerias">
    <h2 className="parcerias-titulo">Parcerias</h2>
    <div className="parcerias-list">
      {parcerias.map((p, idx) => (
        <div className="parceria-card" key={idx}>
          <div className="parceria-logo">
            <img src={p.logo} alt={p.nome} />
          </div>
          <div className="parceria-info">
            <h3>{p.nome}</h3>
            <p>{p.descricao}</p>
            <div className="parceria-redes">
              <a
                href={p.redes.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href={p.redes.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={p.redes.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Parcerias;
