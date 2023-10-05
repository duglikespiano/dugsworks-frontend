import { Fragment } from 'react';
import SkillSetsEn from './SkillSetsEn/SkillSetsEn';
import styles from './AboutEn.module.scss';

export default function AboutEn() {
	return (
		<Fragment>
			<div className={styles['about-box-en']}>
				<SkillSetsEn />
			</div>
		</Fragment>
	);
}
