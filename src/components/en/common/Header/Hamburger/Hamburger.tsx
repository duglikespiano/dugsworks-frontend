import { Fragment, useState } from 'react';
import '../../../../../scss/common/Header/Hamburger/Hamburger.scss';

export default function Hamburger() {
	const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
	const isHamburgerOpenHanlder = () => {
		setIsHamburgerOpen(!isHamburgerOpen);
	};

	return (
		<Fragment>
			<div id="hamburger" className={isHamburgerOpen ? 'active' : ''} onClick={isHamburgerOpenHanlder}>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
		</Fragment>
	);
}
