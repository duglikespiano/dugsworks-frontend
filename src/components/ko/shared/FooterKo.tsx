import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './FooterKo.module.scss';

const menus: string[][] = [
	['About', '소개', '紹介'],
	['Projects', '프로젝트', 'プロジェクト'],
	['Contact', '문의처', '問い合わせ'],
	['Guestbook', '방명록', '芳名録'],
];

export default function FooterKo() {
	const location = useLocation();

	return (
		<Fragment>
			<ul className={styles['footer-links-box']}>
				{menus.map((item: string[], i: number) => (
					<Link
						className={
							location.pathname.split('/')[2] === item[0].toLowerCase() ? styles['footer-link-active'] : styles['footer-link']
						}
						to={item[0].toLowerCase()}
						key={i}
					>
						{item[1]}
					</Link>
				))}
			</ul>
		</Fragment>
	);
}
