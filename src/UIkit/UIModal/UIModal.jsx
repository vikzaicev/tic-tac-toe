import { createPortal } from "react-dom";
import styles from "./styles.module.css";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { useGameState } from "../../useGameState";
import { UIButton } from "../UIButton/UIButton";

/**
 *@param {{
 *   width : 'md' | 'full'
 *}}props
 *@returns
 */
export const UIModal = ({ width = "md" }) => {
  const { winnerSimbol } = useGameState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (winnerSimbol) {
      setTimeout(() => {
        setIsOpen(() => true);
      }, 2000);
    }
  }, [winnerSimbol]);
  if (!isOpen) return null;
  const handleCloseModal = (e) => {
    if (e.target.closest("[data-id=modal]")) return;
    setIsOpen(false);
  };
  return createPortal(
    <div className={styles.overley} onClick={handleCloseModal}>
      <div
        data-id="modal"
        className={clsx(
          styles.modal,
          {
            md: styles.md,
            full: styles.full,
          }[width]
        )}
      >
        <ModalHeader>Игра закончена!</ModalHeader>
        <ModalBodi>Победил: {winnerSimbol}</ModalBodi>
        <ModalFooter>
          <UIButton>Играть</UIButton>
          <UIButton>Играть</UIButton>
        </ModalFooter>
        <button className={styles.BTNClose} onClick={() => setIsOpen(false)}>
          <CrossIcon />
        </button>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

function ModalHeader({ children }) {
  return <h3 className={styles.title}>{children}</h3>;
}
function ModalBodi({ children }) {
  return <div className={styles.bodi}>{children}</div>;
}
function ModalFooter({ children }) {
  return <div className={styles.footer}>{children}</div>;
}
function CrossIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}
