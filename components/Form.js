import styles from "../styles/Form.module.css";
import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.imgInputRef = React.createRef();
		this.state = {
			imgWidth: 0,
			imgHeight: 0,
			validUrl: false,
			imgUrl: "",
		};
	}
	
	loadImg() {
		let img = new Image();
		img.addEventListener("load", function() {
			this.imgWidth = img.naturalWidth;
			this.imgHeight = img.naturalHeight;
		}.bind(this));
		img.src = this.imgUrl;
	}

	dimsValid() {
		if ((this.imgWidth < 250) || (this.imgWidth > 900) || (this.imgHeight < 400) || (this.imgHeight > 720)) {
			return false;
		}
		return true;
	}

	render() {
		return (
			<div className={styles.formContainer}>
				<form className={styles.form} ref={this.formRef} onSubmit = {(e) => {
					if (this.dimsValid()) {
						console.log("Image valid!");
						// Do firestore stuff here
					}
					else {
						e.preventDefault();
						alert("Dimensions invalid! Please keep dimensions between 250 x 400 and 900x720!");
					}
				}}>
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
						autoComplete={"off"}
						required
					/>
					<br />
					<label htmlFor="characterFranchise" className={styles.formLabel}>
						Character Franchise
					</label>
					<input
						type="text"
						id="characterFranchise"
						name="characterFranchise"
						className={styles.boxInput}
						placeholder="E.g. Star Trek"
						size="30"
						maxLength="40"
						autoComplete={"off"}
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
						autoComplete={"off"}
						ref={this.imgInputRef}
						onChange={() => {
							if (this.imgInputRef.current.value.match("^https?://(?:[a-z0-9-]+.)+[a-z]{2,6}(?:/[^/#?]+)+.(?:jpg|jpeg|png)$") !== null) {
								this.imgUrl = this.imgInputRef.current.value;
								this.loadImg();
								
							}
						}}

						required
					/>
					<br/>
					<br/>
					<input
						type="submit"
						value="SUBMIT YOUR CHARACTER"
						className={styles.characterSubmitButton}
					/>
				</form>
			</div>
		);
	}
}

export default Form;
