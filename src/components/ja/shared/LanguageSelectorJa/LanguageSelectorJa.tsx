import { Fragment } from 'react';
import styles from './LanguageSelectorJa.module.scss';
import { Link } from 'react-router-dom';

export default function LanguageSelectorJa() {
	return (
		<Fragment>
			<div className={styles['language-selector-box-ja']}>
				<Link className={styles['language-selector-ja']} to={'/ko'}>
					한글
				</Link>
				/
				<Link className={styles['language-selector-ja']} to={'/en'}>
					Eng
				</Link>
			</div>
		</Fragment>
	);
}
