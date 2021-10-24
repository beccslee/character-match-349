import PropTypes from "prop-types";
import styles from "../styles/SubmitCharacter.module.css";
import Form from "./Form.js";

function SubmitCharacter({ id }) {
	return (
		<div className={styles.submitPageContainer} id={id}>
			<h1 className={styles.submitPageHeading}>
				SUBMIT YOUR FAVORITE CHARACTER!
			</h1>
			<fieldset className={styles.formContainer}>
				<legend className={styles.formHeading}>
					We'll just need a few details first
				</legend>
				<Form />
			</fieldset>
		</div>
	);
}

SubmitCharacter.propTypes = {
	id: PropTypes.any,
};

export default SubmitCharacter;
