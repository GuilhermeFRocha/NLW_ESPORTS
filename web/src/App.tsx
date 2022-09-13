import  {MagnifyingGlassPlus} from 'phosphor-react'

import "./styles/main.css";
import logoImg from "./assets/logo.svg";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
      <img src={logoImg} alt="Logo" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of legends
            </strong>
            <span className="text-zinc-300 text-sm block ">4 anuncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden ">
          <img src="/image-2.png" alt="" />

          <div className="w-full  pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of legends
            </strong>
            <span className="text-zinc-300 text-sm block ">4 anuncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden ">
          <img src="/image-3.png" alt="" />

          <div className="w-full  pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of legends
            </strong>
            <span className="text-zinc-300 text-sm block ">4 anuncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden ">
          <img src="/image-5.png" alt="" />

          <div className="w-full  pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of legends
            </strong>
            <span className="text-zinc-300 text-sm block ">4 anuncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden ">
          <img src="/image-6.png" alt="" />

          <div className="w-full  pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of legends
            </strong>
            <span className="text-zinc-300 text-sm block ">4 anuncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden ">
          <img src="/image-7.png" alt="" />

          <div className="w-full  pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of legends
            </strong>
            <span className="text-zinc-300 text-sm block ">4 anuncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2a2634] px-8 py-6 flex justify-between item-center">
            <div>
              <strong className="text-2xl text-white font-black block">Não encontrou o seu duo?</strong>
              <span className="text-zinc-400">Publique um anúncio para encontrar novos players!</span>
            </div>

            <button className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3">
              <MagnifyingGlassPlus size={24}/>
              Publicar anúncio
            </button>
        </div>
      </div>
    </div>
  );
}

export default App;
