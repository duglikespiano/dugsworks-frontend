import { Fragment } from 'react';
import ProfileImageKo from './ProfileImage';
import ProfileTextKo from './ProfileText';
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
