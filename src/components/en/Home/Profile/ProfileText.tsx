import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './ProfileText.scss';
import { PiInstagramLogo, PiGithubLogo } from 'react-icons/pi';

export default function ProfileText() {
	return (
		<Fragment>
			<div id="home-profile-texts-icons-box">
				<div className="home-profile-texts-box">
					<h1 className="home-profile-hi">Hello! I am </h1>
					<h2 className="home-profile-name">Suho Park</h2>
					<h3 className="home-profile-title">A junior web developer</h3>
					<h3 className="home-profile-aim"> - slowly but steadily🐢</h3>
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
