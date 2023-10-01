import { Fragment } from 'react';
import styles from './FooterKo.module.scss';

export default function FooterKo() {
	return (
		<Fragment>
			<ul className={styles['footer-links-box-ko']}>
				<li className={styles['footer-link-ko']}>소개</li>
				<li className={styles['footer-link-ko']}>프로젝트</li>
				<li className={styles['footer-link-ko']}>문의사항</li>
				<li className={styles['footer-link-ko']}>방명록</li>
			</ul>
		</Fragment>
	);
}
