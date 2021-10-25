import PropTypes from "prop-types";
import styles from "../styles/About.module.css";
// import Form from "./Form.js";

function About({ id }) {
	return (
		<div className={styles.aboutPageContainer} id={id}>
			<h1 className={styles.aboutPageHeading}>ABOUT OUR PROJECT</h1>
			<div className={styles.aboutContentContainer}>
				<fieldset className={styles.projectDetailsContainer}>
					<legend className={styles.detailsHeading}>Project Details</legend>
					<p className={styles.projectDetailsText}>
						Welcome to "Who Would Win"! This is a fun web application created by Team Barry, which features the ability for you to vote on your favorite characters from your favorite franchises as they are put up against one another. We currently hold a multitude of default characters from various games and movies, but we allow our dear users to submit characters that they love as well. Once they are submitted, they'll be added to our database of characters, and in due time they'll have their moment to duke it out with another random character of our database, and you can vote on who you think would win! In addition to this, you can also see how other players have voted on particular matchups as well. Don't hesitate and feel free to click the "Play Now" button above to let the action begin! 
					</p>
				</fieldset>

				<fieldset className={styles.teamDetailsContainer}>
					<legend className={styles.detailsHeading}>Meet the Team</legend>
					<p className={styles.teamMember}>
						<strong>Stephen Landaas</strong> - Team Leader, UI Design, HTML,
						CSS, React Setup
					</p>
					<p className={styles.teamMember}>
						<strong>Rebecca Lee</strong> - JavaScript, React Integration, CSS
					</p>
					<p className={styles.teamMember}>
						<strong>Ali Hussain</strong> - HTML, CSS, JavaScript
					</p>
					<p className={styles.teamMember}>
						<strong>Ethan Kamus</strong> - Database Management , Google
						Firestore, JavaScript
					</p>
				</fieldset>
			</div>
		</div>
	);
}

About.propTypes = {
	id: PropTypes.any,
};

export default About;
