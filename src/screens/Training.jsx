//Practical training
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import trainingFund from "../assets/img/ExerciseFund.webp";
import Navigation from "../ui/Navigation";
import DialogueBox from "../ui/DialogueBox";
import TrainingPoint from "../ui/TrainingPoint";
import Preview from "../ui/Preview";
import Editor from "../ui/Editor";
import Clock from "../ui/Clock";

const defaultCode = `
<div class="p-4 bg-blue-500 text-white rounded-lg">
  Editor de código con Tailwind!
</div>
`;

const Training = () => {
  const [code, setCode] = useState(defaultCode);
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${trainingFund})` }}
      ></div>

          <Navigation />

      <div className="grid items-center justify-center grid-cols-4 ">
      
       <div className="relative h-[85%] mt-32 ">
          <Preview code={code} setCode={setCode}/>
       </div>
       
        <div className="relative grid min-h-screen grid-cols-1 col-span-3">
          <h1 className="text-5xl font-bold text-black md:text-6xl drop-shadow-lg">
            Lección 2: Entrenamiento práctico
          </h1>

          <Clock />

        {/* <TrainingPoint /> */ } 

         { /* <DialogueBox /> */} 

       
          <Editor code={code} setCode={setCode} />
        </div>
      </div>
    </div>
  );
};

export default Training;
