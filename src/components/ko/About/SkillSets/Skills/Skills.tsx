import { Fragment } from 'react';
import styles from './SkillsKo.module.scss';
import { SkillSetsPropsType } from '../../../../../variables/types';

export default function SkillsKo(props: SkillSetsPropsType) {
	return (
		<Fragment>
			<div className={styles['skillsets-box-ko']}>
				<div className={styles['skillsets-title-ko']}>{props.title}</div>
				<ul className={styles['skillsets-texts-box-ko']}>
					{props.skills.map((item: string, i: number) => (
						<li className={styles['skillsets-texts-ko']} key={i}>
							{item}
						</li>
					))}
				</ul>
			</div>
		</Fragment>
	);
}
