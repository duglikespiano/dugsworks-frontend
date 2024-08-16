import { Fragment } from 'react';
import ProfileImageJa from './ProfileImage';
import ProfileTextJa from './ProfileText';
import styles from './Profile.module.scss';

export default function ProfileJa() {
	return (
		<Fragment>
			<div className={styles['home-profile-ja']}>
				<ProfileImageJa />
				<ProfileTextJa />
			</div>
		</Fragment>
	);
}
