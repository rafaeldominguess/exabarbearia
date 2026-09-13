"use client";

import { motion } from "framer-motion";
import Container from "../Container/Container";

const testimonials = [
  {
    text: "Saio da EXA sempre me sentindo mais confiante. O corte fica impecável e o atendimento é realmente diferenciado.",
    image: "/depoimento_1.png",
    name: "Ana Lucia",
    role: "Cliente há 3 anos",
  },
  {
    text: "O ambiente é muito bom, os profissionais entendem exatamente o que a gente pede e o resultado nunca decepciona.",
    image: "/depoimento_2.png",
    name: "André Carvalho",
    role: "Cliente frequente",
  },
  {
    text: "Virou meu lugar de confiança para cabelo. Técnica, cuidado e pontualidade em todos os horários.",
    image: "/depoimento_3.png",
    name: "Beatriz Brasil",
    role: "Cliente há 2 anos",
  },
  {
    text: "A equipe é muito atenciosa e o acabamento é de outro nível. Dá para perceber o cuidado em cada detalhe.",
    image: "/depoimento_4.png",
    name: "Rafael Martins",
    role: "Cliente verificado",
  },
  {
    text: "Além do corte ficar excelente, a experiência na barbearia é leve e confortável. Recomendo para todo mundo.",
    image: "/depoimento_5.png",
    name: "Bruno Almeida",
    role: "Cliente há 1 ano",
  },
  {
    text: "Finalmente encontrei um barbeiro que entende meu estilo. O resultado fica consistente em toda visita.",
    image: "/depoimento_6.png",
    name: "Gustavo Nunes",
    role: "Cliente frequente",
  },
  {
    text: "O atendimento é organizado e o serviço entrega exatamente o que promete. A EXA já faz parte da minha rotina.",
    image: "/depoimento_7.png",
    name: "Matheus Lima",
    role: "Cliente verificado",
  },
  {
    text: "Cabelo e barba sempre bem feitos, com muita atenção ao formato do rosto. Trabalho realmente profissional.",
    image: "/depoimento_8.png",
    name: "Thiago Souza",
    role: "Cliente há 2 anos",
  },
  {
    text: "O cuidado começa na recepção e termina no espelho. É uma experiência que vale a pena repetir.",
    image: "/depoimento_9.png",
    name: "Diego Ferreira",
    role: "Cliente frequente",
  },
];

const columns = [
  testimonials.slice(0, 3),
  testimonials.slice(3, 6),
  testimonials.slice(6, 9),
];

function TestimonialsColumn({
  testimonials: column,
  duration,
  className = "",
}) {
  return (
    <div className={`w-full max-w-md ${className}`}>
      <motion.ul
        animate={{ y: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="m-0 flex list-none flex-col gap-6 p-0"
      >
        {[...column, ...column].map(({ text, image, name, role }, index) => (
          <motion.li
            key={`${name}-${index}`}
            aria-hidden={index >= column.length}
            tabIndex={index >= column.length ? -1 : 0}
            whileHover={{ y: -6, scale: 1.02 }}
            whileFocus={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            className="group rounded-lg border border-white/15 bg-white/4 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.16)] outline-none transition-colors duration-300 hover:border-white/35 focus:border-white/35 focus:ring-2 focus:ring-white/20"
          >
            <blockquote className="m-0 p-0">
              <p className="m-0 text-sm font-medium leading-relaxed tracking-wide text-white/80">
                “{text}”
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <img
                  width="40"
                  height="40"
                  src={image}
                  alt={`Foto de ${name}`}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-white/15 transition-all duration-300 group-hover:ring-white/50"
                />
                <div className="flex min-w-0 flex-col">
                  <cite className="truncate text-sm font-bold not-italic tracking-wide text-white">
                    {name}
                  </cite>
                  <span className="mt-0.5 text-xs tracking-wide text-white/45">
                    {role}
                  </span>
                </div>
              </footer>
            </blockquote>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default function Depoimentos() {
  return (
    <section
      id="depoimentos"
      className="relative w-full overflow-hidden py-24"
      aria-labelledby="depoimentos-heading"
    >
      <Container>
        <div className="mb-16 flex max-w-170 flex-col">
          <span className="text-sm font-bold uppercase tracking-widest text-white/70">
            O que dizem sobre nós
          </span>
          <h2
            id="depoimentos-heading"
            className="mt-4 text-4xl font-extrabold uppercase tracking-tighter md:mt-10 md:text-6xl"
          >
            Quem conhece, recomenda
          </h2>
          <p className="mt-5 max-w-170 text-sm font-medium leading-relaxed tracking-wider text-white/70 md:text-base">
            A experiência de quem escolhe a EXA para cuidar da sua imagem, todos
            os dias.
          </p>
        </div>

        <div
          className="flex max-h-170 justify-center gap-4 overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)] md:gap-6"
          role="region"
          aria-label="Depoimentos de clientes"
        >
          <TestimonialsColumn testimonials={columns[0]} duration={18} />
          <TestimonialsColumn
            testimonials={columns[1]}
            duration={22}
            className="hidden md:block"
          />
          <TestimonialsColumn
            testimonials={columns[2]}
            duration={20}
            className="hidden lg:block"
          />
        </div>
      </Container>
    </section>
  );
}
