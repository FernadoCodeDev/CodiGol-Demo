//Banking scene before the change
import React, { useRef } from "react";
import BankingFund from "../assets/img/BankingFund.webp";
import Navigation from "../ui/Navigation";
import DialogueBox from "../ui/DialogueBox";

const SubBench = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${BankingFund})` }}
      ></div>

      <div className="grid items-center justify-center grid-cols-5 gr ">
        <div className="relative z-20 h-full ">
          <Navigation />
        </div>

        <div className="relative grid min-h-screen grid-cols-1 col-span-4 ">
          <h1 className="text-5xl font-bold text-black md:text-6xl drop-shadow-lg">
            Lección 4: BankingFund
          </h1>

          <DialogueBox />
        </div>
      </div>
    </div>
  );
};

export default SubBench;
