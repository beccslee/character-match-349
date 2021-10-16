import styles from "../styles/Nav.module.css";

function Nav() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <a href="#play">PLAY NOW</a>
          <a href="#submit">SUBMIT A CHARACTER</a>
          <a href="#about">ABOUT</a>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
