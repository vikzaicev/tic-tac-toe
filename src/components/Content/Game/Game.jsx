import styles from "./styles.module.css";
import { useGameState } from "../../../useGameState";

export const Game = () => {
  const { cells, currentMove, nextMove, handleClickBtn } = useGameState();

  return (
    <div className={styles.conteyner}>
      <div className={styles.info}>
        <div className={styles.current}>Ход : {currentMove}</div>
        <div className={styles.next}>Следующий : {nextMove}</div>
      </div>
      <div className={styles.game}>
        {cells.map((simbol, index) => (
          <button
            key={index}
            id={index}
            className={styles.cell}
            onClick={handleClickBtn}
          >
            {simbol ?? <span>{simbol}</span>}
          </button>
        ))}
      </div>
    </div>
  );
};
