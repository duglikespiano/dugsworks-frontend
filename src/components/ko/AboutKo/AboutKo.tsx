import { Fragment } from 'react';
import SkillSetsKo from './SkillSetsKo/SkillSetsKo';
import styles from './AboutKo.module.scss';

export default function AboutEn() {
	return (
		<Fragment>
			<div className={styles['about-box-ko']}>
				<SkillSetsKo />
			</div>
		</Fragment>
	);
}
