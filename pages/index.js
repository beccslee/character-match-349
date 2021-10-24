import React, { useRef } from 'react';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import SubmitCharacter from '../components/SubmitCharacter';
import About from '../components/About';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
	// Create forward references to each section so NavBar can refer
	const playRef = useRef();
	const submitRef = useRef();
	const aboutRef = useRef();

	const menuRefs = [
		{
			sectionID: 'play',
			sectionRef: playRef,
			sectionTitle: 'PLAY NOW',
		},
		{
			sectionID: 'submit',
			sectionRef: submitRef,
			sectionTitle: 'SUBMIT A CHARACTER',
		},
		{
			sectionID: 'about',
			sectionRef: aboutRef,
			sectionTitle: 'ABOUT',
		},
	];

	return (
		<div className={styles.contentContainer}>
			<Nav menuRefs={menuRefs} />
			<div className="section" id="play" ref={playRef}>
				<Banner />
			</div>
			<div className="section" id="submit" ref={submitRef}>
				<SubmitCharacter />
			</div>
			<div className="section" id="about" ref={aboutRef}>
				<About />
			</div>
			<Footer />
		</div>
	);
}
