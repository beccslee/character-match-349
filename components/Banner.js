import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styles from '../styles/Banner.module.css';

const Banner = ({ id }) => {
	const router = useRouter();

	return (
		<div className={styles.bannerArea} id={id}>
			<h1>
				<span className={styles.first}>W</span>ho{' '}
				<span className={styles.first}>w</span>ould{' '}
				<span className={styles.first}>w</span>in?
			</h1>
			<button className={styles.button} onClick={() => router.push('/arena')}>
				PLAY NOW
			</button>
		</div>
	);
};

Banner.propTypes = {
	id: PropTypes.any,
};

export default Banner;
