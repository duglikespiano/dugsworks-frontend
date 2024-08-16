import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './shared/Header';
import Footer from './shared/Footer';
import './Root.scss';

export default function Main() {
	return (
		<Fragment>
			<div id="font-en">
				<Header />
				<Outlet />
				<Footer />
			</div>
		</Fragment>
	);
}
