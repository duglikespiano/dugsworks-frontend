import { Fragment } from 'react';
import './ProfileImage.scss';
import profileImage from '../../../../images/profile-image.jpg';

export default function ProfileImage() {
	return (
		<Fragment>
			<div id="home-profile-image-cropper">
				<img src={profileImage} alt="profile-img" className="home-profile-image" />
			</div>
		</Fragment>
	);
}
