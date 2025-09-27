import "../App.css";
import Navbar from "../components/home/Navbar";
import Banner from "../components/home/Banner";
import CursosList from "../components/home/CursosList";
import SobreUANE from "../components/home/SobreUANE";
import Parcerias from "../components/home/Parcerias";
import Depoimentos from "../components/home/Depoimentos";
import Footer from "../components/home/Footer";

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
