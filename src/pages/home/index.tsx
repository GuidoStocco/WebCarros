import { Container } from "../../components/container";
import bwmImg from './../../assets/bmw.png'










export function Home() {
  return(
    <Container>
      <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center gap-2">
        <input
        className="w-full border-1 rounded-lg h-9 px-3 border-gray-300"
          placeholder="Digite o nome do carro..."
        />

        <button 
          className="bg-red-500 h-9 px-8 rounded-lg text-white font-medium text-lg"
        >
          Buscar
        </button>
      </section>

      <h1
        className="font-bold text-center mt-6 mb-4 text-2xl"
      >Carros novos e usados em todo o brasil</h1>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <section className="w-full bg-white rounded-lg">
          <img
            src={bwmImg}
            alt="Carro"
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
          />
          <p className="font-bold mt-1 mb-2 px-2">BMW 320i</p>
          <div className="flex flex-col px-2">
              <span className="text-zinc-700 mb-6">ano 2021/2020 / 50.822 km</span>
              <strong className="text-black font-medium text-xl">R$ 193.900</strong>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>

          <div className="px-2 pb-2 ">
            <span className="text-zinc-700">Brasília - DF</span>
          </div>
        </section>

         <section className="w-full bg-white rounded-lg">
          <img
            src={bwmImg}
            alt="Carro"
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
          />
          <p className="font-bold mt-1 mb-2 px-2">BMW 320i</p>
          <div className="flex flex-col px-2">
              <span className="text-zinc-700 mb-6">ano 2021/2020 / 50.822 km</span>
              <strong className="text-black font-medium text-xl">R$ 193.900</strong>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>

          <div className="px-2 pb-2 ">
            <span className="text-zinc-700">Brasília - DF</span>
          </div>
        </section>

         <section className="w-full bg-white rounded-lg">
          <img
            src={bwmImg}
            alt="Carro"
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
          />
          <p className="font-bold mt-1 mb-2 px-2">BMW 320i</p>
          <div className="flex flex-col px-2">
              <span className="text-zinc-700 mb-6">ano 2021/2020 / 50.822 km</span>
              <strong className="text-black font-medium text-xl">R$ 193.900</strong>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>

          <div className="px-2 pb-2 ">
            <span className="text-zinc-700">Brasília - DF</span>
          </div>
        </section>

      </main>

    </Container>
  )
}


