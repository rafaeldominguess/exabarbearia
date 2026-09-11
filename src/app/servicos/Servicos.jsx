import Container from "../Container/Container";

export default function Servicos() {
  return (
    <section className="w-full min-h-screen py-24">
      <Container>
        <div>
          <span className="text-[#FFFFFF]/70 text-sm font-bold uppercase tracking-widest">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-6xl uppercase font-extrabold mt-4 mb-8 md:mt-10 md:mb-8 tracking-tighter">
            O que oferecemos?
          </h2>
        </div>
        <div className=" h-auto w-full flex items-center justify-between mt-20">
          <div className="w-full md:w-1/2 h-auto  text-[#FFFFFF]/60 rounded-lg">
            <div className="flex justify-between uppercase font-semibold tracking-widest text-[#FFFFFF]/80 items-center">
              <p>Descrição</p>
              <p>Valor</p>
            </div>
            <div className="flex justify-between border-b border-[#FFFFFF]/20 py-4 mt-4 items-center">
              <h3>Barba</h3>
              <p className="text-[#FFFFFF]/90 text-lg font-bold">R$ 30,00</p>
            </div>
            <div className="flex justify-between border-b border-[#FFFFFF]/20 py-4 items-center">
              <h3>Cabelo</h3>
              <p className="text-[#FFFFFF]/90 text-lg font-bold">R$ 40,00</p>
            </div>
            <div className="flex justify-between border-b border-[#FFFFFF]/20 py-4 items-center">
              <h3>Cabelo + Barba</h3>
              <p className="text-[#FFFFFF]/90 text-lg font-bold">R$ 60,00</p>
            </div>
            <div className="flex justify-between border-b border-[#FFFFFF]/20 py-4 items-center">
              <h3>Depilação</h3>
              <p className="text-[#FFFFFF]/90 text-lg font-bold">R$ 50,00</p>
            </div>
            <div className="flex justify-between pt-4 items-center">
              <h3>Bigode</h3>
              <p className="text-[#FFFFFF]/90 text-lg font-bold">R$ 10,00</p>
            </div>
          </div>
          <div className="w-1/2 justify-center items-center hidden md:flex">
            <img
              src="/profissionaisherosection.png"
              alt="Imagem dos serviços"
              className=" object-cover w-1/2 rounded-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
