import { Fragment } from 'react';
import ProfileImage from './ProfileImage';
import ProfileText from './ProfileText';
import '../../../../scss/Home/Profile/Profile.scss';

export default function Profile() {
	return (
		<Fragment>
			<div id="home-profile">
				<ProfileImage />
				<ProfileText />
			</div>
		</Fragment>
	);
}
