import { Fragment } from 'react';
import ProfileImageJa from './ProfileImageJa';
import ProfileTextJa from './ProfileTextJa';
import styles from './ProfileJa.module.scss';

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
