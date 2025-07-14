import { createContext, useState } from "react";
import { GAME_SIMBOLS } from "./constants";
import { getNextMove, computeWinner } from "./utils";

export const GameStateContext = createContext();

export function GameStateProvider({ children }) {
  const [playerCount] = useState(2);
  const [{ cells, currentMove, playersIsTimeOver }, setCurrentMove] = useState({
    cells: new Array(10 * 10).fill(null),
    currentMove: GAME_SIMBOLS.CROSS,
    playersIsTimeOver: [],
  });
  const nextMove = getNextMove(currentMove, playerCount, playersIsTimeOver);
  const winnerCecvence = computeWinner(cells);

  const winnerSimbol =
    currentMove === nextMove ? currentMove : cells[winnerCecvence?.[0]];

  const handleClickBtn = (e) => {
    const id = e.target.id;

    setCurrentMove((lastCurrentMove) => {
      if (lastCurrentMove.cells[id]) {
        return lastCurrentMove;
      }
      return {
        ...lastCurrentMove,
        currentMove: getNextMove(
          lastCurrentMove.currentMove,
          playerCount,
          playersIsTimeOver
        ),

        cells: lastCurrentMove.cells.map((cell, i) =>
          i == id ? lastCurrentMove.currentMove : cell
        ),
      };
    });
  };
  const handleIsTimeOver = (simbol) => {
    setCurrentMove((lastCurrentMove) => {
      return {
        ...lastCurrentMove,
        playersIsTimeOver: [...lastCurrentMove.playersIsTimeOver, simbol],
        currentMove: getNextMove(
          lastCurrentMove.currentMove,
          playerCount,
          playersIsTimeOver
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
        winnerCecvence,
        handleIsTimeOver,
        winnerSimbol,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
}
