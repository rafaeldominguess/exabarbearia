"use client";
import { useState } from "react";
import Link from "next/link";
import Container from "../Container/Container";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-[#000000] backdrop-blur-md border-b border-[#FFFFFF]/20 w-full fixed top-0 left-0 z-50 py-3 md:py-2 rounded-b-4xl md:rounded-b-none ">
      <Container>
        <nav className="flex justify-between items-center py-2">
          <div>
            <h2 className="uppercase text-3xl font-extrabold tracking-wider">
              Exa
            </h2>
          </div>

          <div className="items-center text-sm gap-8 font-semibold text-[#FFFFFF]/70 hidden md:flex tracking-wider">
            <ul className="flex gap-8">
              <li className="hover:text-[#FFFFFF]">
                <Link href="#inicio">Home</Link>
              </li>
              <li className="hover:text-[#FFFFFF]">
                <Link href="#sobre">Sobre</Link>
              </li>
              <li className="hover:text-[#FFFFFF]">
                <Link href="#profissionais">Profissionais</Link>
              </li>
              <li className="hover:text-[#FFFFFF]">
                <Link href="#servicos">Serviços</Link>
              </li>
              <li className="hover:text-[#FFFFFF]">
                <Link href="#galeria">Galeria</Link>
              </li>
              <li className="hover:text-[#FFFFFF]">
                <Link href="#depoimentos">Depoimentos</Link>
              </li>
              <li className="hover:text-[#FFFFFF]">
                <Link href="#contato">Contato</Link>
              </li>
            </ul>
            <a
              href="#contato"
              className="px-6 py-2 rounded-3xl border border-[#FFFFFF]/20 cursor-pointer hover:text-[#000302] hover:bg-[#FFFFFF] transition-all duration-400"
            >
              Agendamento
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-3xl text-[#FFFFFF]/70 hover:text-white cursor-pointer focus:outline-none transition-all duration-300"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.12 }}
                >
                  {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt4 />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden px-4 py-6 flex flex-col gap-6 text-[#FFFFFF]/70 font-semibold tracking-wider "
            >
              <ul className="flex flex-col gap-4 text-right">
                <li className="hover:text-[#FFFFFF]">
                  <Link href="#inicio" onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                <li className="hover:text-[#FFFFFF]">
                  <Link href="#sobre" onClick={closeMenu}>
                    Sobre
                  </Link>
                </li>
                <li className="hover:text-[#FFFFFF]">
                  <Link href="#profissionais" onClick={closeMenu}>
                    Profissionais
                  </Link>
                </li>
                <li className="hover:text-[#FFFFFF]">
                  <Link href="#servicos" onClick={closeMenu}>
                    Serviços
                  </Link>
                </li>
                <li className="hover:text-[#FFFFFF]">
                  <Link href="#galeria" onClick={closeMenu}>
                    Galeria
                  </Link>
                </li>
                <li className="hover:text-[#FFFFFF]">
                  <Link href="#depoimentos" onClick={closeMenu}>
                    Depoimentos
                  </Link>
                </li>
                <li className="hover:text-[#FFFFFF]">
                  <Link href="#contato" onClick={closeMenu}>
                    Contato
                  </Link>
                </li>
              </ul>
              <div className="py-4">
                <a
                  href="#contato"
                  onClick={closeMenu}
                  className="transition-all font-semibold  duration-300 w-full py-4 rounded-3xl text-[#000000] cursor-pointer hover:border-[#FFFFFF] hover:text-[#FFFFFF] bg-white"
                >
                  Agendamento
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
