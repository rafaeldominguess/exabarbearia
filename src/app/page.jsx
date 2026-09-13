import MenuNav from "./Header/MenuNav";
import HeroSection from "./Hero/HeroSection";
import About from "./About/About";
import Profissionais from "./Profissionais/Profissionais";
import Servicos from "./Servicos/Servicos";
import Galeria from "./Galeria/Galeria";
import Depoimentos from "./Depoimentos/Depoimentos";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <main>
      <MenuNav />
      <HeroSection />
      <About />
      <Profissionais />
      <Servicos />
      <Galeria />
      <Depoimentos />
      <Footer />
    </main>
  );
}
