import { Fragment } from 'react';
import Skills from './Skills/Skills';
import { frontEndSkillSets, backEndSkillSets, cloudSkillSets, miscSkillSets } from '../../../../variables/variables';
import '../../../../scss/About/SkillSets/SkillSets.scss';

export default function SkillSets() {
	return (
		<Fragment>
			<div id="skillsets-box">
				<div className="skillsets-box-title">활용가능기술</div>
				<div className="skillsets-box-content">
					<Skills title={'프론트엔드'} skills={frontEndSkillSets} />
					<Skills title={'백엔드'} skills={backEndSkillSets} />
					<Skills title={'클라우드'} skills={cloudSkillSets} />
					<Skills title={'기타'} skills={miscSkillSets} />
				</div>
			</div>
			<hr />
		</Fragment>
	);
}
