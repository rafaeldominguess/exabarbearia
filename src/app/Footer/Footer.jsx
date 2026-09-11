import Container from "../Container/Container";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const navigationLinks = [
  { name: "Sobre", href: "#sobre" },
  { name: "Profissionais", href: "#profissionais" },
  { name: "Serviços", href: "#servicos" },
  { name: "Galeria", href: "#galeria" },
];

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { name: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { name: "WhatsApp", href: "https://wa.me/5511999999999", icon: FaWhatsapp },
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
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="mt-8 rounded-md bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-white/80"
            >
              Agendar horário
            </a>
            <div className="mt-8 flex items-center gap-5 text-white/60">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="transition-colors hover:text-white"
                >
                  <Icon className="text-lg" aria-hidden="true" />
                </a>
              ))}
            </div>
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

          <div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-white/50">
                  Contato
                </h2>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-white/80 mb-4">
                  (55) 9 9999-9999
                </p>
                <h2 className="text-xs font-bold uppercase tracking-widest text-white/50">
                  Visite a EXA
                </h2>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-white/80">
                  Av. Paulista, 1000
                  <br />
                  Bela Vista, São Paulo - SP
                </p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Av.+Paulista,+1000,+S%C3%A3o+Paulo"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold uppercase tracking-widest text-white/60 transition-colors hover:text-white"
              >
                Abrir no mapa
              </a>
            </div>
            <div className="mt-6 h-56 overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <iframe
                title="Localização da EXA Barbearia"
                src="https://www.google.com/maps?q=Av.+Paulista,+1000,+S%C3%A3o+Paulo&output=embed"
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
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a EXA pelo WhatsApp"
        className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white text-xl text-black shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-transform hover:scale-105 md:hidden"
      >
        <FaWhatsapp aria-hidden="true" />
      </a>
    </footer>
  );
}
