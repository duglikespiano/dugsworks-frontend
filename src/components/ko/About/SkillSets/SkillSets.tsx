import { Fragment } from 'react';
import SkillsKo from './Skills/Skills';
import styles from './SkillSetsKo.module.scss';
import { frontEndSkillSets, backEndSkillSets, cloudSkillSets, miscSkillSets } from '../../../../variables/variables';

export default function SkillSetsKo() {
	return (
		<Fragment>
			<div className={styles['skillsets-box-ko']}>
				<div className={styles['skillsets-box-title-ko']}>활용가능기술</div>
				<div className={styles['skillsets-box-content-ko']}>
					<SkillsKo title={'프론트엔드'} skills={frontEndSkillSets} />
					<SkillsKo title={'백엔드'} skills={backEndSkillSets} />
					<SkillsKo title={'클라우드'} skills={cloudSkillSets} />
					<SkillsKo title={'기타'} skills={miscSkillSets} />
				</div>
			</div>
			<hr />
		</Fragment>
	);
}
