import Container from "../Container/Container";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-heading"
      className="py-24 relative w-full min-h-screen bg-[#FFFFFF]"
    >
      <div className="absolute inset-x-0 -top-24 h-24 bg-linear-to-t from-[#FFFFFF] to-transparent pointer-events-none" />
      <Container>
        <div className="flex flex-col md:flex-row justify-center md:justify-between md:gap-15 items-center text-[#000000]">
          <div className="flex flex-col gap-4 w-full  md:max-w-250">
            <span className="text-[#000000] text-sm font-bold uppercase tracking-widest">
              Quem somos?
            </span>
            <h2
              id="sobre-heading"
              className="text-4xl md:text-6xl uppercase font-extrabold mb-8 md:mt-2 md:mb-8 tracking-tighter"
            >
              A sua melhor versão começa aqui
            </h2>
            <p className="text-black/80 text-sm md:text-base font-semibold leading-relaxed md:leading-relaxed tracking-wider w-full max-w-200">
              Na EXA, cabelo e barba são tratados com precisão cirúrgica e
              respeito à sua identidade. Combinamos o cuidado clássico da
              barbearia tradicional com a estética moderna e técnicas de alta
              performance. Criamos um ambiente pensado para você desacelerar da
              rotina, tomar um café (ou uma cerveja gelada) e sair pronto para
              encarar qualquer desafio com a confiança no topo.
            </p>
            <a
              href="#contato"
              className="bg-[#000000] hidden md:block md:w-fit w-full mt-4 mb-8 md:mt-8 px-8 py-3 rounded-md border hover:border-[#000000] cursor-pointer hover:bg-[#FFFFFF] hover:text-[#000000] text-[#FFFFFF] text-sm font-semibold uppercase tracking-widest transition-all duration-400"
            >
              Marcar horário
            </a>
          </div>
          <div className="max-w-130 w-full min-h-80 max-h-auto md:min-h-150 relative mb-15 mt-6">
            <Image
              src="/photoabout.png"
              alt="Interior da EXA Barbearia em Santa Maria"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 520px"
              className="object-cover rounded-2xl shadow-[0_4px_8px_rgba(0,0,0,0.1)] border-3 border-[#FFFFFF]"
            />
            <div className="w-30 h-auto md:-bottom-20 -bottom-10 right-0 absolute md:w-60 md:h-auto">
              <img
                src="/profissionaisherosection.png"
                alt="Foto dos profissionais da EXA"
                className="rounded-4xl object-cover border-6 border-[#FFFFFF] shadow-[0_4px_8px_rgba(0,0,0,0.1)]"
              />
            </div>
          </div>
          <a
            href="#contato"
            className="bg-[#000000] md:hidden w-full py-4 rounded-md text-center text-[#FFFFFF] text-sm font-medium uppercase tracking-widest"
          >
            Marcar horário
          </a>
        </div>
      </Container>
    </section>
  );
}
