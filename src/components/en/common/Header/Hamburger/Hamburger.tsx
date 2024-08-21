import { Fragment } from 'react';
import '../../../../../scss/common/Header/Hamburger/Hamburger.scss';

export default function Hamburger(props: {
	isHamburgerActive: boolean;
	isNavModalActive: boolean;
	hamburgerHandler: () => void;
	navModalHandler: () => void;
}) {
	return (
		<Fragment>
			<div
				id="hamburger"
				className={props.isHamburgerActive ? 'active' : ''}
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
