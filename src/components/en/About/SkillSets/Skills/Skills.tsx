import { Fragment } from 'react';
import './Skills.scss';
import { SkillSetsPropsType } from '../../../../../variables/types';

export default function Skills(props: SkillSetsPropsType) {
	return (
		<Fragment>
			<div id="skillsets-box">
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
