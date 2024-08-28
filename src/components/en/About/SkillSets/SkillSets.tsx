import { Fragment } from 'react';
import Skills from './Skills/Skills';
import { frontEndSkillSets, backEndSkillSets, cloudSkillSets, miscSkillSets } from '../../../../variables/variables';
import '../../../../scss/About/SkillSets/SkillSets.scss';

export default function SkillSets(props: { isDarkmode: boolean }) {
	return (
		<Fragment>
			<div id="skillsets-box" className={props.isDarkmode ? 'dark' : ''}>
				<div className="skillsets-box-title">Skillsets</div>
				<div className="skillsets-box-content">
					<Skills title={'FrontEnd'} skills={frontEndSkillSets} isDarkmode={props.isDarkmode} />
					<Skills title={'BackEnd'} skills={backEndSkillSets} isDarkmode={props.isDarkmode} />
					<Skills title={'Cloud'} skills={cloudSkillSets} isDarkmode={props.isDarkmode} />
					<Skills title={'Misc'} skills={miscSkillSets} isDarkmode={props.isDarkmode} />
				</div>
			</div>
			<hr />
		</Fragment>
	);
}
