import { Fragment } from 'react';
import ProfileImageEn from './ProfileImage';
import ProfileTextEn from './ProfileText';
import '../../../../scss/Home/Profile/Profile.scss';

export default function Profile() {
	return (
		<Fragment>
			<div id="home-profile">
				<ProfileImageEn />
				<ProfileTextEn />
			</div>
		</Fragment>
	);
}
