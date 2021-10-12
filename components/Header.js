import styles from "../styles/Header.module.css";

function Head() {
  return (
    <div className={styles.bannerArea}>
      <h1>
        <span className={styles.first}>W</span>ho{" "}
        <span className={styles.first}>w</span>ould{" "}
        <span className={styles.first}>w</span>in?
      </h1>
      <button className={styles.button}>PLAY NOW</button>
    </div>
  );
}

export default Head;
