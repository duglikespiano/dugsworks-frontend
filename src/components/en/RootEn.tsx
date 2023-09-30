import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderEn from './shared/HeaderEn';
import FooterEn from './shared/FooterEn';

export default function MainJp() {
	return (
		<Fragment>
			<HeaderEn />
			<Outlet />
			<FooterEn />
		</Fragment>
	);
}
