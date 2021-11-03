import styles from "../styles/Votes.module.css";

function Votes({
    characterName1,
    characterName2,
    characterVotes1,
    characterVotes2
}) {
    let totalVotes = parseInt(characterVotes1, 10) + parseInt(characterVotes2, 10);
    let char1Ratio = 0;
    let char2Ratio = 0;
    
    if (totalVotes !== 0) {
        char1Ratio = parseInt(characterVotes1, 10) / totalVotes;
        char2Ratio = parseInt(characterVotes2, 10) / totalVotes;
    }

    return (
        <div className={styles.votesContainer}>
            <h2 className={styles.votesHeader}>Current Votes</h2>
            <div className={styles.vote}>
                <h3 className={styles.characterStats}>{characterName1 || ''}: &nbsp;{characterVotes1 || 0} Votes</h3>
            </div>
            <div className={styles.vote}>
                <h3 className={styles.characterStats}>{characterName2 || ''}: &nbsp;{characterVotes2 || 0} Votes</h3>
            </div>
            <div className={styles.barsContainer}>
                <div className={styles.characterBar1} style={{ width: `${char1Ratio * 100}%` }}></div>
                <div className={styles.characterBar2} style={{ width: `${char2Ratio * 100}%` }}></div>
            </div>
        </div>
    );
}

export default Votes;