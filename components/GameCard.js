import styles from "../styles/GameCard.module.css";

function GameCard({characterName, imgSrc}) {
	return (
		<div className={styles.gamecardContainer} style={{backgroundImage: `url(${imgSrc})`}}>
			<h1 className={styles.title} style={{fontSize: `${characterName.length > 10 ? "calc(0.15rem + 3vw)" : "calc(1rem + 3vw)"}`}}>
				<span>{characterName}</span>
			</h1>
			<footer className={styles.bottom}></footer>
		</div>
	);
}

export default GameCard;
