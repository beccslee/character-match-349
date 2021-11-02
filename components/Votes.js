import styles from "../styles/Votes.module.css";

function Votes({characterName1, characterName2, voted}) {
    let char1Votes = 14;
    let char2Votes = 52;
    let totalVotes = char1Votes + char2Votes;
    let char1Ratio = char1Votes / totalVotes;
    let char2Ratio = char2Votes / totalVotes;

	return (
        <div className={styles.votesContainer} style={{display: `${voted === "1" ? "flex" : "none"}`}}>
            <h2 className={styles.votesHeader}>Current Votes</h2>
            <div className={styles.vote}>
                <h3 className={styles.characterStats}>{characterName1}: &nbsp;{char1Votes} Votes</h3>
            </div>
            <div className={styles.vote}>
                <h3 className={styles.characterStats}>{characterName2}: &nbsp;{char2Votes} Votes</h3>
            </div>
            <div className={styles.characterBar1} style={{width: `${char1Ratio * 100}%`}}></div>
            <div className={styles.characterBar2} style={{width: `${char2Ratio * 100}%`}}></div>
            {/* <button className={styles.nextMatch}>Next Match</button> */}
        </div>
	);
}

export default Votes;