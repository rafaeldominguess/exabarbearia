import Image from "next/image";
import Container from "../Container/Container";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen text-[#FFFFFF] py-10">
      <Image
        src="/hero.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover opacity-50 -z-10"
      />
      <Container>
        <div className="flex flex-col items-start  justify-center w-full max-w-lg h-screen mb-20">
          <div>
            <span className="text-[#FFFFFF]/70 text-sm font-semibold tracking-widest">
              Bem-vindo à nossa barbearia
            </span>
            <h1 className="text-4xl md:text-6xl uppercase font-extrabold mt-4 mb-8 md:mt-6 md:mb-8 tracking-tighter">
              Muito mais que <br />
              um Corte
            </h1>
            <p className="text-[#FFFFFF]/90 text-sm md:text-base font-semibold mb-14 leading-relaxed md:leading-loose tracking-wider">
              Descubra a diferença que um excelente corte pode fazer na sua
              aparência, confiança e estilo. Agende seu horário agora e
              experimente a excelência do nosso serviço de barbearia.
            </p>
          </div>
          <div className="flex gap-4 font-semibold flex-col md:flex-row w-full">
            <button className="bg-white px-8 py-4 md:py-3 rounded-md cursor-pointer hover:bg-[#FFFFFF]/70 hover:text-[#000000] text-[#000000] text-sm  font-bold uppercase tracking-widest transition-all duration-400">
              Agendar horário
            </button>
            <button className="px-8 py-4 md:py-3 rounded-md border border-white/20 hover:border-white/50 cursor-pointer text-[#FFFFFF]/70 hover:text-[#FFFFFF] text-sm  font-medium uppercase tracking-widest transition-all duration-400">
              Nossos serviços
            </button>
          </div>
        </div>
      </Container>
      <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-b from-transparent to-[#FFFFFF] pointer-events-none"></div>
    </section>
  );
}
