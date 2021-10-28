import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { collection, getDocs, setDoc } from 'firebase/firestore';
import db from '../firebase.config';
import styles from "../styles/arena.module.css";
import GameCard from "../components/GameCard";
import Votes from "../components/Votes";
import "../node_modules/font-awesome/css/font-awesome.min.css";

// const charactersRef = collection(db, "characters");

export default function Arena() {
	const router = useRouter();
	const [character1, setCharacter1] = useState('');
	const [character2, setCharacter2] = useState('');
	const [character1Votes, setCharacter1Votes] = useState(null);
	const [character2Votes, setCharacter2Votes] = useState(null);
	const [charactersCollection, setCharactersCollection] = useState([]);

	const generateRandomCharacters = () => Math.floor(Math.random() * charactersCollection.length);

	useEffect(() => {
		let characters = [];
		const fetchCollection = async() => {
			try {
				await getDocs(collection(db, "characters")).then(snapshot => {
					snapshot.docs.forEach(doc => {
						let id = doc.id;
						let data = {...doc.data(), ['id']: id };
						characters.push(data);
					});
				});
				setCharactersCollection([...characters]);

			} catch(err) {
				// eslint-disable-next-line no-console
				console.error(err);
			}
		};

		fetchCollection();
	}, []);

	// console.log('firestore db ', charactersRef);

	return (
		<div className={styles.arenaContainer}>
			<div className={styles.headingContainer}>
				<button
					className={styles.backButton}
					onClick={() => router.push("/")}
				>
					<i className="fa fa-arrow-left"></i>
				</button>
				<h1 className={styles.arenaHeader}>
					A<span className={styles.letter1}>R</span>EN
					<span className={styles.letter2}>A</span>
				</h1>
			</div>
			<div></div>
			<div className={styles.GameCards}>
				<GameCard
					characterName="Mario"
					imgSrc="../images/Mario.png"
				/>
				<Votes characterName1="Mario" characterName2="Sonic" voted="1"/>
				<GameCard
					characterName="Sonic"
					imgSrc="../images/Sonic.png"
				/>
			</div>
		</div>
	);
}
