import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { useGameState } from "../../../useGameState";
import { getNextMove } from "../../../utils";
import clsx from "clsx";

export const Player = ({ player, isTimerRunning, onTimeOver }) => {
  const [seconds, setSeconds] = useState(30);
  const { playerCount, currentMove, setCurrentMove } = useGameState();

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
        <div className={styles.icon}></div>
        <div className={styles.simbol}>{player.simbol}</div>
        <div className={styles.name}>{player.name}</div>
        <div className={styles.reyt}>рейтинг: {player.reyt}</div>
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
