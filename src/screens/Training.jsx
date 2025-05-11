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

  //Resize screens in width, preview screen and editor screen
  const [previewWidth, setPreviewWidth] = useState(400); // start width

  const resizerRef = useRef(null);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPreviewWidth(e.clientX);
    };

    const stopResize = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopResize);
    };

    const startResize = () => {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", stopResize);
    };

    const resizer = resizerRef.current;
    if (resizer) {
      resizer.addEventListener("mousedown", startResize);
    }

    return () => {
      if (resizer) resizer.removeEventListener("mousedown", startResize);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${trainingFund})` }}
      ></div>

      <div className="flex h-screen gap-4 mt-32">
        <div
          style={{ width: previewWidth }}
          className="relative h-[85%] mt-32 "
        >
          <Preview code={code} setCode={setCode} />
        </div>

        <div style={{ width: previewWidth }} className="absolute ">
          <Navigation />
        </div>

        <div
          ref={resizerRef}
          className="relative w-2 bg-yellow-500 cursor-col-resize hover:bg-yellow-700"
        ></div>

        <div className="relative flex flex-col justify-end flex-1 min-h-screen">
          <div className="bottom-0 w-full ">
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
              <div className="z-20 flex flex-col justify-center w-full h-full max-w-4xl gap-2 ">
                <button
                  className="max-w-[20rem] p-2 font-bold text-white bg-yellow-600 rounded  hover:bg-yellow-700"
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
                <Editor code={code} setCode={setCode} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Training;
