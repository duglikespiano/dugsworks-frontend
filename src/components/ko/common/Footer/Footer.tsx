import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { menus } from '../../../../variables/variables';
import '../../../../scss/common/Footer/Footer.scss';

export default function Footer() {
	const location = useLocation();

	return (
		<Fragment>
			<ul id="footer-links-box">
				{menus.map((item: string[], i: number) => (
					<Link
						className={location.pathname.split('/')[2] === item[0].toLowerCase() ? 'footer-link-active' : 'footer-link'}
						to={item[0].toLowerCase()}
						key={i}
					>
						{item[1]}
					</Link>
				))}
			</ul>
		</Fragment>
	);
}
