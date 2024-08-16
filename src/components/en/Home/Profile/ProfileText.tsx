import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProfileText.module.scss';
import { PiInstagramLogo, PiGithubLogo } from 'react-icons/pi';

export default function ProfileTextEn() {
	return (
		<Fragment>
			<div className={styles['home-profile-texts-icons-box-en']}>
				<div className={styles['home-profile-texts-box-en']}>
					<h1 className={styles['home-profile-hi-en']}>Hello! I am </h1>
					<h2 className={styles['home-profile-name-en']}>Suho Park</h2>
					<h3 className={styles['home-profile-title-en']}>A junior web developer</h3>
					<h3 className={styles['home-profile-aim-en']}> - slowly but steadily🐢</h3>
				</div>

				<div className={styles['home-iconbox-en']}>
					<Link to="https://www.instagram.com/piano_dug" target="_blank">
						<PiInstagramLogo className={styles['home-iconbox-icon-en']} />
					</Link>
					<Link to="https://github.com/duglikespiano" target="_blank">
						<PiGithubLogo className={styles['home-iconbox-icon-en']} />{' '}
					</Link>
				</div>
			</div>
		</Fragment>
	);
}
