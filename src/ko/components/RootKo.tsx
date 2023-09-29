import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import HeaderKo from './HeaderKo';
import NavKo from './NavKo';
import FooterKo from './FooterKo';

export default function MainJp() {
	return (
		<Fragment>
			<HeaderKo />
			<NavKo />
			<Outlet />
			<FooterKo />
		</Fragment>
	);
}
