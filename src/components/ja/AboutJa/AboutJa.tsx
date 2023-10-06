import { Fragment } from 'react';
import SkillSetsJa from './SkillSetsJa/SkillSetsJa';
import HistoryJa from './HistoryJa/HistoryJa';
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
