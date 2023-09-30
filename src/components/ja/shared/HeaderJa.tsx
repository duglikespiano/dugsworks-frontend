import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import NavJa from './NavJa/NavJa';
import styles from './HeaderJa.module.scss';

export default function HeaderJa() {
	return (
		<Fragment>
			<header className={styles['header']}>
				<NavLink className={styles['page-title']} to={'/ja'}>
					Dug's Works
				</NavLink>
				<nav>
					<NavJa />
				</nav>
			</header>
		</Fragment>
	);
}
