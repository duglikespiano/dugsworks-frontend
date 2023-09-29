import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import HeaderEn from './shared/HeaderEn';
import NavEn from './shared/NavEn/NavEn';
import FooterEn from './shared/FooterEn';

export default function MainJp() {
	return (
		<Fragment>
			<HeaderEn />
			<NavEn />
			<Outlet />
			<FooterEn />
		</Fragment>
	);
}
