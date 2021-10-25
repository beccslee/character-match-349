import styles from "../styles/Form.module.css";

function Form() {
	/* Dimensions validation (WIP)
	const checkDimensions = () => {
		let url = document.getElementById("characterImg").value;
		let imgWidth = 0;
		let imgHeight = 0;
		const img = new Image();
    	img.addEventListener("load", function() {
			imgWidth = this.naturalWidth;
			imgHeight = this.naturalHeight;
    	});
    	img.src = url;

		if ((imgWidth < 250) || (imgWidth > 900) || (imgHeight < 400) || (imgHeight > 720)) {
			alert(imgWidth);
			alert(imgHeight);
		}
	};
	*/

	return (
		<div className={styles.formContainer}>
			<form className={styles.form}>
				<label htmlFor="characterName" className={styles.formLabel}>
					Character Name
				</label>
				<input
					type="text"
					id="characterName"
					name="characterName"
					className={styles.boxInput}
					placeholder="E.g. James T. Kirk"
					size="30"
					maxLength="40"
					required
				/>
				<br />
				<label htmlFor="characterImg" className={styles.formLabel}>
					Enter an image URL of your character
				</label>
				<input
					type="url"
					id="characterImg"
					name="characterImg"
					pattern="^https?://(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:/[^/#?]+)+\.(?:jpg|jpeg|png)$"
					placeholder="E.g. https://i.imgur.com/epMSRQH.png"
					title="Please enter image URLs ending in .jpg, .jpeg, or .png"
					className={styles.boxInput}
					required
				/>
				<br/>
				<br/>
				<input
					type="submit"
					value="SUBMIT YOUR CHARACTER"
					className={styles.characterSubmitButton}
					// onSubmit={checkDimensions}
				/>
			</form>
		</div>
	);
}

export default Form;
