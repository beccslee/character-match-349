import styles from "../styles/GameCard.module.css";

function GameCard({characterName, imgSrc}) {
	return (
		<div className={styles.gamecardContainer} style={{backgroundImage: `url(${imgSrc})`}}>
			<h1 className={styles.title}>
				<span>{characterName}</span>
			</h1>
			<footer className={styles.bottom}></footer>
		</div>
	);
}

export default GameCard;
