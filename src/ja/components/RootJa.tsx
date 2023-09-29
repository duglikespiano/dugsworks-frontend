import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import HeaderJa from './HeaderJa';
import NavJa from './NavJa';
import FooterJa from './FooterJa';

export default function MainJa() {
	return (
		<Fragment>
			<HeaderJa />
			<NavJa />
			<Outlet />
			<FooterJa />
		</Fragment>
	);
}
