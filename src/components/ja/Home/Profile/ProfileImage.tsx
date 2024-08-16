import { Fragment } from 'react';
import styles from './ProfileImageJa.module.scss';
import profileImage from '../../../../images/profile-image.jpg';

export default function ProfileImageJa() {
	return (
		<Fragment>
			<div className={styles['home-profile-image-cropper-ja']}>
				<img src={profileImage} alt="profile-img" className={styles['home-profile-image-ja']} />
			</div>
		</Fragment>
	);
}
