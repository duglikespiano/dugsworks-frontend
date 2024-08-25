import { useContext, Fragment } from 'react';
import ProfileImage from './ProfileImage';
import ProfileText from './ProfileText';
import { DarkmodeContext } from '../../../../contexts/DarkmodeContext';
import '../../../../scss/Home/Profile/Profile.scss';

export default function Profile() {
	const { isDarkmode } = useContext(DarkmodeContext);
	return (
		<Fragment>
			<div id="home-profile" className={isDarkmode ? 'dark' : ''}>
				<ProfileImage />
				<ProfileText />
			</div>
		</Fragment>
	);
}
