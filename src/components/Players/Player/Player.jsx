import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import clsx from "clsx";

export const Player = ({ player, isTimerRunning, onTimeOver }) => {
  const [seconds, setSeconds] = useState(30);

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const second = String(seconds % 60).padStart(2, "0");

  const flagColor = second < 10;
  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds((s) => Math.max(s - 1, 0));
      }, 1000);
      return () => {
        clearInterval(interval);
        setSeconds(30);
      };
    }
  }, [isTimerRunning]);
  useEffect(() => {
    if (seconds == 0) {
      onTimeOver();
    }
  }, [seconds]);
  return (
    <div className={styles.player_block}>
      <div className={styles.player_info}>
        <div className={styles.avatar}>
          <div className={styles.icon}>
            <img className={styles.img} src={player.src} alt={player.name} />
            <div className={styles.simbol}>
              <img src={player.simbol} alt={player.simbol} />
            </div>
          </div>
        </div>

        <div className={styles.flex}>
          <div className={styles.name}>{player.name}</div>
          <div className={styles.reyt}>рейтинг: {player.reyt}</div>
        </div>
      </div>
      <div
        className={clsx(
          styles.player_time,
          isTimerRunning && styles.player_active,
          flagColor && styles.player_flag
        )}
      >
        {minutes} : {second}
      </div>
    </div>
  );
};
