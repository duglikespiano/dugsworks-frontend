import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProfileText.module.scss';
import { PiInstagramLogo, PiGithubLogo } from 'react-icons/pi';

export default function ProfileTextKo() {
	return (
		<Fragment>
			<div className={styles['home-profile-texts-icons-box-ko']}>
				<div className={styles['home-profile-texts-box-ko']}>
					<h1 className={styles['home-profile-hi-ko']}>안녕하세요! 저는 </h1>
					<h3 className={styles['home-profile-title-ko']}>주니어 개발자</h3>
					<h2 className={styles['home-profile-name-ko']}>박수호입니다</h2>
					<h3 className={styles['home-profile-aim-ko']}> - 느리지만 꾸준히🐢</h3>
				</div>

				<div className={styles['home-iconbox-ko']}>
					<Link to="https://www.instagram.com/piano_dug" target="_blank">
						<PiInstagramLogo className={styles['home-iconbox-icon-ko']} />
					</Link>
					<Link to="https://github.com/duglikespiano" target="_blank">
						<PiGithubLogo className={styles['home-iconbox-icon-ko']} />
					</Link>
				</div>
			</div>
		</Fragment>
	);
}
