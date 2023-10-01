import { Fragment } from 'react';
import ProfileImageKo from './ProfileKo/ProfileImageKo';
import ProfileTextKo from './ProfileKo/ProfileTextKo';
import styles from './HomeKo.module.scss';

export default function HomeKo() {
	return (
		<Fragment>
			<div className={styles['home-profile-ko']}>
				<ProfileImageKo />
				<ProfileTextKo />
			</div>
		</Fragment>
	);
}
