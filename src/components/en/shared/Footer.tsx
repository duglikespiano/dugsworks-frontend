import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.scss';
import { menus } from '../../../variables/variables';

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
						{item[0]}
					</Link>
				))}
			</ul>
		</Fragment>
	);
}
