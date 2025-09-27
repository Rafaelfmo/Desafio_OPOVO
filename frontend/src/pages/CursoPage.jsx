import React, { useEffect, useState } from "react";
import Navbar from "../components/home/Navbar";
import BannerCurso from "../components/cursoPage/BannerCurso";
import CursoInfo from "../components/cursoPage/CursoInfo";
import CursoFAQDecisao from "../components/cursoPage/CursoFAQDecisao";
import CursoFAQModulos from "../components/cursoPage/CursoFAQModulos";
import Investimento from "../components/cursoPage/Investimento";
import CursosCarrossel from "../components/cursoPage/CursosCarrossel";
import Footer from "../components/home/Footer";
import "../CursoPage.css";

const CursoPage = () => {
  const [curso, setCurso] = useState(null);
  // Exemplo: buscar curso com id=1 (Meninas e Mulheres no Esporte)
  useEffect(() => {
    fetch("http://localhost:8000/cursos.php?id=1")
      .then((res) => res.json())
      .then((data) => setCurso(data));
  }, []);

  return (
    <div className="curso-page">
      <Navbar />
      <div className="curso-container">
        {curso && <BannerCurso curso={curso} />}
        {curso && <CursoInfo informacoes={curso.informacoes} />}
        <CursoFAQDecisao />
        <CursoFAQModulos />
        <Investimento />
        {curso && <CursosCarrossel cursoAtualId={curso.id} />}
      </div>
      <Footer />
    </div>
  );
};

export default CursoPage;
