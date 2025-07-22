import { useGameState } from "../../useGameState";
import styles from "./styles.module.css";
import { Player } from "./Player/Player";
import { CrossIcon } from "../Icon";

const players = [
  {
    id: 1,
    name: "Ivan",
    simbol: "src/img/cross.svg",
    reyt: 125,
    src: "src/img/1.jpg",
  },
  {
    id: 2,
    name: "Lena",
    simbol: "src/img/circle.svg",
    reyt: 155,
    src: "src/img/2.jpg",
  },
  {
    id: 3,
    name: "Kola",
    simbol: "src/img/square.svg",
    reyt: 101,
    src: "src/img/3.jpg",
  },
  {
    id: 4,
    name: "Masa",
    simbol: "src/img/triangle.svg",
    reyt: 86,
    src: "src/img/4.jpg",
  },
];
export const Players = ({ isWinner }) => {
  const { playerCount, currentMove, handleIsTimeOver } = useGameState();

  return (
    <div className={styles.players}>
      {players.slice(0, playerCount).map((player) => (
        <div className={styles.player} key={player.id}>
          <Player
            player={player}
            isTimerRunning={currentMove === player.simbol && !isWinner}
            onTimeOver={() => {
              handleIsTimeOver(player.simbol);
            }}
          />
        </div>
      ))}
    </div>
  );
};
