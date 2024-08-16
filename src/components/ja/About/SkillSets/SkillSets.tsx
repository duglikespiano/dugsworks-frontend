import { Fragment } from 'react';
import SkillsJa from './Skills/Skills';
import styles from './SkillSets.module.scss';
import { frontEndSkillSets, backEndSkillSets, cloudSkillSets, miscSkillSets } from '../../../../variables/variables';

export default function SkillSetsJa() {
	return (
		<Fragment>
			<div className={styles['skillsets-box-ja']}>
				<div className={styles['skillsets-box-title-ja']}>活用可能技術</div>
				<div className={styles['skillsets-box-content-ja']}>
					<SkillsJa title={'フロントエンド'} skills={frontEndSkillSets} />
					<SkillsJa title={'バックエンド'} skills={backEndSkillSets} />
					<SkillsJa title={'クラウド'} skills={cloudSkillSets} />
					<SkillsJa title={'その他'} skills={miscSkillSets} />
				</div>
			</div>
			<hr />
		</Fragment>
	);
}
