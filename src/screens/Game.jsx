//Interactive match stage
import React, { useRef } from "react";
import TestFund from "../assets/img/TestFund.webp";
import Navigation from "../ui/Navigation";
import DialogueBox from "../ui/DialogueBox";
import TrainingPoint from "../ui/TrainingPoint";
import Clock from "../ui/Clock";
import RivalGoalkeeper from "../assets/img/RivalGoalkeeper.webp";

const Game = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${TestFund})` }}
      ></div>

      <div className="grid items-center justify-center grid-cols-5 ">
        <div className="relative z-20 h-full ">
          <Navigation />
        </div>

        <div className="relative grid min-h-screen grid-cols-1 col-span-4 ">
          <h1 className="text-5xl font-bold text-black md:text-6xl drop-shadow-lg">
            Lección 5: Game
          </h1>

          <img
            src={RivalGoalkeeper}
            alt="RivalGoalkeeper"
            className="absolute z-30 object-contain w-80 top-1/4 right-1/2"
          />

          <Clock />

          <TrainingPoint />

          <DialogueBox />
        </div>
      </div>
    </div>
  );
};

export default Game;
