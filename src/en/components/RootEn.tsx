import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import HeaderEn from './HeaderEn';
import NavEn from './NavEn';
import FooterEn from './FooterEn';

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
