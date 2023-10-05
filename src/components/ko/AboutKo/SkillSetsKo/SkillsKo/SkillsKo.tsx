import { Fragment } from 'react';
import styles from './SkillsKo.module.scss';

interface SkillsObject {
	title?: string;
	skills?: string[];
}

interface PropsType {
	skills: SkillsObject[];
}

export default function SkillsKo(props: PropsType) {
	return (
		<Fragment>
			<div className={styles['skillsets-box-ko']}>
				<div className={styles['skillsets-title-ko']}>{props.skills[0].title}</div>
				<ul className={styles['skillsets-texts-box-ko']}>
					{props.skills[1].skills!.map((item: string, i: number) => (
						<li className={styles['skillsets-texts-ko']} key={i}>
							{item}
						</li>
					))}
				</ul>
			</div>
		</Fragment>
	);
}
