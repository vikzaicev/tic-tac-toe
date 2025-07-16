import styles from "./styles.module.css";
import clsx from "clsx";

//  @props {

// }

export const UIButton = ({ children, className }) => {
  return <button className={clsx(className, styles.button)}>{children}</button>;
};
