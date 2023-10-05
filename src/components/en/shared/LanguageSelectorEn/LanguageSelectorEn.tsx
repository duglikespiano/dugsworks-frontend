import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './LanguageSelectorEn.module.scss';
import { languages } from '../../../../variables';

export default function LanguageSelectorEn() {
	return (
		<Fragment>
			<div className={styles['language-selector-box']}>
				<Link className={styles['language-selector']} to={'/ko'}>
					{languages[1].language}
				</Link>
				/
				<Link className={styles['language-selector']} to={'/ja'}>
					{languages[2].language}
				</Link>
			</div>
		</Fragment>
	);
}
