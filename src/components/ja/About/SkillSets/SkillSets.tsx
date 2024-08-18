import { Fragment } from 'react';
import Skills from './Skills/Skills';
import { frontEndSkillSets, backEndSkillSets, cloudSkillSets, miscSkillSets } from '../../../../variables/variables';
import '../../../../scss/About/SkillSets/SkillSets.scss';

export default function SkillSets() {
	return (
		<Fragment>
			<div id="skillsets-box">
				<div className="skillsets-box-title">活用可能技術</div>
				<div className="skillsets-box-content">
					<Skills title={'フロントエンド'} skills={frontEndSkillSets} />
					<Skills title={'バックエンド'} skills={backEndSkillSets} />
					<Skills title={'クラウド'} skills={cloudSkillSets} />
					<Skills title={'その他'} skills={miscSkillSets} />
				</div>
			</div>
			<hr />
		</Fragment>
	);
}
