import { createContext, useState } from "react";
import { GAME_SIMBOLS } from "./constants";
import { getNextMove } from "./utils";

export const GameStateContext = createContext();

export function GameStateProvider({ children }) {
  const [playerCount] = useState(4);
  const [{ cells, currentMove }, setCurrentMove] = useState({
    cells: new Array(10 * 10).fill(null),
    currentMove: GAME_SIMBOLS.CROSS,
  });
  const nextMove = getNextMove(currentMove, playerCount);

  const handleClickBtn = (e) => {
    const id = e.target.id;
    setCurrentMove((lastCurrentMove) => {
      if (lastCurrentMove.cells[id]) {
        return lastCurrentMove;
      }
      return {
        ...lastCurrentMove,
        currentMove: getNextMove(lastCurrentMove.currentMove, playerCount),
        cells: lastCurrentMove.cells.map((cell, i) =>
          i == id ? lastCurrentMove.currentMove : cell
        ),
      };
    });
  };

  return (
    <GameStateContext.Provider
      value={{
        cells,
        currentMove,
        nextMove,
        handleClickBtn,
        playerCount,
        setCurrentMove,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
}
