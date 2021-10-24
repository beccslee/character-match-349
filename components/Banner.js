import { useRouter } from "next/router";
import styles from "../styles/Banner.module.css";

function Banner({id}) {
  const router = useRouter();

  return (
    <div className={styles.bannerArea} id={id}>
      <h1>
        <span className={styles.first}>W</span>ho{" "}
        <span className={styles.first}>w</span>ould{" "}
        <span className={styles.first}>w</span>in?
      </h1>
      <button
        className={styles.button}
        onClick={() => router.push('/arena')}
      >
        PLAY NOW
      </button>
    </div>
  );
}

export default Banner;