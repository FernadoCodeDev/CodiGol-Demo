import React, { useRef } from "react";
import trainingFund from "../../../assets/img/TrainingFund.webp";
import Navigation from "../../../GlobalComponent/Navigation";

import DialogueBox from "../../../GlobalComponent/DialogueBox"

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

       <DialogueBox />
        </div>
      </div>
    </div>
  );
};

export default Lesson1;
