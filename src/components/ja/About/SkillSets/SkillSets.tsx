import { Fragment } from 'react';
import Skills from './Skills/Skills';
import { frontEndSkillSets, backEndSkillSets, cloudSkillSets, miscSkillSets } from '../../../../variables/variables';
import '../../../../scss/About/SkillSets/SkillSets.scss';

export default function SkillSets(props: { isDarkmode: boolean }) {
	return (
		<Fragment>
			<div id="skillsets-box" className={props.isDarkmode ? 'dark' : ''}>
				<div className="skillsets-box-title">活用可能技術</div>
				<div className="skillsets-box-content">
					<Skills title={'フロントエンド'} skills={frontEndSkillSets} isDarkmode={props.isDarkmode} />
					<Skills title={'バックエンド'} skills={backEndSkillSets} isDarkmode={props.isDarkmode} />
					<Skills title={'クラウド'} skills={cloudSkillSets} isDarkmode={props.isDarkmode} />
					<Skills title={'その他'} skills={miscSkillSets} isDarkmode={props.isDarkmode} />
				</div>
			</div>
			<hr />
		</Fragment>
	);
}
