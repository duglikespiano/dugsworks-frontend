import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import NavEn from './NavEn/NavEn';
import styles from './HeaderEn.module.scss';

export default function HeaderEn() {
	return (
		<Fragment>
			<header className={styles['header']}>
				<NavLink className={styles['page-title']} to={'/en'}>
					Dug's Works
				</NavLink>
				<nav>
					<NavEn />
				</nav>
			</header>
		</Fragment>
	);
}
