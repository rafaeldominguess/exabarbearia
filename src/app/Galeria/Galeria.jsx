import SocialCards from "../Components/SocialCards";
import Container from "../Container/Container";

// Exemplo com as imagens que estão na sua pasta public:
const barbershopCards = [
  { imgUrl: "/galeria_1.png", alt: "Galeria 1" },
  { imgUrl: "/galeria_2.png", alt: "Galeria 2" },
  { imgUrl: "/galeria_3.png", alt: "Galeria 3" },
  { imgUrl: "/galeria_4.png", alt: "Galeria 4" },
  { imgUrl: "/galeria_5.png", alt: "Galeria 5" },
  { imgUrl: "/galeria_6.png", alt: "Galeria 6" },
  { imgUrl: "/galeria_7.png", alt: "Galeria 7" },
];

export default function Galeria() {
  return (
    <section className="w-full min-h-screen py-24">
      <Container>
        <div className="flex max-w-170 flex-col">
          <span className="text-[#FFFFFF]/70 text-sm font-bold uppercase tracking-widest">
            NOSSO ESPAÇO & RESULTADOS
          </span>
          <h2 className="text-4xl md:text-6xl uppercase font-extrabold mt-4 mb-8 md:mt-10 md:mb-8 tracking-tighter">
            A EXPERIÊNCIA VISTA DE PERTO
          </h2>
          <p className="text-[#FFFFFF]/90 text-sm font-medium tracking-wider w-full">
            Cada detalhe da nossa estrutura foi pensado para oferecer conforto
            absoluto enquanto nossos profissionais executam o seu visual.
            Explore o espaço onde a técnica encontra o estilo e veja a precisão
            dos nossos cortes na prática.
          </p>
        </div>
      </Container>
      <SocialCards cards={barbershopCards} />
    </section>
  );
}
