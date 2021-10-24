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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
						gravida urna quis ligula consectetur mattis. Duis ornare placerat
						dignissim. Aliquam a scelerisque nibh. Praesent tortor nunc, viverra
						dapibus augue eget, lobortis sodales erat. Praesent tincidunt metus
						sed purus tincidunt, sit amet facilisis magna vulputate. Suspendisse
						lacinia, arcu quis vulputate lacinia, erat massa bibendum lorem, nec
						varius ante nibh non turpis. Ut magna ligula, imperdiet et
						tincidunt. Praesent tincidunt metus sed purus tincidunt, sit amet
						facilisis magna vulputate. Aliquam a scelerisque nibh. Praesent
						tortor nunc, viverra dapibus augue eget, lobortis sodales erat
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
