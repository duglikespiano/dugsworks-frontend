import { Fragment } from 'react';
import styles from './FooterJa.module.scss';

export default function FooterJa() {
	return (
		<Fragment>
			<ul className={styles['footer-links']}>
				<li className={styles['footer-link']}>紹介</li>
				<li className={styles['footer-link']}>プロジェクト</li>
				<li className={styles['footer-link']}>問い合わせ</li>
				<li className={styles['footer-link']}>芳名録</li>
			</ul>
		</Fragment>
	);
}
