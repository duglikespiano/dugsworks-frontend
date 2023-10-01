import { Fragment } from 'react';
import styles from './FooterJa.module.scss';

export default function FooterJa() {
	return (
		<Fragment>
			<ul className={styles['footer-links-box-ja']}>
				<li className={styles['footer-link-ja']}>紹介</li>
				<li className={styles['footer-link-ja']}>プロジェクト</li>
				<li className={styles['footer-link-ja']}>問い合わせ</li>
				<li className={styles['footer-link-ja']}>芳名録</li>
			</ul>
		</Fragment>
	);
}
