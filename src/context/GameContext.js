// GameContext.js
import { createContext, useContext, useState } from "react";
import WindJaguars from "../assets/img/WindJaguars.webp";
import GemRubies from "../assets/img/GemRubies.webp";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [currentLevel, setCurrentLevel] = useState(1); // Current level (1 = first match)

  const [currentTeam, setCurrentTeam] = useState(null);
  const [playerGoals, setPlayerGoals] = useState(0);
  const [rivalGoals, setRivalGoals] = useState(2);
  const [playerTeam, setPlayerTeam] = useState({
    name: "WindJaguars",
    logo: WindJaguars,
  });
  const [rivalTeam] = useState({
    name: "Gem Rubies",
    logo: GemRubies, 
  });

  const nextLevel = () => setCurrentLevel((prev) => prev + 1);

  const updatePlayerGoals = () => setPlayerGoals((prev) => prev + 1);
  return (
    <GameContext.Provider
      value={{
        currentLevel,
        nextLevel,
        playerGoals,
        rivalGoals,
        playerTeam,
        rivalTeam,
        updatePlayerGoals,

      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
