import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import HeaderJa from './shared/HeaderJa';
import NavJa from './shared/NavJa/NavJa';
import FooterJa from './shared/FooterJa';

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
