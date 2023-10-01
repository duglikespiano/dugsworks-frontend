import { Fragment } from 'react';
import styles from './ProfileImageEn.module.scss';
import profileImage from '../../../../images/profile-image.jpg';

export default function ProfileImageEn() {
	return (
		<Fragment>
			<div className={styles['home-profile-image-cropper-en']}>
				<img src={profileImage} alt="profile-img" className={styles['home-profile-image-en']} />
			</div>
		</Fragment>
	);
}
