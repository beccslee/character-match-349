/* eslint-disable no-console */
import styles from "../styles/Form.module.css";
import React from 'react';
import { collection, addDoc } from "firebase/firestore";
import db from '../firebase.config.js';

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.imgInputRef = React.createRef();
		this.charnameInputRef = React.createRef();
		this.charfranchInputRef = React.createRef();
		this.dbRef = collection(db, "characters");

		this.state = {
			imgWidth: 0,
			imgHeight: 0,
			validUrl: false,
			imgUrl: "",
			charname: "",
			charfranch: ""
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
		console.log(this.imgWidth);
		console.log(this.imgHeight);
		if ((this.imgWidth < 250) || (this.imgWidth > 1000) || (this.imgHeight < 250) || (this.imgHeight > 1000)) {
			return false;
		}
		return true;
	}

	async sendToFirestore() {
		await addDoc(this.dbRef, {
			name: this.charname,
			franchise: this.charfranch,
			image: this.imgUrl
		});
	}

	render() {
		return (
			<div className={styles.formContainer}>
				<form className={styles.form} ref={this.formRef} onSubmit = {(e) => {
					console.log(this.dimsValid());
					if (this.dimsValid()) {
						// e.preventDefault();
						console.log("Image valid!");
						this.sendToFirestore(); //send character info to firestore
					}
					else {
						e.preventDefault();
						alert("Dimensions invalid! Please keep dimensions between 250 x 250 and 1000x1000!");
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
						ref={this.charnameInputRef}
						onChange={() => {
							// store character name
							this.charname = this.charnameInputRef.current.value;
						}}
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
						ref={this.charfranchInputRef}
						onChange={() => {
							//store character franchise
							this.charfranch = this.charfranchInputRef.current.value;
						}}
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
