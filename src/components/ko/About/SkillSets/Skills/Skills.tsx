import { Fragment } from 'react';
import { SkillSetsPropsType } from '../../../../../variables/types';
import '../../../../../scss/About/SkillSets/Skills/Skills.scss';

export default function Skills(props: SkillSetsPropsType) {
	return (
		<Fragment>
			<div id="skills">
				<div className="skillsets-title">{props.title}</div>
				<ul className="skillsets-texts-box">
					{props.skills.map((item: string, i: number) => (
						<li className="skillsets-texts" key={i}>
							{item}
						</li>
					))}
				</ul>
			</div>
		</Fragment>
	);
}
