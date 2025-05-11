//Practical training
//Dialogues and exercise
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import trainingFund from "../assets/img/ExerciseFund.webp";
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

const Training = () => {
  const [code, setCode] = useState(defaultCode);
  const [showEditor, setShowEditor] = useState(false);
  const [lastTrainerText, setLastTrainerText] = useState(""); // View exercise button
  const [showExplanation, setShowExplanation] = useState(false); // Request explanation 

  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${trainingFund})` }}
      ></div>

      <Navigation />

      <div className="grid items-center justify-center grid-cols-4 ">
        <div className="relative h-[85%] mt-32 ">
          <Preview code={code} setCode={setCode} />
        </div>

        <div className="relative flex flex-col items-center justify-center min-h-screen col-span-3">
          <div className="absolute bottom-0 w-full">

            {/* Scene sequence: coach's dialogue, exercise */}
            {!showEditor && (
              <DialogueBox
                level={1}
                currentPhase="Training"
                onFinishDialog={(lastText) => {
                  setShowEditor(true); // Show editor when dialog ends
                  setLastTrainerText(lastText); // Last dialogue for the request explanation button
                }}
              />
            )}
          </div>

          {showEditor && (
            <>
              <div className="z-20 flex flex-col items-end w-full h-full max-w-4xl mb-4">
                <button
                  className=" max-w-[20rem] p-2 font-bold text-white bg-yellow-600 rounded  hover:bg-yellow-700"
                  onClick={() => setShowExplanation(!showExplanation)}
                >
                  {showExplanation
                    ? "Ocultar explicación"
                    : "Pedir explicaciones"}
                </button>

                {showExplanation && (
                  <div className="w-full max-w-xl p-4 mt-2 text-black bg-white rounded-lg shadow-xl max-h-32">
                    <strong>Entrenador dice:</strong>
                    <p>{lastTrainerText}</p>
                  </div>
                )}
              </div>
              <Editor code={code} setCode={setCode} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Training;
