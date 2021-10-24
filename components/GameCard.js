import styles from "../styles/GameCard.module.css";

function GameCard() {
	return (
		<div className={styles.gamecardContainer}>
			<h1 className={styles.title}>
				<span>THIS IS A TEST SENTENCE yes</span>
			</h1>
			<footer className={styles.bottom}></footer>
		</div>
	);
}

export default GameCard;
