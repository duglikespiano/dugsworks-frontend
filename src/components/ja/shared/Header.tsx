import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavJa from './Nav/Nav';
import LanguageSelectorJa from './LanguageSelector/LanguageSelector';
import styles from './HeaderJa.module.scss';

export default function HeaderJa() {
	return (
		<Fragment>
			<header className={styles['header']}>
				<Link className={styles['page-title']} to={'/ja'}>
					Dug's Works
				</Link>
				<NavJa />
				<LanguageSelectorJa />
			</header>
		</Fragment>
	);
}
