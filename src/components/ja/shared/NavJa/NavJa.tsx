import { Fragment } from 'react';
import styles from './NavJa.module.scss';

export default function NavJa() {
	return (
		<Fragment>
			<ul className={styles['nav-links']}>
				<li className={styles['nav-link']}>紹介</li>
				<li className={styles['nav-link']}>プロジェクト</li>
				<li className={styles['nav-link']}>問い合わせ</li>
				<li className={styles['nav-link']}>芳名録</li>
			</ul>
		</Fragment>
	);
}
