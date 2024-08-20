import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../../../scss/Home/Profile/ProfileText.scss';
import { PiInstagramLogo, PiGithubLogo } from 'react-icons/pi';

export default function ProfileText() {
	return (
		<Fragment>
			<div id="home-profile-texts-icons-box">
				<div className="home-profile-texts-box">
					<p className="home-profile-hi">こんにちは! 私は </p>
					<p className="home-profile-title ja">ジュニア開発者</p>
					<p className="home-profile-name ja">朴 秀浩です</p>
					<p className="home-profile-furigana">(パク スホ)</p>
					<p className="home-profile-aim"> - 遅くても地道に🐢</p>
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
