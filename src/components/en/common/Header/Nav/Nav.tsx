import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { menus } from '../../../../../variables/variables';
import '../../../../../scss/common/Header/Nav/Nav.scss';

export default function Nav() {
	const location = useLocation();

	return (
		<Fragment>
			<ul id="nav-links">
				{menus.map((item: string[], i: number) => (
					<Link
						className={location.pathname.split('/')[2] === item[0].toLowerCase() ? 'nav-link-active' : 'nav-link'}
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
