import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavEn from './NavEn/NavEn';
import styles from './HeaderEn.module.scss';

export default function HeaderEn() {
	return (
		<Fragment>
			<header className={styles['header']}>
				<Link className={styles['page-title']} to={'/en'}>
					Dug's Works
				</Link>
				<nav>
					<NavEn />
				</nav>
			</header>
		</Fragment>
	);
}
