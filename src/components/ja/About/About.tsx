import { Fragment } from 'react';
import SkillSetsJa from './SkillSets/SkillSets';
import HistoryJa from './History/History';
import styles from './AboutJa.module.scss';

export default function AboutEn() {
	return (
		<Fragment>
			<div className={styles['about-box-ja']}>
				<SkillSetsJa />
				<HistoryJa />
			</div>
		</Fragment>
	);
}
