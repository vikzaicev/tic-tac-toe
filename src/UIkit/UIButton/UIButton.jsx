import styles from "./styles.module.css";
import clsx from "clsx";

//  @props {

// }

export const UIButton = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={clsx(className, styles.button)}>
      {children}
    </button>
  );
};
