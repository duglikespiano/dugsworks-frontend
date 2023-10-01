import { Fragment } from 'react';
import ProfileImageKo from './ProfileImageKo';
import ProfileTextKo from './ProfileTextKo';
import styles from './ProfileKo.module.scss';

export default function ProfileJa() {
	return (
		<Fragment>
			<div className={styles['home-profile-ko']}>
				<ProfileImageKo />
				<ProfileTextKo />
			</div>
		</Fragment>
	);
}
