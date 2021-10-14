import styles from "../styles/SubmitCharacter.module.css";
import Form from "./Form.js";

function SubmitCharacter() {
    return (
    <div className={styles.submitPageContainer}>
        <h1 className={styles.submitPageHeading}>SUBMIT YOUR FAVORITE CHARACTER!</h1>
        <div className={styles.formContainer}>
            <h3 className={styles.formHeading}>We'll just need a couple of details first...</h3>
            <Form/>
        </div>
        
    </div>
    );
}

export default SubmitCharacter;