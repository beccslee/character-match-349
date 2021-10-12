import Image from "next/image";
import Nav from "../components/Nav";
import Head from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Nav />
      <Head />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero unde
        eos consectetur a. Corrupti eius aliquid inventore qui autem.
        Perferendis velit laborum praesentium, voluptas deserunt explicabo
        voluptatibus voluptatem minima vitae laudantium, iusto doloremque
        corporis culpa quibusdam quaerat ratione! Quod exercitationem iure
        rerum.
      </p>
    </div>
  );
}
