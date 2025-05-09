//Points table (general progress)
import React, { useRef } from "react";
import Background from "../assets/img/Background.webp";
import Navigation from "../ui/Navigation";
import DialogueBox from "../ui/DialogueBox";
import PhantomViper from "../assets/img/PhantomViper.webp";
import GemRubies from "../assets/img/GemRubies.webp";
import TuskElephants from "../assets/img/TuskElephants.webp";
import JuggernautLeopard from "../assets/img/JuggernautLeopard.webp";
import CodeSharks from "../assets/img/CodeSharks.webp";
import SoarSwifts from "../assets/img/SoarSwifts.webp";
import KnightCoders from "../assets/img/KnightCoders.webp";
import ByteGophers from "../assets/img/ByteGophers.webp";
import WebHawks from "../assets/img/WebHawks.webp";
import StyleChameleons from "../assets/img/StyleChameleons.webp";
import WindJaguars from "../assets/img/WindJaguars.webp";

export const teams = [
  { id: 1, name: "Phantom Viper", logo: PhantomViper },
  { id: 2, name: "Gem Rubies", logo: GemRubies },
  { id: 3, name: "Tusk Elephants", logo: TuskElephants },
  { id: 4, name: "Juggernaut Leopard", logo: JuggernautLeopard },
  { id: 5, name: "Code Sharks", logo: CodeSharks },
  { id: 6, name: "Soar Swifts", logo: SoarSwifts },
  { id: 7, name: "Knight Coders", logo: KnightCoders },
  { id: 8, name: "Byte Gophers", logo: ByteGophers },
  { id: 9, name: "Web Hawks", logo: WebHawks },
  { id: 10, name: "Style Chameleons", logo: StyleChameleons },
  { id: 11, name: "Wind Jaguars", logo: WindJaguars },
];


const LeagueTable = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      <div className="grid items-center justify-center grid-cols-5 ">
        <div className="relative z-20 h-full ">
          <Navigation />
        </div>

        <div className="relative text-white  col-span-4 p-6 m-auto max-w-[60rem]">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg">
            Tabla de Resultados
          </h1>

          {/* Encabezado */}
          <div className="grid grid-cols-6 gap-4 p-3 font-bold bg-black/40 rounded-xl">
            <div className="text-center">Equipo</div>
            <div className="text-center">Ganados</div>
            <div className="text-center">Empates</div>
            <div className="text-center">Perdidos</div>
            <div className="text-center">Puntos</div>
          </div>

          {/* Equipos */}
          <div className="flex flex-col mt-4">
            {teams.map((team) => (
              <div
                key={team.id}
                className="grid items-center grid-cols-6 gap-4 p-3 transition bg-white bg-opacity-20 backdrop-blur-[3px] hover:bg-opacity-30"
              >
                {/* Equipo (imagen + nombre) */}
                <div className="flex items-center">
                  <img
                    src={team.logo}
                    alt={team.name}
                    className="object-contain w-10 h-10"
                  />
                  <span className="font-medium">{team.name}</span>
                </div>

                {/* Resultados */}
                <div className="text-center">0</div>
                <div className="text-center">0</div>
                <div className="text-center">0</div>
                <div className="font-bold text-center">0</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueTable;
