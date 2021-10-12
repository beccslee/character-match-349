import Head from 'next/head'
import Image from 'next/image'
import Nav from "../components/Nav"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav/>
      <header>Testing123</header>
    </div>
  )
}