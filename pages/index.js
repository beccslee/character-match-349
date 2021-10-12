import Image from "next/image";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Submit from "../components/Submit";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.contentContainer}>
      <Nav />
      <Banner/>
      <Submit/>
    </div>
  );
}
