import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderKo from './shared/HeaderKo';
import FooterKo from './shared/FooterKo';
import styles from './RootKo.module.scss';

export default function MainJp() {
	return (
		<Fragment>
			<div className={styles['font-ko']}>
				<HeaderKo />
				<Outlet />
				<FooterKo />
			</div>
		</Fragment>
	);
}
