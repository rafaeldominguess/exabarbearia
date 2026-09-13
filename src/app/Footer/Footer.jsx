import Container from "../Container/Container";

const navigationLinks = [
  { name: "Sobre", href: "#sobre" },
  { name: "Profissionais", href: "#profissionais" },
  { name: "Serviços", href: "#servicos" },
  { name: "Galeria", href: "#galeria" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#000201] pt-20">
      <Container>
        <div className="grid gap-12 pb-16 lg:grid-cols-[1.05fr_0.65fr_1.3fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <span className="text-4xl font-extrabold uppercase tracking-wider">
              Exa
            </span>
            <p className="mt-5 max-w-sm text-sm font-medium leading-relaxed tracking-wide text-white/60">
              Cabelo, barba e presença. Um espaço pensado para você sair da
              rotina e voltar para o mundo na sua melhor versão.
            </p>
            <button className="w-full max-w-100 text-center cursor-pointer mt-8 rounded-md bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-white/80">
              Agendamento
            </button>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-white/50">
              Navegue
            </h2>
            <ul className="mt-5 space-y-4 text-sm font-semibold text-white/75">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    className="transition-colors hover:text-white"
                    href={link.href}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div id="contato">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-white/50">
                  Contato
                </h2>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-white/80 mb-4">
                  Atendimento em Santa Maria - RS
                </p>
                <h2 className="text-xs font-bold uppercase tracking-widest text-white/50">
                  Visite a EXA
                </h2>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-white/80">
                  Endereço e WhatsApp serão publicados em breve.
                </p>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-white/60 transition-colors hover:text-white">
                Localização em breve
              </span>
            </div>
            <div className="mt-6 h-56 overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <iframe
                title="Localização da EXA Barbearia"
                src="https://www.google.com/maps?q=Santa+Maria,+RS&output=embed"
                className="h-full w-full border-0 grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-4 text-xs font-medium tracking-wide text-white">
              Segunda a sábado, das 09h às 20h.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-7 text-xs font-medium tracking-wide text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 EXA Barbearia. Todos os direitos reservados.</p>
          <a className="transition-colors hover:text-white" href="#depoimentos">
            Feito para quem cuida da própria imagem.
          </a>
        </div>
      </Container>
    </footer>
  );
}
