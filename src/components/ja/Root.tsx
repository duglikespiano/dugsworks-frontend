import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import '../../scss/Root/Root.scss';

export default function Main() {
	return (
		<Fragment>
			<div id="font-ja">
				<Header />
				<Outlet />
				<Footer />
			</div>
		</Fragment>
	);
}
