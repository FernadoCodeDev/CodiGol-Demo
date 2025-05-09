import React, { useRef } from "react";
import trainingFund from "../../../assets/img/TrainingFund.webp";
import Navigation from "../../../GlobalComponent/Navigation";
import TrainerPose1 from "../../../assets/img/TrainerPose1.webp";

const Lesson1 = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${trainingFund})` }}
      ></div>

      <div className="grid items-center justify-center grid-cols-4 gr ">
        <div className="relative z-20 h-full ">
          <Navigation />
        </div>

        <div className="relative grid min-h-screen grid-cols-1 col-span-3 ">
          <h1 className="text-5xl font-bold text-black md:text-6xl drop-shadow-lg">
            Lección 1: Introducción a Tailwind
          </h1>

          <div className="flex items-end justify-center max-w-7xl">
            <img
              src={TrainerPose1}
              alt="TrainerPose1"
              className="object-contain w-40 md:w-56 lg:w-64"
            />

            <div className="flex-1 max-w-4xl p-6 mb-4 mr-4 text-lg text-black bg-white rounded-lg shadow-xl bg-opacity-80 md:text-xl">
              <p>
                ¡Bienvenido jugador! Yo seré tu entrenador y juntos aprenderemos
                a usar{" "}
                <span className="font-bold text-blue-700">Tailwind CSS</span>.
                Hoy comenzaremos con lo más básico: cómo estructurar con clases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson1;
