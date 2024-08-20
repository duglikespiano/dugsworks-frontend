import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../../../scss/Home/Profile/ProfileText.scss';
import { PiInstagramLogo, PiGithubLogo } from 'react-icons/pi';

export default function ProfileText() {
	return (
		<Fragment>
			<div id="home-profile-texts-icons-box">
				<div className="home-profile-texts-box">
					<p className="home-profile-hi">안녕하세요! 저는 </p>
					<p className="home-profile-title ko">주니어 개발자</p>
					<p className="home-profile-name ko">박수호입니다</p>
					<p className="home-profile-aim"> - 느리지만 꾸준히🐢</p>
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
