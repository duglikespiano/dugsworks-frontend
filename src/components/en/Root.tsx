import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderEn from './shared/Header';
import FooterEn from './shared/Footer';
import styles from './Root.module.scss';

export default function MainEn() {
	return (
		<Fragment>
			<div className={styles['font-en']}>
				<HeaderEn />
				<Outlet />
				<FooterEn />
			</div>
		</Fragment>
	);
}
