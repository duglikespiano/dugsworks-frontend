import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavJa from './NavJa/NavJa';
import styles from './HeaderJa.module.scss';

export default function HeaderJa() {
	return (
		<Fragment>
			<header className={styles['header']}>
				<Link className={styles['page-title']} to={'/ja'}>
					Dug's Works
				</Link>
				<nav>
					<NavJa />
				</nav>
			</header>
		</Fragment>
	);
}
