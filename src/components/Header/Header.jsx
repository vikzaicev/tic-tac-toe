import { UIButton } from "../../UIkit/UIButton/UIButton";
import styles from "./styles.module.css";
import { CrossIcon, CircleIcon } from "../Icon";
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <CrossIcon />/<CircleIcon />
      </div>
      <UIButton>Играть</UIButton>
    </header>
  );
};
