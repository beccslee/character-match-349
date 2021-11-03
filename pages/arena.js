import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { collection, getDocs, setDoc } from 'firebase/firestore';
import db from '../firebase.config';
import styles from "../styles/arena.module.css";
import GameCard from "../components/GameCard";
import Votes from "../components/Votes";
import "../node_modules/font-awesome/css/font-awesome.min.css";

let character1;
let character2;
let match;

export default function Arena() {
	const router = useRouter();
	const [didClickNextMatch, setDidClickNextMatch] = useState(false);
	const [charactersCollection, setCharactersCollection] = useState([]);
	const [matchesCollection, setMatchesCollection] = useState([]);
	const [generateOnMount, setGenerateOnMount] = useState(false);

	const generateRandomCharacters = () => Math.floor(Math.random() * charactersCollection.length);

	const generateMatch = () => {
		let char1;
		let char2;
		char1 = generateRandomCharacters();
		char2 = generateRandomCharacters();
		while (char1 === char2) {
			// Regenerate a player if same
			char2 = generateRandomCharacters();
		}
		character1 = charactersCollection[char1];
		character2 = charactersCollection[char2];

		matchesCollection.forEach(doc => {
			if ((doc.name1 === character1.name || doc.name1 === character2.name) &&
			(doc.name2 === character1.name || doc.name2 === character2.name)) {
				match = doc;
			} else {
				// Add logic for sending this new match information up to firestore
				match = {
					'id1': character1?.id,
					'id2': character2?.id,
					'name1': character1?.name,
					'name2': character2?.name,
					'votes1': 0,
					'votes2': 0,
				};
			}
		});
	};

	useEffect(() => {
		let characters = [];
		let matches = [];
		const fetchCollection = async() => {
			try {
				await getDocs(collection(db, "characters")).then(snapshot => {
					snapshot.docs.forEach(doc => {
						let id = doc.id;
						let data = {...doc.data(), ['id']: id };
						characters.push(data);
					});
				});
				
				await getDocs(collection(db, 'matches')).then(snapshot => {
					snapshot.docs.forEach(doc => {
						const matchData = {...doc.data(), ['matchId']: doc.id };
						matches.push(matchData);
					});
				});

				setCharactersCollection([...characters]);
				setMatchesCollection([...matches]);
			} catch(err) {
				// eslint-disable-next-line no-console
				console.error(err);
			}
		};
		
		console.log('didClickNextMatch:',didClickNextMatch);
		if (didClickNextMatch) {
			document.addEventListener('click', generateMatch);
			setDidClickNextMatch(false);
			return () => {
				document.removeEventListener('click', generateMatch);
			};
		} else {
			document.removeEventListener('click', generateMatch);
		}

		fetchCollection();
	}, [didClickNextMatch]);

	// possibly useRef for matches variable to keep track of current match up information and reduce re-renders
	if (charactersCollection.length > 0 && matchesCollection.length > 0 && (didClickNextMatch || !generateOnMount)) {
		if(!generateOnMount) {
			setGenerateOnMount(true);
		}
		generateMatch();
	}

	const buttonHandler = () => {
		setDidClickNextMatch(true);
	};

	console.log('RENDERRRRRRR ---------------------');

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
					characterName={`${character1?.name}`}
					imgSrc={`${character1?.image}`}
				/>
				<Votes
					characterName1={`${match?.name1}`}
					characterName2={`${match?.name2}`}
					characterVotes1={`${match?.votes1}`}
					characterVotes2={`${match?.votes2}`}
					voted="1"
				/>
				<div>
					<button className={styles.nextMatch} onClick={buttonHandler}>Next Match</button>
				</div>
				<GameCard
					characterName={`${character2?.name}`}
					imgSrc={`${character2?.image}`}
				/>
			</div>
		</div>
	); //end of return
} // end of arena
