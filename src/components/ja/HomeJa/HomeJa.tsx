import { Fragment } from 'react';
import ProfileImageJa from './ProfileJa/ProfileImageJa';
import ProfileTextJa from './ProfileJa/ProfileTextJa';
import styles from './HomeJa.module.scss';

export default function HomeJa() {
	return (
		<Fragment>
			<div className={styles['home-profile-ja']}>
				<ProfileImageJa />
				<ProfileTextJa />
			</div>
		</Fragment>
	);
}
