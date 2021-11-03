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
						Welcome to "Who Would Win"! This is a fun application where you can see your wildest character brawl scenarios come to life! Got a favorite movie, video game, TV show, or novel character in mind? Submit them to our database and have them enter the arena. Want to see what we have to offer? Feel free to click the "Play Now" button and participate in the action. In our game room you'll be able to see randomly-generated matchups of characters from your favorite franchises. There, you can vote on who you think would win in an epic (or even hysterical) battle of the ages! Cast your vote and see how others have voted too, and have a great time!
					</p>
				</fieldset>

				<fieldset className={styles.teamDetailsContainer}>
					<legend className={styles.detailsHeading}>Meet the Team</legend>
					<p className={styles.teamMember}>
						<strong>Stephen Landaas</strong> - Team Leader, UI Design, HTML,
						CSS, React
					</p>
					<p className={styles.teamMember}>
						<strong>Rebecca Lee</strong> - JavaScript, React, CSS
					</p>
					<p className={styles.teamMember}>
						<strong>Ali Hussain</strong> - HTML, CSS
					</p>
					<p className={styles.teamMember}>
						<strong>Ethan Kamus</strong> - Database Management , Google
						Firestore, React, JavaScript
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
