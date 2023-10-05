import { Fragment } from 'react';
import SkillsEn from './SkillsEn/SkillsEn';
import styles from './SkillSetsEn.module.scss';
import { frontEndSkillSets, backEndSkillSets, cloudSkillSets, miscSkillSets } from '../../../../variables';

export default function SkillSetsEn() {
	return (
		<Fragment>
			<div className={styles['skillsets-box-en']}>
				<div className={styles['skillsets-box-title-en']}>Skillsets</div>
				<div className={styles['skillsets-box-content-en']}>
					<SkillsEn title={'FrontEnd'} skills={frontEndSkillSets} />
					<SkillsEn title={'BackEnd'} skills={backEndSkillSets} />
					<SkillsEn title={'Cloud'} skills={cloudSkillSets} />
					<SkillsEn title={'Misc'} skills={miscSkillSets} />
				</div>
			</div>
			<hr />
		</Fragment>
	);
}
