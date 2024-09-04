import { useContext, Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import { DarkmodeContext } from '../../contexts/DarkmodeContext';
import '../../scss/Root/Root.scss';

export default function Main() {
	const { isDarkmode } = useContext(DarkmodeContext);

	return (
		<Fragment>
			<div id="main" className={isDarkmode ? 'font-ja dark' : 'font-ja'}>
				<Header />
				<Outlet />
				<Footer />
			</div>
		</Fragment>
	);
}
