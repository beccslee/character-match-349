import styles from "../styles/About.module.css";
import Form from "./Form.js";

function About({id}) {
    return (
        <div className={styles.aboutPageContainer} id={id}>
            <h1 className={styles.aboutPageHeading}>ABOUT OUR PROJECT</h1>
            <div className={styles.aboutContentContainer}>
                <fieldset className={styles.projectDetailsContainer}>
                    <legend className={styles.detailsHeading}>Project Details</legend>
                    <p className={styles.projectDetailsText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida urna quis ligula consectetur mattis. Duis ornare placerat dignissim. Aliquam a scelerisque nibh. Praesent tortor nunc, viverra dapibus augue eget, lobortis sodales erat. Praesent tincidunt metus sed purus tincidunt, sit amet facilisis magna vulputate. Suspendisse lacinia, arcu quis vulputate lacinia, erat massa bibendum lorem, nec varius ante nibh non turpis. Ut magna ligula, imperdiet et tincidunt. Praesent tincidunt metus sed purus tincidunt, sit amet facilisis magna vulputate. Aliquam a scelerisque nibh. Praesent tortor nunc, viverra dapibus augue eget, lobortis sodales erat</p>
                </fieldset>
                
                <fieldset className={styles.teamDetailsContainer}>
                    <legend className={styles.detailsHeading}>Meet the Team</legend>
                    <ul className={styles.teamList}>
                        <li className={styles.teamMember}><h4 className={styles.teamMemberName}>Stephen Landaas</h4><p className={styles.teamMemberDesc}>Team Leader, UI Design, HTML, CSS, React Components</p></li>
                        <li className={styles.teamMember}><h4 className={styles.teamMemberName}>Rebecca Lee</h4><p className={styles.teamMemberDesc}>General Project Management, JavaScript, React Integration</p></li>
                        <li className={styles.teamMember}><h4 className={styles.teamMemberName}>Ali Hussain</h4><p className={styles.teamMemberDesc}>UI Design, HTML, CSS</p></li>
                        <li className={styles.teamMember}><h4 className={styles.teamMemberName}>Ethan Kamus</h4><p className={styles.teamMemberDesc}>General Database Management, Google Firestore</p></li>
                    </ul>
                </fieldset>
            </div>
        </div>
    );
}

export default About;