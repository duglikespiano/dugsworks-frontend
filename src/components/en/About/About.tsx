import { useContext, Fragment } from 'react';
import SkillSets from './SkillSets/SkillSets';
import History from './History/History';
import { DarkmodeContext } from '../../../contexts/DarkmodeContext';
import '../../../scss/About/About.scss';

export default function About() {
	const { isDarkmode } = useContext(DarkmodeContext);
	return (
		<Fragment>
			<div id="about-box">
				<SkillSets isDarkmode={isDarkmode} />
				<History isDarkmode={isDarkmode} />
			</div>
		</Fragment>
	);
}
