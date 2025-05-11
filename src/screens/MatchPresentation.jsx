//VS Match Screen
import React, { useRef } from "react";
import Background from "../assets/img/Background.webp";
import Navigation from "../ui/Navigation";
import WindJaguars from "../assets/img/WindJaguars.webp";
import GemRubies from "../assets/img/GemRubies.webp";

const MatchPresentation = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      <div className="grid items-center justify-center grid-cols-5 gr ">
        <div className="relative z-20 h-full ">
          <Navigation />
        </div>

        <div className="relative flex flex-col min-h-screen col-span-4 text-center text-white ">
          <h1 className="text-6xl font-bold md:text-6xl drop-shadow-lg">
            Liga Full Stack
          </h1>

          <h1 className="mt-4 text-5xl font-bold md:text-6xl drop-shadow-lg">
            30:00
          </h1>

          <div className="grid grid-cols-3 m-auto max-w-[60rem]">
            <div className="flex flex-col items-center justify-center gap-2 text-white">
              <img
                src={WindJaguars}
                alt="WindJaguars"
                className="w-full h-auto"
              />
              <div className="w-full h-2 bg-white"></div>
              <h1 className="text-4xl font-bold text-center">Wind Jaguars</h1>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 text-white">
              <h1 className="font-bold text-center text-7xl">00 - 03</h1>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 text-white">
              <img src={GemRubies} alt="GemRubies" className="w-full h-auto" />
              <div className="w-full h-2 bg-white"></div>
              <h1 className="text-4xl font-bold text-center">Gem Rubies</h1>
            </div>

            <button className="col-start-3 px-4 py-2 m-4 font-semibold text-white bg-blue-700 rounded hover:bg-blue-800">
              Siguiente
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchPresentation;
