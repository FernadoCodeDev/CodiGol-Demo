import React from "react";
import { useState } from "react";

const Clock = () => {
  return (
    <div className="absolute top-0 grid grid-flow-col gap-5 p-2 text-center text-white bg-black right-2 auto-cols-max">

      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="font-mono text-5xl countdown">
          <span >
            24
          </span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="font-mono text-5xl countdown">
          <span s>
            59
          </span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Clock;
