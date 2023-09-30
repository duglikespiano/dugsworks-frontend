import { Fragment } from 'react';
import styles from './NavKo.module.scss';

export default function NavKo() {
	return (
		<Fragment>
			<ul className={styles['nav-links']}>
				<li className={styles['nav-link']}>소개</li>
				<li className={styles['nav-link']}>프로젝트</li>
				<li className={styles['nav-link']}>문의사항</li>
				<li className={styles['nav-link']}>방명록</li>
			</ul>
		</Fragment>
	);
}
