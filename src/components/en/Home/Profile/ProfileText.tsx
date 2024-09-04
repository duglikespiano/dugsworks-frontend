import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../../../scss/Home/Profile/ProfileText.scss';
import { PiInstagramLogo, PiGithubLogo } from 'react-icons/pi';

export default function ProfileText(props: { isDarkmode: boolean }) {
	return (
		<Fragment>
			<div id="home-profile-texts-icons-box" className={props.isDarkmode ? 'dark' : ''}>
				<div className="home-profile-texts-box">
					<p className="home-profile-hi">Hello! I am </p>
					<p className="home-profile-name en">Suho Park</p>
					<p className="home-profile-title en">Web developer</p>
					<p className="home-profile-aim"> - slowly but steadily🐢</p>
				</div>

				<div className="home-iconbox">
					<Link to="https://www.instagram.com/piano_dug" target="_blank">
						<PiInstagramLogo className="home-iconbox-icon" />
					</Link>
					<Link to="https://github.com/duglikespiano" target="_blank">
						<PiGithubLogo className="home-iconbox-icon" />{' '}
					</Link>
				</div>
			</div>
		</Fragment>
	);
}
