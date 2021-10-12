import styles from "../styles/Submit.module.css";

function Submit() {
    return (
    <div className={styles.submitContainer}>
        <h1>SUBMIT YOUR FAVORITE CHARACTER!</h1>
        <div className={styles.formContainer}>
            <h3>We'll just need a couple of details first...</h3>
        </div>
    </div>
    );
}

export default Submit;