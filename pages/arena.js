import styles from "../styles/arena.module.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import GameCard from "../components/GameCard";

export default function Home() {
  return (
    <div className={styles.arenaContainer}>
      <div className={styles.headingContainer}>
        <button className={styles.backButton}>
          <i class="fa fa-arrow-left"></i>
        </button>
        <h1 className={styles.arenaHeader}>
          A<span className={styles.letter1}>R</span>EN
          <span className={styles.letter2}>A</span>
        </h1>
      </div>
    </div>
  );
}
