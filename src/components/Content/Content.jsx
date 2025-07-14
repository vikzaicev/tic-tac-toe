import { Game } from "./Game/Game";
import { Players } from "../Players/Players";
import { useGameState } from "../../useGameState";

export const Content = () => {
  const { winnerSimbol } = useGameState();
  return (
    <>
      <Players isWinner={winnerSimbol} />
      <Game />
    </>
  );
};
