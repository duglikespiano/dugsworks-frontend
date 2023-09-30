import { Fragment } from 'react';
import styles from './FooterKo.module.scss';

export default function FooterKo() {
	return (
		<Fragment>
			<ul className={styles['footer-links']}>
				<li className={styles['footer-link']}>소개</li>
				<li className={styles['footer-link']}>프로젝트</li>
				<li className={styles['footer-link']}>문의사항</li>
				<li className={styles['footer-link']}>방명록</li>
			</ul>
		</Fragment>
	);
}
