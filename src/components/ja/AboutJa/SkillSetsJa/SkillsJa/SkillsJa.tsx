import { Fragment } from 'react';
import styles from './SkillsJa.module.scss';

interface SkillsObject {
	title?: string;
	skills?: string[];
}

interface PropsType {
	skills: SkillsObject[];
}

export default function SkillsJa(props: PropsType) {
	return (
		<Fragment>
			<div className={styles['skillsets-box-ja']}>
				<div className={styles['skillsets-title-ja']}>{props.skills[0].title}</div>
				<ul className={styles['skillsets-texts-box-ja']}>
					{props.skills[1].skills!.map((item: string, i: number) => (
						<li className={styles['skillsets-texts-ja']} key={i}>
							{item}
						</li>
					))}
				</ul>
			</div>
		</Fragment>
	);
}
