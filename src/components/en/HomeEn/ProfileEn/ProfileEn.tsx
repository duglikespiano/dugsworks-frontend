import { Fragment } from 'react';
import ProfileImageEn from './ProfileImageEn';
import ProfileTextEn from './ProfileTextEn';
import styles from './ProfileEn.module.scss';

export default function ProfileEn() {
	return (
		<Fragment>
			<div className={styles['home-profile-en']}>
				<ProfileImageEn />
				<ProfileTextEn />
			</div>
		</Fragment>
	);
}
