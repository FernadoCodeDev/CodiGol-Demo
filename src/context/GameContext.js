// GameContext.js
import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [currentLevel, setCurrentLevel] = useState(1); // Current level (1 = first match)

  const nextLevel = () => setCurrentLevel((prev) => prev + 1);

  return (
    <GameContext.Provider value={{ currentLevel, nextLevel }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
