import styles from "../styles/GameCard.module.css";

function GameCard({ characterName, imgSrc }) {
	return (
		<div className={styles.flexGame}>
			<div className={styles.nameArea} style={{fontSize: `${(characterName.length > 8) ? '1.2rem' : '1.5rem'}`}}>
				<h1>{characterName}</h1>
			</div>
			<div
				className={styles.gamecardContainer}
				style={{ backgroundImage: `url(${imgSrc})` }}
			>
				<h1 className={styles.title}></h1>
				<footer className={styles.bottom}></footer>
			</div>
		</div>
	);
}

export default GameCard;
