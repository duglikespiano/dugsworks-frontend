import { Fragment } from 'react';
import styles from './SkillsEn.module.scss';

interface PropsType {
	title: string;
	skills: string[];
}

export default function SkillsEn(props: PropsType) {
	return (
		<Fragment>
			<div className={styles['skillsets-box-en']}>
				<div className={styles['skillsets-title-en']}>{props.title}</div>
				<ul className={styles['skillsets-texts-box-en']}>
					{props.skills.map((item: string, i: number) => (
						<li className={styles['skillsets-texts-en']} key={i}>
							{item}
						</li>
					))}
				</ul>
			</div>
		</Fragment>
	);
}
