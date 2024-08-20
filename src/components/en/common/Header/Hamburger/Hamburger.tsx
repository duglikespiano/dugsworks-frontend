import { Fragment, useState } from 'react';
import '../../../../../scss/common/Header/Hamburger/Hamburger.scss';

export default function Hamburger(props: { isOpen: boolean }) {
	const [isHamburgerOpen, setIsHamburgerOpen] = useState(props.isOpen);
	const isHamburgerOpenHanlder = () => {
		setIsHamburgerOpen(!props.isOpen);
	};

	return (
		<Fragment>
			<div id="hamburger" className={props.isOpen ? 'active' : ''}>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
		</Fragment>
	);
}
