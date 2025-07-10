import { useGameState } from "../../useGameState";
import styles from "./styles.module.css";
import { Player } from "./Player/Player";

const players = [
  { id: 1, name: "Ivan", simbol: "x", reyt: 125 },
  { id: 2, name: "Lena", simbol: "o", reyt: 155 },
  { id: 3, name: "Kola", simbol: "z", reyt: 101 },
  { id: 4, name: "Masa", simbol: "a", reyt: 86 },
];
export const Players = () => {
  const { playerCount, currentMove } = useGameState();

  return (
    <div className={styles.players}>
      {players.slice(0, playerCount).map((player) => (
        <div className={styles.player} key={player.id}>
          <Player
            player={player}
            isTimerRunning={currentMove === player.simbol}
          />
        </div>
      ))}
    </div>
  );
};
