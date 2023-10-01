import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProfileTextJa.module.scss';
import { PiInstagramLogo, PiGithubLogo } from 'react-icons/pi';

export default function ProfileEn() {
	return (
		<Fragment>
			<div className={styles['home-profile-texts-icons-box-ja']}>
				<div className={styles['home-profile-texts-box-ja']}>
					<h1 className={styles['home-profile-hi-ja']}>こんにちは! 私は </h1>
					<h3 className={styles['home-profile-title-ja']}>ジュニア開発者</h3>
					<h2 className={styles['home-profile-name-ja']}>朴 秀浩です</h2>
					<h2 className={styles['home-profile-furigana-ja']}>(パク スホ)</h2>
					<h3 className={styles['home-profile-aim-ja']}> - 遅くでも地道に🐢</h3>
				</div>

				<div className={styles['home-iconbox-ja']}>
					<Link to="https://www.instagram.com/piano_dug">
						<PiInstagramLogo className={styles['home-iconbox-icon-ja']} />
					</Link>
					<Link to="https://github.com/duglikespiano">
						<PiGithubLogo className={styles['home-iconbox-icon-ja']} />{' '}
					</Link>
				</div>
			</div>
		</Fragment>
	);
}
