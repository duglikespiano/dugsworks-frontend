import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../../../scss/Home/Profile/ProfileText.scss';
import { PiInstagramLogo, PiGithubLogo } from 'react-icons/pi';

export default function ProfileText() {
	return (
		<Fragment>
			<div id="home-profile-texts-icons-box">
				<div className="home-profile-texts-box">
					<h1 className="home-profile-hi">안녕하세요! 저는 </h1>
					<h3 className="home-profile-title">주니어 개발자</h3>
					<h2 className="home-profile-name">박수호입니다</h2>
					<h3 className="home-profile-aim"> - 느리지만 꾸준히🐢</h3>
				</div>

				<div className="home-iconbox">
					<Link to="https://www.instagram.com/piano_dug" target="_blank">
						<PiInstagramLogo className="home-iconbox-icon" />
					</Link>
					<Link to="https://github.com/duglikespiano" target="_blank">
						<PiGithubLogo className="home-iconbox-icon" />
					</Link>
				</div>
			</div>
		</Fragment>
	);
}
