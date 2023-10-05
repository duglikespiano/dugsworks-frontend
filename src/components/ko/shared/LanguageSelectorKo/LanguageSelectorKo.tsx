import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './LanguageSelectorKo.module.scss';
import { languages } from '../../../../variables';

export default function LanguageSelectorEn() {
	return (
		<Fragment>
			<div className={styles['language-selector-box']}>
				<Link className={styles['language-selector']} to={'/en'}>
					{languages[0].language}
				</Link>
				/
				<Link className={styles['language-selector']} to={'/ja'}>
					{languages[2].language}
				</Link>
			</div>
		</Fragment>
	);
}
