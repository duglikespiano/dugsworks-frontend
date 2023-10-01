import { Fragment } from 'react';
import styles from './LanguageSelectorEn.module.scss';
import { Link } from 'react-router-dom';

export default function LanguageSelectorEn() {
	return (
		<Fragment>
			<div className={styles['language-selector-box-en']}>
				<Link className={styles['language-selector-en']} to={'/ko'}>
					한글
				</Link>
				/
				<Link className={styles['language-selector-en']} to={'/ja'}>
					日本語
				</Link>
			</div>
		</Fragment>
	);
}
