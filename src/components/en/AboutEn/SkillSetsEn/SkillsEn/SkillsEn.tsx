import { Fragment } from 'react';
import styles from './SkillsEn.module.scss';

interface SkillsObject {
	title?: string;
	skills?: string[];
}

interface PropsType {
	skills: SkillsObject[];
}

export default function SkillsEn(props: PropsType) {
	return (
		<Fragment>
			<div className={styles['skillsets-box-en']}>
				<div className={styles['skillsets-title-en']}>{props.skills[0].title}</div>
				<ul className={styles['skillsets-texts-box-en']}>
					{props.skills[1].skills!.map((item: string, i: number) => (
						<li className={styles['skillsets-texts-en']} key={i}>
							{item}
						</li>
					))}
				</ul>
			</div>
		</Fragment>
	);
}
