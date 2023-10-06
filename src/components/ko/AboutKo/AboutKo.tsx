import { Fragment } from 'react';
import SkillSetsKo from './SkillSetsKo/SkillSetsKo';
import HistoryKo from './HistoryKo/HistoryKo';
import styles from './AboutKo.module.scss';

export default function AboutEn() {
	return (
		<Fragment>
			<div className={styles['about-box-ko']}>
				<SkillSetsKo />
				<HistoryKo />
			</div>
		</Fragment>
	);
}
