import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  const { id } = useParams();
  const [curso, setCurso] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:8000/cursos.php?id=${id}`)
      .then((res) => res.json())
      .then((data) => setCurso(data));
  }, [id]);

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
