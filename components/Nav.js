import styles from "../styles/Nav.module.css";

function Nav() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <a href="#">PLAY NOW</a>
          <a href="#">SUBMIT A CHARACTER</a>
          <a href="#">ABOUT</a>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
