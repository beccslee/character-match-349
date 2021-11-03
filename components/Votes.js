import styles from "../styles/Votes.module.css";

function Votes({
    characterName1,
    characterName2,
    characterVotes1,
    characterVotes2
}) {
    let totalVotes = characterVotes1 + characterVotes2;
    let char1Ratio = characterVotes1 / totalVotes;
    let char2Ratio = characterVotes2 / totalVotes;

    return (
        <div className={styles.votesContainer}>
            <h2 className={styles.votesHeader}>Current Votes</h2>
            <div className={styles.vote}>
                <h3 className={styles.characterStats}>{characterName1 || ''}: &nbsp;{characterVotes1 || 0} Votes</h3>
            </div>
            <div className={styles.vote}>
                <h3 className={styles.characterStats}>{characterName2 || ''}: &nbsp;{characterVotes2 || 0} Votes</h3>
            </div>
            <div className={styles.characterBar1} style={{ width: `${char1Ratio * 100}%` }}></div>
            <div className={styles.characterBar2} style={{ width: `${char2Ratio * 100}%` }}></div>
        </div>
    );
}

export default Votes;