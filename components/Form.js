import styles from "../styles/Form.module.css";

function Form() {
  return (
    <div className={styles.formContainer}>
        <form className={styles.form}>
            <label htmlFor="characterName" className={styles.formLabel}>Character Name</label>
            <input type="text" id="characterName" name="characterName" className={styles.characterNameInput} placeholder="E.g. James T. Kirk" size="30" maxlength="40"/>
            <br/>
            <label className={styles.formLabel}>Upload an image of your character</label>
        </form>
    </div>
  );
}

export default Form;