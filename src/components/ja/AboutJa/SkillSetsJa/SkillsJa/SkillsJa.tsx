import { Fragment } from 'react';
import styles from './SkillsJa.module.scss';

interface PropsType {
	title: string;
	skills: string[];
}

export default function SkillsJa(props: PropsType) {
	return (
		<Fragment>
			<div className={styles['skillsets-box-ja']}>
				<div className={styles['skillsets-title-ja']}>{props.title}</div>
				<ul className={styles['skillsets-texts-box-ja']}>
					{props.skills.map((item: string, i: number) => (
						<li className={styles['skillsets-texts-ja']} key={i}>
							{item}
						</li>
					))}
				</ul>
			</div>
		</Fragment>
	);
}
