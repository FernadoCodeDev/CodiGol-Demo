//Interactive match stage
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import TestFund from "../assets/img/TestFund.webp";
import RivalGoalkeeper from "../assets/img/RivalGoalkeeper.webp";
import Navigation from "../ui/Navigation";
import DialogueBox from "../ui/DialogueBox";
import TrainingPoint from "../ui/TrainingPoint";
import Clock from "../ui/Clock";
import Preview from "../ui/Preview";
import Editor from "../ui/Editor";

const defaultCode = `
<div class="p-4 bg-blue-500 text-white rounded-lg">
  Editor de código con Tailwind!
</div>
`;


const Game = () => {

    const [code, setCode] = useState(defaultCode);

  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${TestFund})` }}
      ></div>

      <Navigation />

      <div className="grid items-center justify-center grid-cols-4 ">
        <div className="relative h-[85%] mt-32 ">
          <Preview code={code} setCode={setCode} />
        </div>

        <div className="relative grid min-h-screen grid-cols-1 col-span-3">
          <h1 className="text-5xl font-bold text-black md:text-6xl drop-shadow-lg">
            Lección 5: Game
          </h1>

          <img
            src={RivalGoalkeeper}
            alt="RivalGoalkeeper"
            className="absolute object-contain w-80 top-1/4 right-1/2"
          />

          <Clock />

          {/* <TrainingPoint /> */}

          {/* <DialogueBox /> */}

          <Editor code={code} setCode={setCode} />
        </div>
      </div>
    </div>
  );
};

export default Game;
