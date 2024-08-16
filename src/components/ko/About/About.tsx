import { Fragment } from 'react';
import SkillSetsKo from './SkillSets/SkillSets';
import HistoryKo from './History/History';
import styles from './About.module.scss';

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
