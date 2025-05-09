import React, { useRef } from "react";
import trainingFund from "../../../assets/img/TrainingFund.webp";

const Lesson1 = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${trainingFund})` }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white">
        <h1 className="mb-4 text-5xl font-bold text-black md:text-6xl">
          Lección 1 CódiGol
        </h1>
      </div>
    </div>
  );
};

export default Lesson1;
