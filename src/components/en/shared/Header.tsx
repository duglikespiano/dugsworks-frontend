import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavEn from './Nav/Nav';
import LanguageSelectorEn from './LanguageSelector/LanguageSelector';
import styles from './Header.module.scss';

export default function HeaderEn() {
	return (
		<Fragment>
			<header className={styles['header']}>
				<Link className={styles['page-title']} to={'/en'}>
					Dug's Works
				</Link>
				<NavEn />
				<LanguageSelectorEn />
			</header>
		</Fragment>
	);
}
