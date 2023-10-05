import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './LanguageSelectorJa.module.scss';
import { languages } from '../../../../variables';

export default function LanguageSelectorJa() {
	return (
		<Fragment>
			<div className={styles['language-selector-box']}>
				<Link className={styles['language-selector']} to={'/ko'}>
					{languages[1].language}
				</Link>
				/
				<Link className={styles['language-selector']} to={'/en'}>
					{languages[0].language}
				</Link>
			</div>
		</Fragment>
	);
}
