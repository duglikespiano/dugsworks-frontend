import { Fragment } from 'react';
import styles from './SkillsJa.module.scss';
import { SkillSetsPropsType } from '../../../../../variables/types';

export default function SkillsJa(props: SkillSetsPropsType) {
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
