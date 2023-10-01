import { Fragment } from 'react';
import ProfileImageEn from './ProfileEn/ProfileImageEn';
import ProfileTextEn from './ProfileEn/ProfileTextEn';
import styles from './HomeEn.module.scss';

export default function HomeEn() {
	return (
		<Fragment>
			<div className={styles['home-profile-en']}>
				<ProfileImageEn />
				<ProfileTextEn />
			</div>
		</Fragment>
	);
}
