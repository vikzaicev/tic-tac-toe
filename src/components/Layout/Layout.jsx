import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Content } from "../Content/Content";
import styles from "./styles.module.css";
import { GameStateProvider } from "../../GameStateContext";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <GameStateProvider>
        <Header />
        <Content />
        <Footer />
      </GameStateProvider>
    </div>
  );
};
