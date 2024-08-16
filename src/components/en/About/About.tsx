import { Fragment } from 'react';
import SkillSets from './SkillSets/SkillSets';
import History from './History/History';
import './About.scss';

export default function About() {
	return (
		<Fragment>
			<div id="about-box">
				<SkillSets />
				<History />
			</div>
		</Fragment>
	);
}
