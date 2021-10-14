import styles from "../styles/Form.module.css";

function Form() {
  const update = () => {
    let filePath = document.getElementById("characterImg").files[0].name; 
    document.getElementById("fileSelected").textContent = filePath;
  }

  return (
    <div className={styles.formContainer}>
        <form className={styles.form}>
            <label htmlFor="characterName" className={styles.formLabel}>Character Name</label>
            <input type="text" id="characterName" name="characterName" className={styles.characterNameInput} placeholder="E.g. James T. Kirk" size="30" maxLength="40" required/>
            <br/>
            <label className={styles.formLabel}>Upload an image of your character</label>
            <label htmlFor="characterImg" className={styles.specialLabel} required>Upload a file</label>
            <input type="file" id="characterImg" name="characterImg" accept="image/*" className={styles.imgSub} onChange={update} required/>
            <span id="fileSelected" className={styles.selectedFile}>&nbsp;</span>
            <br/>
            <input type="submit" value="SUBMIT YOUR CHARACTER" className={styles.characterSubmitButton}/>
        </form>
    </div>
  );
}

export default Form;