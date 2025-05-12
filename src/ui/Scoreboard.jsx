import React, { useState, useEffect } from "react";

export default function Scoreboard() {

  return (
    <div className="top-0  absolute bg-black rounded-box text-white grid auto-cols-max grid-flow-col gap-5 text-center">
      <div className="flex flex-col p-2">
        <span className="countdown font-mono text-5xl">
          <span></span>
        </span>
        min
      </div>

      <div className="flex flex-col p-2">
        <span className="countdown font-mono text-xl">
          <span>40:00</span>
        </span>
      </div>


      <div className="flex flex-col p-2">
        <span className="countdown font-mono text-5xl">
          <span></span>
        </span>
        sec
      </div>
    </div>
  );
}
