import styles from "../styles/Footer.module.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

function Footer() {
	return (
		<div className={styles.footer}>
			<div id={styles.button}>
				<a href="#play">
					<i className="fa fa-arrow-circle-up fa-4x"></i>
				</a>
			</div>
			<div className={styles.footerText}>
				Team Barry | CPSC 349 - Section 01 | Fall Semester, 2021
				<div className={styles.footerText2}>
					All characters presented are not property of our team, and they all
					belong to their respective franchises. Their use is for entertainment
					& educational purposes only.
				</div>
			</div>
		</div>
	);
}

export default Footer;
