import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavKo from './Nav/Nav';
import LanguageSelectorKo from './LanguageSelector/LanguageSelector';
import styles from './Header.module.scss';

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
