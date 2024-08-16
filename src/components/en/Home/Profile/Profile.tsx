import { Fragment } from 'react';
import ProfileImageEn from './ProfileImage';
import ProfileTextEn from './ProfileText';
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
