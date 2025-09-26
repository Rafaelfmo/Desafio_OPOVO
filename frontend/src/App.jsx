import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import CursosList from "./components/CursosList";
import SobreUANE from "./components/SobreUANE";
import Parcerias from "./components/Parcerias";
import Depoimentos from "./components/Depoimentos";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <CursosList />
      <SobreUANE />
      <Parcerias />
      <Depoimentos />
      <Footer />
    </div>
  );
}

export default App;
