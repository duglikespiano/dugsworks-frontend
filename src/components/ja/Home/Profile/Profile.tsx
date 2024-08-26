import { Fragment } from 'react';
import ProfileImage from './ProfileImage';
import ProfileText from './ProfileText';
import '../../../../scss/Home/Profile/Profile.scss';

export default function Profile(props: { isDarkmode: boolean }) {
	return (
		<Fragment>
			<div id="home-profile" className={props.isDarkmode ? 'dark' : ''}>
				<ProfileImage />
				<ProfileText isDarkmode={props.isDarkmode} />
			</div>
		</Fragment>
	);
}
