import { Fragment } from 'react';
import styles from './LanguageSelectorKo.module.scss';
import { Link } from 'react-router-dom';

export default function LanguageSelectorEn() {
	return (
		<Fragment>
			<div className={styles['language-selector-box-ko']}>
				<Link className={styles['language-selector-ko']} to={'/en'}>
					Eng
				</Link>
				/
				<Link className={styles['language-selector-ko']} to={'/ja'}>
					日本語
				</Link>
			</div>
		</Fragment>
	);
}
