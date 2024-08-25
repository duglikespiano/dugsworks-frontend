import { useContext, Fragment } from 'react';
import { DarkmodeContext } from '../../../../../contexts/DarkmodeContext';
import '../../../../../scss/common/Header/Hamburger/Hamburger.scss';

export default function Hamburger(props: {
	isHamburgerActive: boolean;
	isNavModalActive: boolean;
	hamburgerHandler: () => void;
	navModalHandler: () => void;
}) {
	const { isDarkmode } = useContext(DarkmodeContext);
	let dark = isDarkmode ? 'dark' : '';
	return (
		<Fragment>
			<div
				id="hamburger"
				className={props.isHamburgerActive ? `active ${dark}` : `${dark}`}
				onClick={() => {
					props.hamburgerHandler();
					props.navModalHandler();
				}}
			>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
		</Fragment>
	);
}
