import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './NavEn.module.scss';

const menus: string[][] = [
	['About', '소개', '紹介'],
	['Projects', '프로젝트', 'プロジェクト'],
	['Contact', '문의처', '問い合わせ'],
	['Guestbook', '방명록', '芳名録'],
];

export default function NavEn() {
	const location = useLocation();

	return (
		<Fragment>
			<ul className={styles['nav-links']}>
				{menus.map((item: string[], i: number) => (
					<Link
						className={location.pathname.split('/')[2] === item[0].toLowerCase() ? styles['nav-link-active'] : styles['nav-link']}
						to={item[0].toLowerCase()}
						key={i}
					>
						{item[0]}
					</Link>
				))}
			</ul>
		</Fragment>
	);
}
