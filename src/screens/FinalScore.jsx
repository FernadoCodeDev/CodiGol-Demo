//Final result of the match
import React, { useRef } from "react";
import Background from "../assets/img/Background.webp";
import Navigation from "../ui/Navigation";
import DialogueBox from "../ui/DialogueBox";

const FinalScore = () => {
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

        <div className="relative grid min-h-screen grid-cols-1 col-span-4 ">
          <h1 className="text-5xl font-bold text-black md:text-6xl drop-shadow-lg">
            Lección 6: FinalScore
          </h1>

          <DialogueBox />
        </div>
      </div>
    </div>
  );
};

export default FinalScore;
