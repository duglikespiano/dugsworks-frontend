import { Fragment } from 'react';
import Skills from './Skills/Skills';
import styles from './SkillSets.module.scss';
import { frontEndSkillSets, backEndSkillSets, cloudSkillSets, miscSkillSets } from '../../../../variables/variables';

export default function SkillSetsEn() {
	return (
		<Fragment>
			<div className={styles['skillsets-box-en']}>
				<div className={styles['skillsets-box-title-en']}>Skillsets</div>
				<div className={styles['skillsets-box-content-en']}>
					<Skills title={'FrontEnd'} skills={frontEndSkillSets} />
					<Skills title={'BackEnd'} skills={backEndSkillSets} />
					<Skills title={'Cloud'} skills={cloudSkillSets} />
					<Skills title={'Misc'} skills={miscSkillSets} />
				</div>
			</div>
			<hr />
		</Fragment>
	);
}
