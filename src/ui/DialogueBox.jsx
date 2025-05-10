import { useState } from "react";
import { useNavigate } from "react-router-dom"; //
import TrainerPose1 from "../assets/img/TrainerPose1.webp";
import dialogues from "../data/Dialogue";
import { useGame } from "../context/GameContext"; // Game context

const DialogueBox = ({ level = 1, currentPhase }) => {
  const { currentLevel } = useGame();
  const [index, setIndex] = useState(0);
  const currentDialogue = dialogues[level];
  const navigate = useNavigate(); // Route change hook

  if (!currentDialogue) return <p>No hay diálogos para esta lección.</p>;

  const { speaker, text } = currentDialogue[index];

  const handleNext = () => {
    if (index < currentDialogue.length - 1) {
      setIndex(index + 1);
    } else {
      console.log("Fin del diálogo");
    }
  };

  const handleFinishLevel = () => {
    //Navigation between phases
    if (currentPhase === "LessonIntro") {
      navigate("/Training");
    } else if (currentPhase === "Training") {
      navigate("/MatchPresentation");
    } else if (currentPhase === "MatchPresentation") {
      navigate("/SubBench");
    } else if (currentPhase === "SubBench") {
      navigate("/Game");
    } else if (currentPhase === "Game") {
      navigate("/FinalScore");
    } else if (currentPhase === "FinalScore") {
      navigate("/LeagueTable");
    } else if (currentPhase === "LeagueTable") {
      navigate("/LessonIntro");
    }
  };

  const isTrainer = speaker === "trainer";

  return (
    <div className="flex items-end justify-center max-w-7xl">
      {isTrainer && (
        <img
          src={TrainerPose1}
          alt="TrainerPose1"
          className="z-10 object-contain w-40 md:w-56 lg:w-64"
        />
      )}

      <div className="flex-1 max-w-4xl p-6 mb-4 mr-4 text-lg text-black bg-white rounded-lg shadow-xl bg-opacity-80 md:text-xl">
        <p>{text}</p>
        {index < currentDialogue.length - 1 ? (
          <button
            onClick={handleNext}
            className="px-4 py-2 mt-4 font-semibold text-white bg-blue-700 rounded hover:bg-blue-800"
          >
            Siguiente
          </button>
        ) : (
          <button
            onClick={handleFinishLevel}
            className="px-4 py-2 mt-4 font-semibold text-white bg-green-700 rounded hover:bg-green-800"
          >
            Continuar
          </button>
        )}
      </div>
    </div>
  );
};

export default DialogueBox;
