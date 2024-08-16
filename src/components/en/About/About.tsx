import { Fragment } from 'react';
import SkillSets from './SkillSets/SkillSets';
import History from './History/History';
import styles from './AboutEn.module.scss';

export default function AboutEn() {
	return (
		<Fragment>
			<div className={styles['about-box-en']}>
				<SkillSets />
				<History />
			</div>
		</Fragment>
	);
}
