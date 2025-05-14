import React, { useEffect } from "react";
import Background from "../assets/img/Background.webp";
import Navigation from "../ui/Navigation";
import WindJaguars from "../assets/img/WindJaguars.webp";
import MatchPresentationData from "../data/MatchPresentation";
import ModalSize from "../ui/ModalSize";
import { useNavigate } from "react-router-dom";
import { navigateToNextPhase } from "../utils/navigateToNextPhase";

const MatchPresentation = () => {
  const navigate = useNavigate();

  const currentLevel = 1;
  const matchData = MatchPresentationData.find(
    (match) => match.level === currentLevel
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigateToNextPhase("MatchPresentation", navigate);
    }, 15000);


    return () => clearTimeout(timeout); 
  }, [navigate]);

  if (!matchData) return <div>Error: No se encontró el partido</div>;

  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      <div className="grid items-center justify-center grid-cols-5">
        <div className="relative z-20 h-full">
          <Navigation />
        </div>

        <ModalSize className="absolute" />

        <div className="relative flex flex-col min-h-screen col-span-4 text-center text-white">
          <h1 className="text-6xl font-bold drop-shadow-lg">Liga Full Stack</h1>

          <h1 className="mt-4 text-5xl font-bold drop-shadow-lg">45:00</h1>

          <div className="grid grid-cols-3 m-auto max-w-[60rem]">
            <div className="flex flex-col items-center justify-center gap-2 text-white">
              <img src={WindJaguars} alt="WindJaguars" className="w-full h-auto" />
              <div className="w-full h-2 bg-white"></div>
              <h1 className="text-4xl font-bold text-center">Wind Jaguars</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-white">
              <h1 className="font-bold text-center text-7xl">
                00 - {matchData.Marker}
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-white">
              <img
                src={matchData.Rivalimg}
                alt={matchData.RivalsName}
                className="w-full h-auto"
              />
              <div className="w-full h-2 bg-white"></div>
              <h1 className="text-4xl font-bold text-center">
                {matchData.RivalsName}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchPresentation;
