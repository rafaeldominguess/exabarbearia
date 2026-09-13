import Container from "../Container/Container";

export default function Profissionais() {
  const profissional = [
    {
      id: 1,
      label: "01",
      nome: "João",
      experiencia: "10 anos de experiência",
      imagem: "/profissional1.png",
    },
    {
      id: 2,
      label: "02",
      nome: "Rafael",
      experiencia: "8 anos de experiência",
      imagem: "/profissional2.png",
    },
    {
      id: 3,
      label: "03",
      nome: "Carlos",
      experiencia: "5 anos de experiência",
      imagem: "/profissional3.png",
    },
  ];

  return (
    <section
      id="profissionais"
      aria-labelledby="profissionais-heading"
      className="w-full min-h-screen py-24"
    >
      <Container>
        <div>
          <span className="text-[#FFFFFF]/70 text-sm font-bold uppercase tracking-widest">
            Nossos Profissionais
          </span>
          <h2
            id="profissionais-heading"
            className="text-4xl md:text-6xl uppercase font-extrabold mt-4 mb-8 md:mt-10 md:mb-8 tracking-tighter max-w-170"
          >
            Com quem você quer cortar ?
          </h2>
        </div>
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="w-full max-w-150 relative">
              <p className="md:sticky top-30 text-[#FFFFFF]/90 text-sm  font-medium tracking-wider">
                Experiência, técnica e atenção aos mínimos detalhes. <br />
                Conheça nossos barbeiros e selecione quem vai cuidar da sua
                imagem.
              </p>
            </div>
            <div className="w-full md:max-w-100 flex flex-col md:gap-12 gap-6">
              {profissional.map((profissional) => (
                <div
                  className="w-full min-h-100 border border-[#FFFFFF]/20 rounded-lg p-4 gap-4"
                  key={profissional.id}
                >
                  <span className="font-bold text-2xl md:text-3xl">
                    {profissional.label}
                  </span>
                  <h3 className="text-4xl md:text-4xl tracking-tighter uppercase font-extrabold mt-3 md:mt-6">
                    {profissional.nome}
                  </h3>
                  <p className="font-semibold text-[#FFFFFF]/50 mb-4 md:mb-6">
                    {profissional.experiencia}
                  </p>
                  <div className="max-w-150 w-full  rounded-lg overflow-hidden">
                    <img
                      src={`/profissional${profissional.id}.png`}
                      alt={`Barbeiro ${profissional.nome} da EXA Barbearia`}
                      className="w-full h-60 object-top object-cover hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className="w-full flex justify-end items-center">
                    <button className="cursor-pointer bg-[#FFFFFF] text-[#000000] py-2 px-4 rounded-lg hover:border-[#FFFFFF]/20 border hover:bg-transparent hover:text-[#FFFFFF] text-sm font-semibold mt-6 mb-2 transition-all duration-400">
                      Agendar horário
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
