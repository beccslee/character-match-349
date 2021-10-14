import Image from "next/image";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import SubmitCharacter from "../components/SubmitCharacter";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.contentContainer}>
      <Nav/>
      <Banner/>
      <SubmitCharacter/>
    </div>
  );
}
