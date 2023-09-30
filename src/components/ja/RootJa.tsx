import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderJa from './shared/HeaderJa';
import FooterJa from './shared/FooterJa';

export default function MainJa() {
	return (
		<Fragment>
			<HeaderJa />
			<Outlet />
			<FooterJa />
		</Fragment>
	);
}
