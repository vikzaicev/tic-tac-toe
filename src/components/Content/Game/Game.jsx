import styles from "./styles.module.css";
import { useGameState } from "../../../useGameState";
import clsx from "clsx";

export const Game = () => {
  const {
    cells,
    currentMove,
    nextMove,
    handleClickBtn,
    winnerCecvence,
    winnerSimbol,
  } = useGameState();

  return (
    <div className={styles.conteyner}>
      <div className={styles.info}>
        <div className={styles.current}>Ход : {currentMove}</div>
        <div className={styles.next}>Следующий : {nextMove}</div>
        {winnerSimbol && <div>Winner : {winnerSimbol}</div>}
      </div>
      <div className={styles.game}>
        {cells.map((simbol, index) => (
          <GameCell
            isWinner={winnerCecvence?.includes(index)}
            key={index}
            id={index}
            onClick={handleClickBtn}
            disabled={winnerSimbol}
          >
            {simbol ?? <span>{simbol}</span>}
          </GameCell>
        ))}
      </div>
    </div>
  );
};
function GameCell({ children, onClick, isWinner, id, disabled }) {
  return (
    <button
      disabled={disabled}
      id={id}
      className={clsx(styles.cell, isWinner && styles.winner)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
