import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/cursos.php")
      .then((res) => res.json())
      .then((data) => {
        setCursos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cursos UANE</h1>
        <p>Conheça nossos cursos:</p>
      </header>
      <main>
        {loading ? (
          <p>Carregando cursos...</p>
        ) : (
          <div className="cursos-list">
            {cursos.map((curso) => (
              <div key={curso.id} className="curso-card">
                <img
                  src={curso.imagem}
                  alt={curso.nome}
                  style={{ width: "100%", maxWidth: 300 }}
                />
                <h2>{curso.nome}</h2>
                <p>{curso.descricao}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
