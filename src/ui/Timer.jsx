import React, { useState, useEffect } from "react";

export default function Timer() {
  const [remainingTime, setRemainingTime] = useState({ minutes: 1, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        const { minutes, seconds } = prevTime;

        if (minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return { minutes: 0, seconds: 0 };
        }

        if (seconds === 0) {
          return { minutes: minutes - 1, seconds: 59 };
        }

        return { minutes, seconds: seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="top-0 right-0 absolute grid auto-cols-max grid-flow-col gap-5 text-center">
      <div className="bg-black rounded-box text-white flex flex-col p-2">
        <span className="countdown font-mono text-5xl">
          <span>{String(remainingTime.minutes).padStart(2, "0")}</span>
        </span>
        min
      </div>
      <div className="bg-black rounded-box text-white flex flex-col p-2">
        <span className="countdown font-mono text-5xl">
          <span>{String(remainingTime.seconds).padStart(2, "0")}</span>
        </span>
        sec
      </div>
    </div>
  );
}
