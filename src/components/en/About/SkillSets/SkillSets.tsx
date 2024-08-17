import { Fragment } from 'react';
import Skills from './Skills/Skills';
import { frontEndSkillSets, backEndSkillSets, cloudSkillSets, miscSkillSets } from '../../../../variables/variables';
import '../../../../scss/About/SkillSets/SkillSets.scss';

export default function SkillSets() {
	return (
		<Fragment>
			<div id="skillsets-box">
				<div className="skillsets-box-title">Skillsets</div>
				<div className="skillsets-box-content">
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
