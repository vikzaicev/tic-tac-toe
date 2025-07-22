import styles from "./styles.module.css";
import { useGameState } from "../../../useGameState";
import { UIModal } from "../../../UIkit/UIModal/UIModal";
import clsx from "clsx";
import { CrossIcon } from "../../Icon";

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
        {!winnerSimbol && (
          <div className="">
            <div className={styles.current}>
              Ход :
              <div className={styles.img}>
                <img src={currentMove} />
              </div>
            </div>
            <div className={styles.next}>
              Следующий :
              <div className={styles.img}>
                <img src={nextMove} />
              </div>
            </div>
          </div>
        )}
        {winnerSimbol && (
          <div className={styles.winner1}>
            Winner : <img src={winnerSimbol} />
          </div>
        )}
      </div>
      <UIModal />
      <div className={styles.game}>
        {cells.map((simbol, index) => (
          <GameCell
            isWinner={winnerCecvence?.includes(index)}
            key={index}
            id={index}
            onClick={handleClickBtn}
            disabled={winnerSimbol}
          >
            {<img src={simbol} /> ?? (
              <span>
                <img src={simbol} />
              </span>
            )}
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
