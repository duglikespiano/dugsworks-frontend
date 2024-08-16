import { Fragment } from 'react';
import styles from './ProfileImage.module.scss';
import profileImage from '../../../../images/profile-image.jpg';

export default function ProfileImageKo() {
	return (
		<Fragment>
			<div className={styles['home-profile-image-cropper-ko']}>
				<img src={profileImage} alt="profile-img" className={styles['home-profile-image-ko']} />
			</div>
		</Fragment>
	);
}
