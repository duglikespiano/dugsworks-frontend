import { Fragment } from 'react';
import SkillSetsEn from './SkillSetsEn/SkillSetsEn';
import HistoryEn from './HistoryEn/HistoryEn';
import styles from './AboutEn.module.scss';

export default function AboutEn() {
	return (
		<Fragment>
			<div className={styles['about-box-en']}>
				<SkillSetsEn />
				<HistoryEn />
			</div>
		</Fragment>
	);
}
