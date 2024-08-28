import { Fragment } from 'react';
import Skills from './Skills/Skills';
import { frontEndSkillSets, backEndSkillSets, cloudSkillSets, miscSkillSets } from '../../../../variables/variables';
import '../../../../scss/About/SkillSets/SkillSets.scss';

export default function SkillSets(props: { isDarkmode: boolean }) {
	return (
		<Fragment>
			<div id="skillsets-box" className={props.isDarkmode ? 'dark' : ''}>
				<div className="skillsets-box-title">활용가능기술</div>
				<div className="skillsets-box-content">
					<Skills title={'프론트엔드'} skills={frontEndSkillSets} isDarkmode={props.isDarkmode} />
					<Skills title={'백엔드'} skills={backEndSkillSets} isDarkmode={props.isDarkmode} />
					<Skills title={'클라우드'} skills={cloudSkillSets} isDarkmode={props.isDarkmode} />
					<Skills title={'기타'} skills={miscSkillSets} isDarkmode={props.isDarkmode} />
				</div>
			</div>
			<hr />
		</Fragment>
	);
}
