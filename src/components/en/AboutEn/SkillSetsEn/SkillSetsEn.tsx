import { Fragment } from 'react';
import SkillsEn from './SkillsEn/SkillsEn';
import styles from './SkillSetsEn.module.scss';

const frondEndSkillSets = [
	{ title: 'FrontEnd' },
	{ skills: ['HTML/CSS', 'Javascript/Typescript', 'React', 'Vue', 'Wordpress', 'Sass'] },
];
const backEndSkillSets = [
	{ title: 'BackEnd' },
	{ skills: ['Node.js', 'Javascript/Typescript', 'Express', 'Python', 'MySQL', 'Socket.io'] },
];
const cloudSkillSets = [{ title: 'Clouds' }, { skills: ['AWS', 'Netlify', 'CloudType', 'DNS'] }];
const miscSkillSets = [{ title: 'Misc' }, { skills: ['Git', 'Linux', 'UnitTest'] }];

export default function SkillSetsEn() {
	return (
		<Fragment>
			<div className={styles['skillsets-box-en']}>
				<div className={styles['skillsets-box-title-en']}>Usable Skillsets</div>
				<div className={styles['skillsets-box-content-en']}>
					<SkillsEn skills={frondEndSkillSets} />
					<SkillsEn skills={backEndSkillSets} />
					<SkillsEn skills={cloudSkillSets} />
					<SkillsEn skills={miscSkillSets} />
				</div>
			</div>
			<hr />
		</Fragment>
	);
}
