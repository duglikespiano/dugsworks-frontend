import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import NavKo from './NavKo/NavKo';
import styles from './HeaderKo.module.scss';

export default function HeaderKo() {
	return (
		<Fragment>
			<header className={styles['header']}>
				<NavLink className={styles['page-title']} to={'/ko'}>
					Dug's Works
				</NavLink>
				<nav>
					<NavKo />
				</nav>
			</header>
		</Fragment>
	);
}
