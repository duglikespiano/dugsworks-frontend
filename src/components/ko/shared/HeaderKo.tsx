import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavKo from './NavKo/NavKo';
import LanguageSelectorKo from './LanguageSelectorKo/LanguageSelectorKo';
import styles from './HeaderKo.module.scss';

export default function HeaderKo() {
	return (
		<Fragment>
			<header className={styles['header']}>
				<Link className={styles['page-title']} to={'/ko'}>
					Dug's Works
				</Link>
				<NavKo />
				<LanguageSelectorKo />
			</header>
		</Fragment>
	);
}
