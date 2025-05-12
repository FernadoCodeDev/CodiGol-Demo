//Practical training
//Dialogues and exercise
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import trainingFund from "../assets/img/ExerciseFund.webp";
import Navigation from "../ui/Navigation";
import DialogueBox from "../ui/DialogueBox";
import TrainingPoint from "../ui/TrainingPoint";
import Preview from "../ui/Preview";
import Editor from "../ui/Editor";
//exercises and evaluate Answer
import exercises from "../data/exercises";
import evaluateAnswer from "../utils/evaluateAnswer";

//At the end of the exercises it will take you to MatchPresentation
import { useNavigate } from "react-router-dom";
import { navigateToNextPhase } from "../utils/navigateToNextPhase";

const defaultCode = `
<div class="">
  Hola Tailwind!
</div>
`;

const Training = () => {
  const [code, setCode] = useState(defaultCode);
  const [showEditor, setShowEditor] = useState(false);
  const [lastTrainerText, setLastTrainerText] = useState(""); // View exercise button
  const [showExplanation, setShowExplanation] = useState(false); // Request explanation

  //exercises and evaluate Answer
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const currentExercise = exercises[currentExerciseIndex];

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

  const navigate = useNavigate();
  const handleFinishLevel = () => {
  navigateToNextPhase("Training", navigate);
};


  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${trainingFund})` }}
      ></div>

      <div className="flex h-screen gap-4 ">
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
                <div className="flex flex-row w-full">
                  <button
                    className="max-w-[20rem] p-2 font-bold text-white bg-yellow-600 rounded  hover:bg-yellow-700"
                    onClick={() => setShowExplanation(!showExplanation)}
                  >
                    {showExplanation
                      ? "Ocultar explicación"
                      : "Pedir explicaciones"}
                  </button>

                  <button
                    className="max-w-[20rem] p-2 font-bold text-white bg-sky-600 rounded  hover:bg-sky-700"
                    onClick={() => {
                      const isCorrect = evaluateAnswer(code, currentExercise);

                      //Function to verify exercise as player response
                      if (isCorrect) {
                        alert(
                          "¡Golazo! 🎯 ¡Has dominado la técnica! Sigue así y anotarás más goles. ¡Vamos por el siguiente ejercicio! ⚽"
                        );

                        if (currentExerciseIndex < exercises.length - 1) {
                          // next exercise
                          setCurrentExerciseIndex((prev) => prev + 1);
                          setCode(defaultCode); // The code is reset when moving to the next exercise
                        } else {
                          // SWhen the exercises are finished, the coach congratulates you and you move on to the next phase of the game, which is the actual match.
                          alert(
                            "¡Bien! 🏆 ¡Has completado todos los ejercicios y dominado las técnicas! Ahora prepárate para el partido real. ¡A ganar! ⚽"
                          );

                          handleFinishLevel(); //directional button to other phases
                        }
                      } else {
                        alert(
                          "¡Casi! ❌ No te preocupes, sigue practicando. Recuerda, la técnica es clave. Vuelve a revisar y corrige el error. ¡La próxima vez será gol! ⚽"
                        );
                      }
                    }}
                  >
                    Verificar respuesta
                  </button>
                </div>

                {showExplanation && (
                  <div className="w-full max-w-xl p-4 mt-2 text-black bg-white rounded-lg shadow-xl max-h-32">
                    <strong>Entrenador dice:</strong>
                    <p>{currentExercise.prompt}</p>
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
